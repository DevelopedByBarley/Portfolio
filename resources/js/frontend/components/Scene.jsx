import { forwardRef, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const Scene = () => {
    const wrapperRef = useRef(null);
    const starsRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(
        () => {
            if (!wrapperRef.current) {
                return;
            }

            const starSvgs = starsRef.current
                ? gsap.utils.toArray(starsRef.current.querySelectorAll("svg"))
                : [];

            const contentTargets = [imageRef.current];
            if (starsRef.current) {
                contentTargets.push(starsRef.current);
            }

            const timeline = gsap.timeline({
                defaults: { ease: "power2.inOut" },
                //onComplete: () => setIsVisible(false),
            });

            gsap.set(imageRef.current, { autoAlpha: 0 });
            gsap.set(starSvgs, { autoAlpha: 1 });
            gsap.set(overlayRef.current, { yPercent: 100, autoAlpha: 1 });

            for (let i = 0; i < 3; i += 1) {
                timeline.to(starSvgs, {
                    autoAlpha: 0,
                    duration: 0.25,
                });
                timeline.to(starSvgs, {
                    autoAlpha: 0,
                    duration: 0.5,
                });
                timeline.to(starSvgs, {
                    autoAlpha: 1,
                    duration: 0.25,
                });
            }

            timeline.to(imageRef.current, {
                autoAlpha: 1,
                duration: 0.9,
                ease: "power2.out",
            });

            timeline
                .to(
                    overlayRef.current,
                    { yPercent: 0, duration: 0.8, ease: "power2.out" },
                    "+=0.4"
                )
                .to(
                    contentTargets,
                    { autoAlpha: 0, duration: 0.35, ease: "power1.in" },
                    "<"
                )
                .set(wrapperRef.current, { autoAlpha: 0 })
                .to(overlayRef.current, {
                    yPercent: -100,
                    duration: 0.9,
                    ease: "power2.in",
                })

            return () => timeline.kill();
        },
        { scope: wrapperRef, dependencies: [] }
    );

    if (!isVisible) {
        return null;
    }

    return (
        <div className="relative">
            <div
                ref={overlayRef}
                className="page animation-item fixed inset-x-0 bottom-0 h-screen w-screen bg-main-orange pointer-events-none border-b-4 border-black shadow-[0_-30px_60px_rgba(0,0,0,0.55)] z-40"
            />
            <SceneWrapper ref={wrapperRef}>
                <img
                    ref={imageRef}
                    src="/storage/images/profile.jpg"
                    className="w-52 rounded-full my-5 shadow-2xl"
                    alt="Profile"
                />
                <Stars ref={starsRef} />
            </SceneWrapper>
        </div>
    );
};

const StarIcon = ({ filled, index }) => {
    const shadowId = `gtaStarShadow-${index}`;

    return (
        <svg
            key={`star-${index}`}
            viewBox="0 0 100 100"
            className="w-12 h-12 drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]"
        >
            <defs>
                <filter
                    id={shadowId}
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                >
                    <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="4"
                        floodColor="#1f1400"
                        floodOpacity="0.65"
                    />
                </filter>
            </defs>
            <polygon
                points="50,5 61,35 95,35 67,54 78,86 50,66 22,86 33,54 5,35 39,35"
                fill={filled ? "#000000" : "#ffffff"}
                stroke="#000000"
                strokeWidth="6"
                filter={`url(#${shadowId})`}
            />
        </svg>
    );
};

const Stars = forwardRef(({ totalStars = 5, filledStars = 0 }, ref) => {
    return (
        <div ref={ref} className="flex gap-3">
            {Array.from({ length: totalStars }).map((_, index) => (
                <StarIcon
                    key={index}
                    index={index}
                    filled={index < filledStars}
                />
            ))}
        </div>
    );
});

const SceneWrapper = forwardRef(({ children }, ref) => {
    return (
        <div
            ref={ref}
            className="fixed inset-0 w-screen h-screen overflow-hidden bg-main-dark flex items-center justify-center flex-col z-30"
        >
            {children}
        </div>
    );
});
