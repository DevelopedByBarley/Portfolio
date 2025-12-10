import { useState } from "react";
import { useCookies } from "react-cookie";

export const Skills = ({ hoverSound, selectSound, isTouchDevice }) => {
    const [cookies] = useCookies(["audioPermission"]);
    const [currentSkill, setCurrentSkill] = useState({
        name: "HTML5",
        iconClass: "bi bi-filetype-html",
        description:
            "Szemantikus, reszponziv markup SEO- es hozzaferhetoseg-fokusszal. Tiszta DOM-struktura, ARIA-label, mikrocopy es UX-szempontbol rendezett űrlapok, hibajelzesekkel.",
    });

    const skills = [
        {
            name: "HTML5",
            iconClass: "bi bi-filetype-html",
            description:
                "Szemantikus, reszponziv markup SEO- es hozzaferhetoseg-fokusszal. Tiszta DOM-struktura, ARIA-label, mikrocopy es UX-szempontbol rendezett űrlapok, hibajelzesekkel.",
        },
        {
            name: "CSS3",
            iconClass: "bi bi-filetype-css",
            description:
                "Grid, flex, clamp() es fluid typo modern layoutokhoz. Animaciok, keyframe-ek, print/dark mode styling, CSS custom property-k es cross-browser finomhangolas.",
        },
        {
            name: "JavaScript",
            iconClass: "bi bi-filetype-js",
            description:
                "SPA-k, aszinkron API-hivasok fetch/axios-szal, debounce/throttle, memoizacio. Teljesitmeny-profilozas, caching strategia es hibakezeles UX-barat modon.",
        },
        {
            name: "React",
            iconClass: "bi bi-lightning-charge-fill",
            description:
                "Komponens-alapu UI, hook-ok, context, custom hook-ok. GSAP/Framer animaciok, accessibility-first komponensek es optimalizalt re-render flow, code-splittinggel.",
        },
        {
            name: "Laravel",
            iconClass: "bi bi-diagram-3-fill",
            description:
                "REST API, auth, queue es event-alapu folyamatok tiszta MVC-vel. Form request validation, policy-k, caching, Horizon/queue monitorozas, logolas es felugyelet.",
        },
        {
            name: "Inertia",
            iconClass: "bi bi-infinity",
            description:
                "SPA elmeny Laravel backenddel es React fronttal: shared props, partial reload, form helper. Guardok, flash uzenetek, state-hidak a sima navigaciohoz.",
        },
        {
            name: "Tailwind CSS",
            iconClass: "bi bi-wind",
            description:
                "Utility-first styling, gyors prototipizalas es skalahato design system. Breakpointek, state-variansok, sotet mod es komponens tokenek tisztan tarolva.",
        },
        {
            name: "Bootstrap",
            iconClass: "bi bi-bootstrap-fill",
            description:
                "Gyors UI-elemek, grid es utility-k temazhato SCSS override-dal. Egyseges ikonhasznalat, komponens-extend es mobil-first layout.",
        },
        {
            name: "Node.js",
            iconClass: "bi bi-database-fill-gear",
            description:
                "Express/WS API-k, auth, uzleti logika, cron/worker feladatok. WebSocket real-time esemenyek, rate limit es naplozas observability-vel parositva.",
        },
        {
            name: "Git",
            iconClass: "bi bi-git",
            description:
                "Branch-strategia (git-flow/trunk), code review, rebase/squash es CI/CD-barat workflow-k. Konfliktuskezeles, release taggeles es tiszta changelog.",
        },
        {
            name: "Figma",
            iconClass: "bi bi-palette-fill",
            description:
                "UI tervek, interaktiv prototipusok, komponens library es auto layout. Design tokenek es pontos handoff meresekkel, allapotvariaciokkal fejlesztoknek.",
        },
    ];

    return (
        <div className="bg-main-dark" id="skills">
            <div className="text-center py-12 md:py-16 px-4">
                <h2 className="font-custom text-5xl sm:text-6xl md:text-7xl text-white">SKILLS</h2>
                <p className="text-base sm:text-lg text-white/80 mt-2">Technológiai stackem</p>
            </div>

            <div className="min-h-[400px] md:min-h-[500px] flex flex-col items-center pb-12 md:pb-16">
                <div className="md:grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl px-4 gap-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 md:mb-0">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                onMouseEnter={() => {
                                    if (cookies.audioPermission && !isTouchDevice) {
                                        hoverSound.play();
                                    }
                                }}
                                onClick={() => {
                                    if (cookies.audioPermission) {
                                        selectSound.play();
                                    }
                                    setCurrentSkill(skill);
                                }}
                                className={`flex flex-col items-center justify-center aspect-square border-4 ${currentSkill.name === skill.name ? "border-main-orange bg-main-orange/10" : "border-main-orange/40"} hover:border-main-orange hover:bg-main-orange/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition duration-300 p-3 sm:p-4`}
                            >
                                {skill.imgSrc ? (
                                    <img
                                        src={skill.imgSrc}
                                        alt={skill.name}
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)]"
                                    />
                                ) : (
                                    <span className="text-main-orange text-2xl sm:text-3xl md:text-4xl mb-2 drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)]">
                                        <i className={skill.iconClass} aria-hidden="true" />
                                    </span>
                                )}
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white text-center leading-tight">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:pl-6 md:pr-2 flex items-center">
                        <div className="w-full h-full">
                            {currentSkill ? (
                                <div className="flex h-full flex-col items-center justify-center text-center gap-4 p-4 sm:p-5 bg-main-dark/70 border border-main-orange/20 rounded-xl md:rounded-none md:border-none shadow-[0_12px_32px_rgba(0,0,0,0.20)]">
                                    <div className="flex-shrink-0">
                                        {currentSkill.imgSrc ? (
                                            <img
                                                src={currentSkill.imgSrc}
                                                alt={currentSkill.name}
                                                className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_10px_26px_rgba(0,0,0,0.45)]"
                                            />
                                        ) : (
                                            <span className="text-main-orange text-4xl sm:text-5xl drop-shadow-[0_10px_26px_rgba(0,0,0,0.45)]">
                                                <i className={currentSkill.iconClass} aria-hidden="true" />
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-4 sm:space-y-6">
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-main-orange font-custom">
                                            {currentSkill.name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                                            {currentSkill.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-white/80">Vidd fele az egeret, es mutatom a reszleteket.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
