import { useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";

const SECRET_CODE = "GROVESTREET4LIFE";

const FAKE_ADMIN = {
    alias: "Carl 'CJ' Johnson",
    level: "Mission Control",
    expiresIn: "15 perc",
    permissions: ["Deploy Heist", "Spawn Vehicles", "Override Security"],
};

export default function CheatModal({
    isOpen,
    onClose,
    onSuccess,
    selectSound,
    passedSound,
}) {
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("idle"); // idle | success | error
    const [cookies, setCookie] = useCookies(["audioPermission"]);

    useEffect(() => {
        if (isOpen) {
            setCode("");
            setStatus("idle");
            if (cookies.audioPermission) {
                selectSound.play();
                setTimeout(() => {
                    passedSound?.play();
                }, 700);
            }
        }
    }, [isOpen]);

    const normalizedCode = useMemo(() => code.trim().toUpperCase(), [code]);

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (normalizedCode === SECRET_CODE) {
            setStatus("success");
            onSuccess?.();
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-yellow-500/40 bg-gradient-to-b from-black via-gray-900 to-black p-8 shadow-2xl shadow-yellow-500/30">
                <span className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-3xl"></span>
                <div className="space-y-8 text-center text-white">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.5em] text-yellow-400">
                            Cheat Console
                        </p>
                        <h2 className="text-4xl font-black tracking-wide text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
                            Mission Passed
                        </h2>
                        <p className="text-sm text-gray-300">
                            Enter your secret code to unlock the temporary admin
                            access.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            value={code}
                            onChange={(event) => setCode(event.target.value)}
                            className="w-full rounded-full border border-yellow-500/60 bg-black/70 px-5 py-3 text-center text-lg uppercase tracking-[0.4em] text-yellow-100 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50"
                            placeholder="GTA CHEAT"
                        />
                        <button
                            type="submit"
                            className="w-full rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 px-6 py-3 text-lg font-bold uppercase tracking-widest text-black shadow-lg shadow-yellow-600/40 transition hover:-translate-y-0.5 hover:shadow-yellow-400"
                        >
                            Activate
                        </button>
                        {status === "error" && (
                            <p className="text-sm font-medium text-red-400">
                                Helytelen kód, próbáld meg újra!
                            </p>
                        )}
                    </form>

                    {status === "success" && (
                        <div className="rounded-2xl border border-green-400/50 bg-black/60 p-5 text-left shadow-green-500/30">
                            <p className="text-sm uppercase tracking-[0.6em] text-green-400">
                                Temporary admin granted
                            </p>
                            <h3 className="mt-2 text-2xl font-black text-green-300 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
                                {FAKE_ADMIN.alias}
                            </h3>
                            <p className="text-sm text-gray-300">
                                Rank: {FAKE_ADMIN.level}
                            </p>
                            <p className="text-xs text-gray-400">
                                Lejárat: {FAKE_ADMIN.expiresIn}
                            </p>
                            <ul className="mt-4 space-y-1 text-sm text-gray-200">
                                {FAKE_ADMIN.permissions.map((permission) => (
                                    <li
                                        key={permission}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                        {permission}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.5em] text-gray-400">
                        <span>Respect +</span>
                        <span className="h-1 w-10 rounded-full bg-yellow-500/60"></span>
                        <span>Los Santos Admin</span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-xs uppercase tracking-[0.4em] text-gray-400 transition hover:text-yellow-200"
                    >
                        Close Console
                    </button>
                </div>
            </div>
        </div>
    );
}
