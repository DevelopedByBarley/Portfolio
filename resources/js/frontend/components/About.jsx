import { useCookies } from "react-cookie";


const highlights = [
    "3+ év Full-Stack fejlesztés",
    "Modern technológiák ismerete",
    "Teljes körű projektmenedzsment",
    "Folyamatos tanulás és alkalmazkodás",
];

export const About = ({ hoverSound }) => {
    const [cookies, setCookie] = useCookies(["audioPermission"]);
    return (
        <section id="about" className="bg-main-dark text-white">
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-12">
                <div className="text-center">

                    <h2 className="font-custom text-7xl text-white m-3">
                        ABOUT
                    </h2>
                    <p className="text-lg text-white/80 mt-2">
                        Medior Full-Stack Webfejlesztő
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    <div className="space-y-6 text-base leading-relaxed text-white/85">
                        <p>
                            Ügynökségi és freelance tapasztalatot hozok. A projektjeid
                            történet-alapú UI-t, masszív backend motort és precíz
                            kommunikációt kapnak – pont úgy, mint egy jól felépített
                            GTA küldetés.
                        </p>
                        <p>
                            A discovery fázistól a deploymentig végig vezetem a folyamatot:
                            stratégia, UI, front-end, backend, integrációk és DevOps
                            folyamatok egy kézben maradnak.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {highlights.map((item) => (
                            <div
                                key={item}
                                onMouseEnter={() => {
                                    if(cookies.audioPermission){
                                        hoverSound.play();
                                    }
                                }}
                                className="cursor-nw-resize group flex items-center gap-3 border border-main-orange/40 rounded-xl px-4 py-3 text-sm transition duration-75 duration-300 hover:border-main-orange hover:bg-main-orange/10 hover:translate-x-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                            >
                                <span className="text-main-orange text-xl transition duration-300 group-hover:text-white">
                                    ◎
                                </span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
