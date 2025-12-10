import { Link } from "@inertiajs/react";

const GTAStar = ({ filled }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className="w-11 h-11 drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]"
        >
            <polygon
                points="50,5 61,35 95,35 67,54 78,86 50,66 22,86 33,54 5,35 39,35"
                fill={filled ? "#000000" : "#ffffff"}
                stroke="#000000"
                strokeWidth="6"
            />
        </svg>
    );
};

export const GTAHeader = () => {

    return (
        <header className="relative min-h-[75vh] md:min-h-[90vh] bg-main-dark text-white overflow-hidden flex items-center">
            <div className="absolute inset-0  to-main-orange/30 opacity-90" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-main-orange/30 blur-3xl" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
                <div className="relative flex-shrink-0 bg-main-orange flex items-center justify-center flex-col rounded-lg min-h-[450px] sm:min-h-[500px] md:min-h-[600px] min-w-[280px] sm:min-w-[320px] md:min-w-[500px] p-4 shadow-2xl">
                    <div className="absolute -inset-4 shadow-2xl" />
                    <img
                        src="/storage/images/profile.jpg"
                        alt="Character"
                        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-black relative z-10"
                    />
                    <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-main-orange/60 shadow-inner shadow-main-orange/40">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <GTAStar key={index} filled={index > -1} />
                        ))}
                    </div>{" "}
                </div>
                <div className="flex-1 text-center md:text-left px-4 md:px-0">
                    <p className="text-main-orange uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm mb-3 md:mb-4">
                        Szaniszló Árpád
                    </p>
                    <h2 className="font-custom text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)] leading-tight">
                        Full-Stack Webfejlesztő
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-white/80 max-w-prose mx-auto md:mx-0 leading-relaxed">
                        Webes termékeket tervezek és valósítok meg a teljes
                        technológiai stacken át, hogy a márkák saját GTA-s
                        hangulatukban szólaljanak meg. Backend logika,
                        interaktív front-end, integrációk és élménytervezés
                        egy kézben.
                    </p>
                </div>
            </div>

            {/* Quick Menu Tutorial - Fixed bottom right */}
            <div className="hidden 2xl:block fixed top-30 right-6 z-50 animate-bounce-slow">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-black/80 border-2 border-main-orange/60 rounded-lg backdrop-blur-sm shadow-[0_8px_24px_rgba(249,115,22,0.4)]">
                    <span className="text-xs sm:text-sm text-white/90 font-semibold">Gyors menü:</span>
                    <kbd className="px-2.5 py-1 text-xs sm:text-sm font-bold text-black bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.25)] border-2 border-black">
                        M
                    </kbd>
                </div>
            </div>

            { /* Bouncing arrow */}

            <div className="absolute cursor-none bottom-0 border-3 border-main-orange rounded-full p-2 left-1/2 transform -translate-x-1/2 animate-pulse">
                <Link viewTransition href="#about" className="text-white/80 hover:text-white transition cursor-none scroll-behavior-smooth">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Link>
            </div>
        </header>
    );
};
