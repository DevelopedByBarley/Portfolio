import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { useCookies } from "react-cookie";

export const PreConsent = ({
    setIsPreConsentShown,
    gtaTheme,
    selectSound,
}) => {
    const { settings, setSettings } = useContext(SettingsContext);
    const [cookies, setCookie] = useCookies(["preConsentGiven"]);

    const handleAccept = () => {
        setIsPreConsentShown(false);
        console.log(settings);
        if (settings.audioPermission) {
            // set cookies for remembering user choice, set
            document.cookie = "audioPermission=true; path=/; max-age=31536000"; // 1 year
            console.log("Playing GTA Theme...");
            if (selectSound) {
                selectSound.play();
            }
            gtaTheme.play();
        }
        if (settings.playIntro) {
            // Play intro sequence
            document.cookie = "playIntro=true; path=/; max-age=31536000"; // 1 year
            console.log("Playing intro sequence...");
        }

        document.cookie = "preConsentGiven=true; path=/; max-age=31536000"; // 1 year
    };

    const handleDecline = () => {
        setCookie("preConsentGiven", true, { path: "/", maxAge: 31536000 });
        setIsPreConsentShown(false);
    };

    return (
        <>
            {!cookies.preConsentGiven && (
                <div className="fixed inset-0 bg-main-dark flex items-center justify-center z-50 p-4">
                    {/* GTA stílusú container */}
                    <div className="max-w-2xl w-full">
                        {/* Felső sáv - GTA IV stílusú címsor */}
                        <div className="bg-gradient-to-r from-main-orange to-light-orange p-1 mb-1">
                            <div className="bg-main-light-dark px-6 py-3">
                                <h2 className="text-white font-custom text-2xl tracking-wide">
                                    SZANISZLÓ ÁRPÁD - WEB DEVELOPER
                                </h2>
                            </div>
                        </div>

                        {/* Fő tartalom */}
                        <div className="bg-main-light-dark border-2 border-main-orange p-8">
                            {/* Cím */}
                            <div className="text-center mb-8">
                                <h1 className="text-main-orange font-custom text-4xl mb-2">
                                    WELCOME TO MY PORTFOLIO
                                </h1>
                                <div className="h-1 w-32 bg-main-orange mx-auto"></div>
                            </div>

                            {/* Opciók */}
                            <div className="space-y-6 mb-8">
                                {/* 1. Hang engedély */}
                                <div
                                    onClick={() =>
                                        setSettings((prev) => ({
                                            ...prev,
                                            audioPermission:
                                                !prev.audioPermission,
                                        }))
                                    }
                                    className="border-2 border-main-orange bg-main-dark p-6 hover:border-light-yellow transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <svg
                                                className={`w-6 h-6 transition ${
                                                    settings.audioPermission
                                                        ? "text-light-yellow"
                                                        : "text-main-orange group-hover:text-light-yellow"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-light-yellow font-custom text-xl mb-2 tracking-wider">
                                                AUDIO PERMISSION
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Enable website to play
                                                background music and sound
                                                effects for the full portfolio
                                                experience.
                                            </p>
                                        </div>
                                        {settings.audioPermission && (
                                            <div className="mt-1">
                                                <svg
                                                    className="w-6 h-6 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* 2. Intro lejátszás */}
                                <div
                                    onClick={() =>
                                        setSettings((prev) => ({
                                            ...prev,
                                            playIntro: !prev.playIntro,
                                        }))
                                    }
                                    className="border-2 border-main-orange bg-main-dark p-6 hover:border-light-yellow transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <svg
                                                className={`w-6 h-6 transition ${
                                                    settings.playIntro
                                                        ? "text-light-yellow"
                                                        : "text-main-orange group-hover:text-light-yellow"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-light-yellow font-custom text-xl mb-2 tracking-wider">
                                                PLAY INTRO SEQUENCE
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Watch the cinematic introduction
                                                and discover my web development
                                                journey.
                                            </p>
                                        </div>
                                        {settings.playIntro && (
                                            <div className="mt-1">
                                                <svg
                                                    className="w-6 h-6 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Akció gombok */}
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={handleAccept}
                                    className="px-8 py-3 bg-main-orange hover:bg-light-yellow text-main-dark font-custom text-lg tracking-wide border-2 border-main-orange hover:border-light-yellow transition-all duration-300 shadow-lg hover:shadow-main-orange/50"
                                >
                                    ACCEPT & ENTER
                                </button>
                            </div>

                            {/* Footer szöveg */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-300 text-xs">
                                    Please choose your settings and press{" "}
                                    <span className="text-main-orange font-bold">
                                        ACCEPT & ENTER
                                    </span>{" "}
                                    to continue with your own experience
                                </p>
                            </div>
                        </div>

                        {/* Alsó sáv */}
                        <div className="bg-gradient-to-r from-main-orange to-light-orange p-[2px] mt-1">
                            <div className="bg-main-light-dark px-6 py-2">
                                <p className="text-light-yellow text-xs text-center font-custom tracking-wide">
                                    © 2025 SZANISZLÓ ÁRPÁD - WEB DEVELOPER
                                    PORTFOLIO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
