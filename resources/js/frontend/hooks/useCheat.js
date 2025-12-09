import { useEffect } from "react";
import { toast } from "react-toastify";

export const useCheat = ({ cheat, setCheat, showPassedModal, setShowPassedModal }) => {
    const targetCode = "hesoyam";

    useEffect(() => {
        if (showPassedModal) return;

        const handleKeyDown = (event) => {
            setCheat((prev) => prev + event.key);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setCheat, showPassedModal]);

    useEffect(() => {
        if (!cheat || showPassedModal) return;

        if (cheat.endsWith(targetCode)) {
            toast.dark("✅ Cheat aktiválva: Élet, páncél és $250,000!");
            setShowPassedModal(true);
            const timeout = setTimeout(() => {
                setCheat("");
            }, 1000);

            return () => clearTimeout(timeout);
        }

        if (cheat.length > targetCode.length) {
            setCheat((prev) => prev.slice(-targetCode.length));
        }
    }, [cheat, showPassedModal, setCheat, setShowPassedModal]);

    return cheat.endsWith(targetCode);
};
