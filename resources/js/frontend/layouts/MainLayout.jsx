import { CookiesProvider } from "react-cookie";
import FlashMessages from "../components/FlashMessage";
import Navbar from "../components/Navbar";
import { SettingsProvider } from "../contexts/SettingsContext";

export default function MainLayout({ children }) {
    return (
        <>
            <CookiesProvider>
                <SettingsProvider>
                    <Navbar />
                    <FlashMessages />
                    <div>{children}</div>
                </SettingsProvider>
            </CookiesProvider>
        </>
    );
}
