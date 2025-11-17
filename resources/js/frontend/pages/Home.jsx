import { router } from "@inertiajs/react";
import { useAudio } from "../hooks/useAudio";
import { PreConsent } from "../components/PreConsent";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Intro } from "../components/Intro";
import { Menu } from "../components/Menu";
import { Scene } from "../components/Scene";
import { GTAHeader } from "../components/GTAHeader";

export default function Home() {
    const [isPreConsentShown, setIsPreConsentShown] = useState(true);

    const gtaTheme = useAudio("/storage/sounds/GTA4Theme.mp3", 0.3);
    const hoverSound = useAudio("/storage/sounds/hover.mp3", 0.5);
    const selectSound = useAudio("/storage/sounds/select.mp3", 0.5);

    const [cookies, setCookie] = useCookies([
        "preConsentGiven",
        "audioPermission",
        "playIntro",
        "introPlayed",
    ]);

    if(!cookies.preConsentGiven){
        return <PreConsent
            isPreConsentShown={isPreConsentShown}
            setIsPreConsentShown={setIsPreConsentShown}
            gtaTheme={gtaTheme}
        />;
    }

    const handleCheckout = () => {
        router.post(
            "/checkout",
            {
                products: [
                    { price_id: "price_1RiY1nQLRSLLxNpAogMBaUK0", quantity: 2 },
                    { price_id: "price_1RiYWlQLRSLLxNpAqZb5Zfom", quantity: 1 },
                ],
            },
            {
                preserveScroll: true,
                onSuccess: (page) => {
                    // Laravel JSON response elérhető itt:
                    const response = page.props?.flash?.data;
                    console.log(response);
                    if (response?.url) {
                        window.location.href = response.url;
                    } else {
                        alert("Nem sikerült elindítani a fizetést.");
                    }
                },
                onError: (errors) => {
                    console.error(errors);
                    alert("Valami hiba történt.");
                },
            }
        );
    };

    return (
        <>
            {isPreConsentShown && (
                <PreConsent
                    isPreConsentShown={isPreConsentShown}
                    setIsPreConsentShown={setIsPreConsentShown}
                    gtaTheme={gtaTheme}
                    selectSound={selectSound}
                />
            )}


            {cookies.playIntro && !cookies.introPlayed ? (
                <Intro />
            ) : (
                <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
                    <Scene />
                    <GTAHeader />
                    <Menu />
                    <div className="h-screen bg-main-dark"></div>
                </div>
            )}
        </>
    );
}
