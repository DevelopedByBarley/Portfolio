import { useEffect, useMemo, useRef, useState } from "react";

const MENU_ITEMS = [
    { label: "SKILLS", description: "Technológiák és stack", color: "#F97316", location: "#skills" },
    { label: "TO TOP", description: "Vissza az elejére", color: "#C084FC", location: "#top" },
    { label: "ABOUT", description: "Rólam röviden", color: "#38BDF8", location: "#about" },
    { label: "PROJECTS", description: "Kiemelt munkák", color: "#FB923C", location: "#projects" },
    { label: "EXPERIENCE", description: "Tapasztalat & évek", color: "#FACC15", location: "#experience" },
    { label: "CONTACT", description: "Elérhetőségek", color: "#34D399", location: "#contact" },
];

const polarToCartesian = (cx, cy, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
    return {
        x: cx + radius * Math.cos(angleInRadians),
        y: cy + radius * Math.sin(angleInRadians),
    };
};

const createSegmentPath = (cx, cy, outerRadius, innerRadius, startAngle, endAngle) => {
    const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle);
    const outerEnd = polarToCartesian(cx, cy, outerRadius, endAngle);
    const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle);
    const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        `M ${outerStart.x} ${outerStart.y}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
        `L ${innerEnd.x} ${innerEnd.y}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
        "Z",
    ].join(" ");
};

const VIEWBOX_SIZE = 240;
const CENTER = VIEWBOX_SIZE / 2;
const OUTER_RADIUS = 110;
const INNER_RADIUS = 58;
const LABEL_RADIUS = 85;

// Navigate onSelect
export const Menu = ({ onSelect = (item) => { } }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const isKeyDown = useRef(false);

    const segments = useMemo(() => {
        const anglePerSlice = 360 / MENU_ITEMS.length;

        return MENU_ITEMS.map((item, index) => {
            const startAngle = -90 + index * anglePerSlice;
            const endAngle = startAngle + anglePerSlice;
            const midAngle = startAngle + anglePerSlice / 2;

            return {
                ...item,
                path: createSegmentPath(CENTER, CENTER, OUTER_RADIUS, INNER_RADIUS, startAngle, endAngle),
                labelPosition: polarToCartesian(CENTER, CENTER, LABEL_RADIUS, midAngle),
                midAngle,
            };
        });
    }, []);

    const activeItem = MENU_ITEMS[hoveredIndex] ?? MENU_ITEMS[0];

    const handleSelect = () => {
        const item = MENU_ITEMS[hoveredIndex];
        if (item) {
            onSelect(item);
            // Navigálás a location-re
            if (item.location) {
                const element = document.querySelector(item.location);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    window.location.href = item.location;
                }
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.key === "m" || event.key === "M") && !isKeyDown.current) {
                isKeyDown.current = true;
                setIsOpen(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === "m" || event.key === "M") {
                isKeyDown.current = false;
                handleSelect();
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [hoveredIndex]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 text-white z-[60]">
            <div className="relative w-[460px] h-[460px] drop-shadow-[0_0_50px_rgba(0,0,0,0.55)]">
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-300">
                    <svg
                        width="220"
                        height="70"
                        viewBox="0 0 220 70"
                        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                    >
                        <path
                            d="M10 50 H70 L85 40 H205 L210 35 L200 25 H120 L110 10 H35 L28 18 H10 Z"
                            fill="#2F2F2F"
                            stroke="#f97316"
                            strokeWidth="3"
                        />
                        <rect x="140" y="28" width="45" height="12" fill="#f97316" />
                        <circle cx="40" cy="50" r="8" fill="#111" stroke="#f97316" strokeWidth="3" />
                        <circle cx="185" cy="50" r="8" fill="#111" stroke="#f97316" strokeWidth="3" />
                    </svg>
                    <span className="text-xs tracking-[0.5em] text-gray-400 mt-2 uppercase">weapon wheel</span>
                </div>
                <svg
                    viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
                    className="w-full h-full"
                    role="presentation"
                    aria-label="GTA stílusú körmenü"
                >
                    <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={OUTER_RADIUS + 2}
                        fill="rgba(10,10,10,0.9)"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="2"
                    />

                    {segments.map((segment, index) => (
                        <path

                            key={segment.label}
                            d={segment.path}
                            fill={segment.color}
                            stroke="rgba(15,15,15,0.6)"
                            strokeWidth="1.5"
                            style={{ opacity: hoveredIndex === index ? 0.95 : 0.4 }}
                            className="transition-opacity duration-300 cursor-pointer"
                            onMouseEnter={() => {
                                setHoveredIndex(index)
                            }}
                            onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? 0 : prev))}
                            onFocus={() => setHoveredIndex(index)}
                            onBlur={() => setHoveredIndex(0)}
                            role="button"
                            tabIndex={0}
                        />
                    ))}

                    {segments.map((segment, index) => (
                        <text
                            key={`${segment.label}-label`}
                            x={segment.labelPosition.x}
                            y={segment.labelPosition.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{
                                fill: hoveredIndex === index ? "#ffffff" : "rgba(255,255,255,0.6)",
                                fontSize: 7,
                                letterSpacing: "0.10em",
                                textTransform: "uppercase",
                                textShadow: hoveredIndex === index ? "0 0 10px rgba(249,115,22,0.9)" : "0 0 7px rgba(0,0,0,0.8)",
                            }}
                            className="pointer-events-none select-none"
                        >
                            {segment.label}
                        </text>
                    ))}

                    <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={INNER_RADIUS}
                        fill="rgba(5,5,5,0.92)"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-8">
                    <p className="text-sm tracking-[0.3em] text-gray-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.45)]">
                        SELECT
                    </p>
                    <h3
                        className="text-3xl font-bold text-white mt-3 uppercase"
                        style={{ textShadow: "0 0 12px rgba(56,189,248,0.8)" }}
                    >
                        {activeItem.label}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">{activeItem.description}</p>
                </div>
            </div>
        </div>
    );
};
