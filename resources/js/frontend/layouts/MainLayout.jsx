import { CookiesProvider } from "react-cookie";
import FlashMessages from "../components/FlashMessage";
import { SettingsProvider } from "../contexts/SettingsContext";
import { ToastContainer } from "react-toastify";

export default function MainLayout({ children }) {

    return (
        <>
            <ToastContainer />
            <CookiesProvider>
                <SettingsProvider>
                    <FlashMessages />
                    <div>{children}</div>
                </SettingsProvider>
            </CookiesProvider>
        </>
    );
}
