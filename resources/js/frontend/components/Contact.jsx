import { useCookies } from "react-cookie";

const contactMethods = [
    {
        icon: "📧",
        label: "Email",
        value: "szaniszlo.arpad@example.com",
        link: "mailto:szaniszlo.arpad@example.com",
    },
    {
        icon: "📱",
        label: "Telefon",
        value: "+36 XX XXX XXXX",
        link: "tel:+365541007",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/szaniszlo-arpad",
        link: "www.linkedin.com/in/szaniszló-árpád-b65b48233",
    },
    {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/DevelopedByBarley",
        link: "https://github.com/DevelopedByBarley",
    },
];

export const Contact = ({ hoverSound, selectSound }) => {
    const [cookies] = useCookies(["audioPermission"]);

    return (
        <section id="contact" className="bg-main-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-10 md:space-y-12">
                <div className="text-center">
                    <h2 className="font-custom text-5xl sm:text-6xl md:text-7xl text-white m-3">
                        CONTACT
                    </h2>
                    <p className="text-base sm:text-lg text-white/80 mt-2">
                        Vegyük fel a kapcsolatot • Indítsunk új küldetést
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                        {contactMethods.map((method) => (
                            <a
                                key={method.label}
                                href={method.link}
                                target={
                                    method.link.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    method.link.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                onMouseEnter={() => {
                                    if (cookies.audioPermission) {
                                        hoverSound.play();
                                    }
                                }}
                                onClick={() => {
                                    if (cookies.audioPermission) {
                                        selectSound.play();
                                    }
                                }}
                                className="cursor-none group flex items-start gap-3 sm:gap-4 border-2 border-main-orange/40 bg-main-light-dark rounded-xl p-4 sm:p-5 md:p-6 transition duration-300 hover:border-main-orange hover:bg-main-orange/10 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                            >
                                <span className="text-3xl sm:text-4xl group-hover:scale-110 transition duration-300 flex-shrink-0">
                                    {method.icon}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-custom text-lg sm:text-xl text-light-yellow mb-1 tracking-wider">
                                        {method.label}
                                    </h3>
                                    <p className="text-white/70 text-xs sm:text-sm break-all">
                                        {method.value}
                                    </p>
                                </div>
                                <svg
                                    className="w-5 h-5 text-main-orange opacity-0 group-hover:opacity-100 transition duration-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-white/60 text-sm">
                            Nyitott vagyok új projektekre és együttműködésekre.
                            <br />
                            <span className="text-main-orange">
                                Küldjön üzenetet és indítsuk el közös
                                küldetésünket!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
