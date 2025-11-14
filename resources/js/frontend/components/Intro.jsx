import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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

            timeline.to(images[0], { autoAlpha: 1, scale: 1, duration: 1.2 });

            let previousImage = images[0];

            images.slice(1).forEach((image) => {
                timeline.to(
                    image,
                    { autoAlpha: 1, scale: 1, duration: 1.2 },
                    "+=1.2"
                );

                timeline.to(
                    previousImage,
                    { autoAlpha: 0, duration: 1.2 },
                    "<0.6"
                );

                previousImage = image;
            });

            timeline.to(
                containerRef.current,
                {
                    autoAlpha: 0,
                    duration: 0.8,
                    onComplete: () => setIsVisible(false),
                },
                "+=1.2"
            );
        },
        { scope: containerRef, dependencies: [] }
    );

    if (!isVisible) {
        return null;
    }

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
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
