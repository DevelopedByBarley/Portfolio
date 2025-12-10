import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export const ToTop = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollYPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (scrollYPosition < 300) {
        return null;
    }

    return (
        <Link
            href="#top"
            viewTransition
            className="fixed cursor-none bottom-6 right-6 border text-white border-main-orange hover:bg-light-yellow  p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
            aria-label="Scroll to top"
        >
            <i className="bi bi-arrow-up-short text-2xl"></i>
        </Link>
    );
}

