import { useState } from "react";
import { useCookies } from "react-cookie";

export const Experience = ({ hoverSound }) => {
    const [cookies] = useCookies(["audioPermission"]);
    const [currentExpIndex, setCurrentExpIndex] = useState(null);

    const experiences = [
        {
            role: "Medior Full-Stack Webfejlesztő",
            company: "Freelance / Max & Future Kft.",
            duration: "2020 - jelenleg",
            details: [
                "Teljes körű webfejlesztési szolgáltatások nyújtása ügyfelek számára.",
                "Egyedi webalkalmazások és weboldalak tervezése és fejlesztése modern technológiákkal.",
                "Projektmenedzsment és ügyfélkommunikáció a sikeres szállítás érdekében.",
            ],
            tags: ["Laravel", "React", "SaaS"],
            reward: "Retainer + referral pipeline",
            wanted: 5,
            accent: "from-main-orange to-amber-500",
        },
        {
            role: "Junior Webfejlesztő",
            company: "Max & Future Kft.",
            duration: "2023 - 2025",
            details: [
                "Frontend és backend fejlesztés ügyfélprojektekhez.",
                "Reszponzív weboldalak készítése HTML, CSS és JavaScript használatával.",
                "Csapatmunkában való részvétel agilis környezetben.",
            ],
            tags: ["Laravel", "Inertia", "CI/CD"],
            reward: "Release velocity boost",
            wanted: 4,
            accent: "from-amber-400 to-yellow-500",
        },
        {
            role: "Gyakornok Webfejlesztő",
            company: "Max & Future Kft.",
            duration: "2022 - 2023",
            details: [
                "Alapvető webfejlesztési feladatok ellátása mentorálás mellett.",
                "Kisebb weboldalak és funkciók fejlesztése HTML, CSS és JavaScript segítségével.",
                "Tanulás és fejlődés a webfejlesztési technológiák terén.",
            ],
            tags: ["HTML/CSS", "JS", "QA"],
            reward: "Level up: production-ready",
            wanted: 3,
            accent: "from-yellow-400 to-orange-400",
        },
    ];

    return (
        <section id="experience" className="relative bg-main-dark text-white py-20 overflow-hidden">


            <div className="max-w-7xl mx-auto px-6 space-y-12 relative">
                <div className="text-center space-y-3">
                    <p className="tracking-[0.35em] text-xs text-white/60 uppercase">
                        Mission Log · GTA vibe
                    </p>
                    <h2 className="font-custom text-6xl text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
                        EXPERIENCE
                    </h2>
                    <p className="text-white/75 text-sm max-w-2xl mx-auto">
                        Kronológia, mint a GTA küldetéslista: minden állomás saját wanted szinttel, badge-ekkel és jutalommal.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="hidden md:block absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-main-orange via-main-orange/50 to-transparent rounded-full blur-[1px]" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <article
                                key={`${exp.company}-${exp.role}`}
                                className="relative pl-12 md:pl-28"
                                onMouseEnter={() => {
                                    if (cookies.audioPermission) {
                                        hoverSound.play();
                                    }
                                    setCurrentExpIndex(index);
                                }}
                            >
                                <div className={`${currentExpIndex === index ? "bg-main-orange" : ""} transition-all duration-600 absolute left-4 md:left-7 top-10 w-8 h-8 rounded-full border-2 border-main-orange bg-main-dark flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.65)]`}>
                                    <span className="text-[11px] font-semibold">
                                        {index + 1}
                                    </span>
                                </div>

                                <div className="relative overflow-hidden bg-main-light-dark/80 border border-main-orange/30 rounded-2xl p-6 shadow-[0_18px_42px_rgba(0,0,0,0.35)] transition duration-300 group hover:-translate-y-1 hover:border-main-orange hover:shadow-[0_22px_50px_rgba(0,0,0,0.45)]">
                                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_25%_20%,rgba(249,115,22,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,199,44,0.12),transparent_30%)] pointer-events-none" />

                                    <div className="flex flex-wrap items-start justify-between gap-4 relative">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[11px] uppercase tracking-[0.25em] text-black bg-main-orange px-3 py-1 rounded-full shadow-[0_6px_18px_rgba(249,115,22,0.65)]">
                                                    Mission #{String(index + 1).padStart(2, "0")}
                                                </span>

                                            </div>
                                            <h3 className="text-2xl font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                                                {exp.role}
                                            </h3>
                                            <p className="text-white/70 font-semibold">{exp.company}</p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                                                Wanted
                                            </span>
                                            <div className="flex gap-1 text-yellow-300 text-lg drop-shadow-[0_0_12px_rgba(255,200,50,0.65)]">
                                                {Array.from({ length: exp.wanted }).map((_, starIndex) => (
                                                    <span key={starIndex}>★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mt-4 flex flex-wrap items-center gap-3">
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/70 bg-main-dark/70 border border-white/10 rounded-full px-3 py-1">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <ul className="relative mt-5 space-y-2 text-white/85">
                                        {exp.details.map((detail) => (
                                            <li key={detail} className="flex gap-2 items-start">
                                                <span className="text-main-orange text-lg leading-none">▹</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="relative mt-5 flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs tracking-[0.12em] uppercase bg-main-orange/15 border border-main-orange/40 text-main-orange rounded-full px-3 py-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
