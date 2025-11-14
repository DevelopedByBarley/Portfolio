import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useCookies } from "react-cookie";

gsap.registerPlugin(useGSAP);

const introImages = [
    {
        src: "/storage/images/background1.jpg",
        alt: "Intro Image 1",
    },
    {
        src: "/storage/images/background2.jpg",
        alt: "Intro Image 2",
    },
    {
        src: "/storage/images/background3.jpg",
        alt: "Intro Image 3",
    },
];

export const Intro = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [cookies, setCookie] = useCookies(["playIntro"]);

    useGSAP(
        () => {
            const images = gsap.utils.toArray(containerRef.current?.querySelectorAll(".intro-image"));
            if (!images.length) {
                return;
            }

            const timeline = gsap.timeline({
                repeat: 0,
                defaults: { ease: "power2.inOut" },
            });
            gsap.set(images, { autoAlpha: 0, zIndex: (index) => images.length - index });

            // Első kép: 10s megjelenés
            timeline.to(images[0], { autoAlpha: 1, scale: 1, duration: 10 });

            let previousImage = images[0];

            images.slice(1).forEach((image) => {
                // Új kép fade in: 2s
                timeline.to(
                    image,
                    { autoAlpha: 1, scale: 1, duration: 3 },
                    "+=2"
                );

                // Előző kép fade out: 2s (overlap 1s-nál kezdődik)
                timeline.to(
                    previousImage,
                    { autoAlpha: 0, duration: 3 },
                    "<1"
                );

                previousImage = image;
            });

            // Fade out a végén: 2s delay + 2s fade
            timeline.to(
                containerRef.current,
                {
                    autoAlpha: 0,
                    duration: 1,
                    onComplete: () => {
                        setIsVisible(false);
                        setCookie("introPlayed", "true", { path: "/" });
                    },
                },
                "+=4"
            );
        },
        { scope: containerRef, dependencies: [] }
    );

    if (!isVisible) {
        return null;
    }

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            {introImages.map((image, index) => (
                <div key={image.src} className="absolute inset-0 intro-image opacity-0">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
            ))}
        </div>
    );
};
