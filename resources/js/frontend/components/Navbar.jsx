import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const NAV_ITEMS = [
    { label: "Kezdőlap", href: "#top" },
    { label: "Rólam", href: "#about" },
    { label: "Projektek", href: "#projects" },
    { label: "Skillek", href: "#skills" },
    { label: "Tapasztalat", href: "#experience" },
];

export default function Navbar({ hoverSound, selectSound, isTouchDevice }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("#top");
    const [cookies] = useCookies(["audioPermission"]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const current = window.location.hash || "#top";
        setActiveHash(current);
    }, []);

    const handleNavigate = (href) => {
        setActiveHash(href);
        setIsOpen(false);
        if (typeof document !== "undefined") {
            const target = document.querySelector(href);
        }

        if (cookies.audioPermission) {
            selectSound.play();
        }
    };

    const linkBase =
        "relative px-3 py-2 text-sm font-semibold tracking-[0.12em] uppercase transition cursor-none";

    return (
        <nav className="fixed w-screen top-0 z-40 bg-main-light-dark/90 backdrop-blur border-b border-black/30 cursor-none ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-custom">
                        <span className="p-2 text-xl rounded-sm bg-main-orange text-black font-bold flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
                            Szaniszló
                        </span>
                        <span className="text-white/85 text-xl tracking-[0.18em] uppercase hidden sm:inline">
                            Árpád
                        </span>
                    </div>

                    <div className="hidden 2xl:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeHash === item.href;
                            return (
                                <Link
                                    onClick={() => handleNavigate(item.href)}
                                    href={item.href}
                                    viewTransition
                                    key={item.href}
                                    className={`${linkBase} ${isActive
                                        ? "text-white bg-black/40 border border-main-orange/70 shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
                                        : "text-white/75 hover:text-white hover:bg-white/5"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                    onMouseEnter={() => {
                                        if (cookies.audioPermission && !isTouchDevice) {
                                            hoverSound.play();
                                        }
                                    }}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            viewTransition
                            href="#contact"
                            className="ml-2 inline-flex items-center gap-2 rounded-sm border border-main-orange bg-main-orange text-black px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] shadow-[0_12px_28px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition"
                        >
                            Kapcsolat
                            <i className="bi bi-arrow-right-short text-lg" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="flex xl:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-sm p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-main-orange"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}

                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <span className="sr-only">Menü nyitása</span>
                            {!isOpen ? (
                                <i className="bi bi-list text-2xl" aria-hidden="true" />
                            ) : (
                                <i className="bi bi-x-lg text-xl" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-black/40 bg-main-dark">
                    <div className="space-y-2 px-4 py-4">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeHash === item.href;
                            return (
                                <Link
                                    viewTransition
                                    href={item.href}
                                    key={item.href}
                                    onClick={() => handleNavigate(item.href)}
                                    className={`${linkBase} w-full text-left block ${isActive
                                        ? "text-white bg-black/50 border border-main-orange/70"
                                        : "text-white/75 hover:text-white hover:bg-white/5"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <button
                            onClick={() => handleNavigate("#contact")}
                            className="w-full mt-1 inline-flex items-center justify-between rounded-sm border border-main-orange bg-main-orange text-black px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] shadow-[0_12px_28px_rgba(0,0,0,0.4)]"
                        >
                            Kapcsolat
                            <i className="bi bi-telephone-outbound-fill text-base" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
