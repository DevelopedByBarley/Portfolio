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
        <header className="relative min-h-screen bg-main-dark text-white overflow-hidden flex items-center">
            <div className="absolute inset-0  to-main-orange/30 opacity-90" />
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-main-orange/30 blur-3xl" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 w-full">
                <div className="relative flex-shrink-0 bg-main-orange flex items-center justify-center flex-col rounded-lg min-h-[600px] min-w-[300px] md:min-w-[500px] p-4 shadow-2xl">
                    <div className="absolute -inset-4 shadow-2xl" />
                    <img
                        src="/storage/images/profile.jpg"
                        alt="Character"
                        className="w-64 h-64 object-cover rounded-full border-4 border-black relative z-10"
                    />
                    <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-main-orange/60 shadow-inner shadow-main-orange/40">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <GTAStar key={index} filled={index > -1} />
                        ))}
                    </div>{" "}
                </div>
                <div className="flex-1 text-center md:text-left">
                    <p className="text-main-orange uppercase tracking-[0.4em] text-sm mb-4">
                        Szaniszló Árpád
                    </p>
                    <h2 className="font-custom text-5xl md:text-6xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]">
                        Full-Stack Webfejlesztő
                    </h2>
                    <p className="mt-4 text-lg text-white/80 max-w-prose mx-auto md:mx-0">
                        Webes termékeket tervezek és valósítok meg a teljes
                        technológiai stacken át, hogy a márkák saját GTA-s
                        hangulatukban szólaljanak meg. Backend logika,
                        interaktív front-end, integrációk és élménytervezés
                        egy kézben.
                    </p>
                </div>
            </div>
        </header>
    );
};
