import { createContext, useState } from "react";
import { useCookies } from "react-cookie";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    // if cookie exist set initial state from cookies
    const [settings, setSettings] = useState({
        audioPermission: cookieStore.get('audioPermission') ? cookieStore.get('audioPermission').value === 'true' : false,
        playIntro: cookieStore.get('playIntro') ? cookieStore.get('playIntro').value === 'true' : false,
    });


    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}
