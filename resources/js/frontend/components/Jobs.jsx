import { useState } from 'react';
import { JobModal } from './JobModal';

const gtaJobs = [
    {
        title: "Night Shift Dashboard",
        role: "Full-stack · Laravel + React",
        year: "2024",
        color: "#4c7a2d", // GTA green
        clipPath: {
            sm: "polygon(0 0, 100% 0%, 100% 99%, 0 95%)",
            md: "polygon(0 0, 100% 0%, 100% 99%, 0 95%)"
        },
        tilt: 0,
        colSpan: {
            sm: 0,
            md: 0,
            xl: 2,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        tagline: "Valós idejű riportok és szolgálati ütemezés egyetlen panelen.",
        description: "Egy átfogó dashboard alkalmazás, amely valós időben jeleníti meg a napi riportokat, szolgálati beosztásokat és statisztikákat. A rendszer Laravel backend és React frontend kombinációjával készült, lehetővé téve a gyors adatfrissítést és felhasználóbarát kezelést.",
        image: "/storage/projects/nightshift1.jpg",
        technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "WebSockets"],
        features: [
            "Valós idejű riport megjelenítés",
            "Szolgálati beosztás kezelése",
            "Statisztikai dashboard",
            "Felhasználói jogosultságkezelés",
            "Mobilbarát design"
        ],
        url: "https://nightshift-demo.example.com"
    },
    {
        title: "Heist Planner",
        role: "Lead Frontend · React + GSAP",
        year: "2023",
        color: "#f7d57c", // soft yellow
        clipPath: {
            sm: "polygon(0 1%, 100% 5%, 100% 99%, 0 95%)",
            md: " polygon(0 0, 100% 0, 100% 96%, 0 99%)",
        },
        colSpan: {
            sm: 0,
            md: 0,
            xl: 2,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        tilt: 0,
        tagline: "Animált timeline-okkal követhető többfázisú projektterv.",
        description: "Interaktív projektmenedzsment eszköz animált timeline-okkal, amely lehetővé teszi a komplex projektek fázisokra bontását és vizuális követését. A GSAP animációs könyvtár segítségével megvalósított sima átmenetek élvezhetővé teszik a projekt előrehaladásának nyomon követését.",
        image: "/storage/projects/heist1.jpg",
        technologies: ["React", "GSAP", "Node.js", "MongoDB"],
        features: [
            "Animált projekt timeline",
            "Többfázisú tervezés",
            "Drag & drop interfész",
            "Csapattagok kezelése",
            "Gantt chart nézet"
        ],
        url: "https://heistplanner.example.com"
    },
    {
        title: "Vice City Rentals",
        role: "Full-stack · Laravel + Inertia",
        year: "2023",
        color: "#d595c3", // neon pink/purple
        clipPath: {
            sm: "polygon(0 1%, 100% 5%, 100% 100%, 0 95%)",
            md: "polygon(0 1%, 100% 4%, 100% 100%, 0 100%)",

        },
        colSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        tilt: 0,
        tagline: "Bérlési folyamat digitalizálása GTA vibe-os UI-val.",
        description: "Modern ingatlan bérbeadási platform, amely digitalizálja a teljes bérlési folyamatot a szerződéskötéstől a fizetéskezelésen át a kommunikációig. Az Inertia.js segítségével SPA élményt nyújt Laravel háttérrel.",
        image: "/storage/projects/rentals1.jpg",
        technologies: ["Laravel", "Inertia.js", "Vue.js", "Stripe", "PostgreSQL"],
        features: [
            "Online szerződéskötés",
            "Fizetéskezelés Stripe-pal",
            "Bérlői portál",
            "Karbantartási jegyek",
            "Dokumentum管理"
        ],
        url: "https://vicerentals.example.com"
    },
    {
        title: "Chopper Tracker",
        role: "Backend · REST + WebSockets",
        year: "2022",
        color: "#3c9ad7", // ocean blue
        clipPath: {
            sm: "polygon(0 0, 100% 0, 100% 95%, 0 99%)",
            md: " polygon(0 4%, 100% 1%, 100% 100%, 0 100%)",
        },
        tilt: 0,
        colSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        tagline: "Élő térképes követés és riasztások légi egységekhez.",
        description: "Valós idejű térképes követőrendszer légi járművekhez, WebSocket alapú kommunikációval. A rendszer lehetővé teszi a flotta teljes körű nyomon követését, riasztások beállítását és útvonaltörténet megtekintését.",
        image: "/storage/projects/chopper1.jpg",
        technologies: ["Node.js", "WebSockets", "Redis", "Leaflet.js", "MongoDB"],
        features: [
            "Valós idejű GPS követés",
            "Geofencing riasztások",
            "Útvonaltörténet",
            "Multi-device sync",
            "Offline támogatás"
        ],
        url: "https://choppertracker.example.com"
    },
    {
        title: "Los Santos Market",
        role: "Frontend · Tailwind + Alpine",
        year: "2022",
        color: "#f28c28", // sunset orange
        clipPath: {
            sm: "polygon(0 4%, 100% 1%, 100% 99%, 0 96%)",
            md: "polygon(50% 0%, 100% 0, 100% 35%, 100% 99%, 81% 98%, 50% 96%, 20% 98%, 0 99%, 0% 35%, 0 1%)",
        },
        tilt: 0,
        colSpan: {
            sm: 0,
            md: 2,
            xl: 0,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        tagline: "E-kereskedelmi kirakat karakteres GTA színsémával.",
        description: "Modern e-commerce webshop egyedi GTA ihlette dizájnnal. Az Alpine.js könnyedségével készült interaktív elemek és a Tailwind CSS segítségével megvalósított egyedi design tökéletes harmóniában.",
        image: "/storage/projects/market1.jpg",
        technologies: ["Alpine.js", "Tailwind CSS", "Laravel", "Stripe", "MySQL"],
        features: [
            "Kosár kezelés",
            "Fizetési integráció",
            "Termék szűrés",
            "Wishlist funkció",
            "Admin panel"
        ],
        url: "https://lsmarket.example.com"
    },
    {
        title: "Drift School",
        role: "Product · UX + prototyping",
        year: "2021",
        color: "#2fb39c", // teal
        clipPath: {
            sm: "polygon(0 1%, 100% 5%, 100% 99%, 0 95%)",
            md: "polygon(0 5%, 100% 1%, 100% 100%, 0 100%)",
        },
        tilt: 0,
        tagline: "Gamifikált tanulási modulok és eredménytáblák.",
        colSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        description: "Gamifikált online tanulási platform vezetéstechnikai képzésekhez. A rendszer játékos elemekkel teszi élvezetesebbé a tanulást, eredménytáblákkal és jelvényekkel motiválva a résztvevőket.",
        image: "/storage/projects/drift1.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Canvas API"],
        features: [
            "Interaktív lekciók",
            "Eredménytáblák",
            "Jelvény rendszer",
            "Videó modulok",
            "Haladás nyomon követés"
        ],
        url: "https://driftschool.example.com"
    },
    {
        title: "Liberty Radio",
        role: "Full-stack · API + UI",
        year: "2020",
        color: "#8362d0", // violet
        tilt: 0,
        tagline: "Tematikus rádiólejátszó, playlist rotációval és analytics-szel.",
        colSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        rowSpan: {
            sm: 0,
            md: 0,
            xl: 0,
            xxl: 0
        },
        clipPath: {
            sm: "polygon(0 1%, 100% 5%, 100% 99%, 0 95%)",
            md: "polygon(0 1%, 100% 5%, 100% 99%, 0 100%)",
        },
        description: "Online rádió streaming platform tematikus csatornákkal, playlist rotációval és részletes hallgatottsági statisztikákkal. A rendszer támogatja a zenei preferenciák alapján történő ajánlást is.",
        image: "/storage/projects/radio1.jpg",
        technologies: ["Node.js", "React", "Redis", "FFmpeg", "MongoDB"],
        features: [
            "Élő streaming",
            "Playlist kezelés",
            "Hallgatottsági analytics",
            "Zene ajánló",
            "Chat integráció"
        ],
        url: "https://libertyradio.example.com"
    },
];

export const Jobs = ({ hoverSound, selectSound }) => {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobClick = (job) => {
        if (selectSound?.play) selectSound.play();
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    return (
        <section id="projects" className="bg-main-dark text-white py-20">

            <div className="max-w-7xl mx-auto px-6 space-y-12">

                <div className="text-center space-y-2">
                    <p className="tracking-[0.35em] text-xs text-white/60 uppercase">
                        Munkáim · GTA paletta
                    </p>
                    <h2 className="font-custom text-6xl text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
                        PROJECTS
                    </h2>
                    <p className="text-white/75 text-sm max-w-2xl mx-auto">
                        6+ színes panel a GTA loading screen vibe-jával: vastag fekete keret,
                        enyhén döntött kártyák, markáns kontrasztok.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-[18%] hidden md:block w-1 bg-black/70" />
                    <div className="md:hidden">
                        {renderSmallDeviceJobs(handleJobClick, hoverSound)}
                    </div>
                    <div className="hidden md:block ">
                        {renderMidDeviceJobs(handleJobClick, hoverSound)}
                    </div>
                </div>
            </div>

            {selectedJob && (
                <JobModal
                    job={selectedJob}
                    onClose={handleCloseModal}
                    hoverSound={hoverSound}
                    selectSound={selectSound}
                />
            )}
        </section>
    );
};

const renderMidDeviceJobs = (handleJobClick, hoverSound) => {
    return (
        <div className="grid grid-cols-2 gap-2 max-w-7xl mx-auto px-6">
            {
                gtaJobs.map((job, index) => (
                    <article
                        key={job.title}
                        className={`relative group min-h-[400px] col-span-${job.colSpan.md} cursor-pointer`}
                        style={{ transform: `rotate(${job.tilt}deg)` }}
                        onClick={() => handleJobClick(job)}
                        onMouseEnter={() => hoverSound?.play && hoverSound.play()}
                    >
                        <div className="absolute inset-[-5px] translate-x-0 translate-y-2 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]" style={{
                            clipPath: job.clipPath?.md || "none",
                        }} />
                        <div
                            className="relative h-100 flex items-center justify-center overflow-hidden border-4 border-black text-black shadow-[0_14px_32px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.01] group-hover:-translate-y-1"
                            style={{
                                backgroundColor: job.color,
                                clipPath: job.clipPath?.md || "none",
                            }}
                        >
                            <div className="absolute -left-8 -skew-y-3 top-6 h-10 w-24 bg-black opacity-60 blur-[2px]" />
                            <div className="flex flex-col gap-2 p-7 sm:p-8">
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] font-semibold">
                                    <span className="bg-black text-white px-3 py-1 rounded-full shadow" >
                                        {job.year}
                                    </span>
                                    <span className="text-black/70">{`#0${index + 1}`}</span>
                                </div>
                                <h3 className="font-custom text-2xl sm:text-3xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
                                    {job.title}
                                </h3>
                                <p className="text-sm font-semibold tracking-wide uppercase text-black/75">
                                    {job.role}
                                </p>
                                <p className="text-base text-black/85 leading-relaxed">
                                    {job.tagline}
                                </p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}


const renderSmallDeviceJobs = (handleJobClick, hoverSound) => {
    return (
        <>
            <div className="grid grid-cols-1 max-w-7xl mx-auto px-6">
                {gtaJobs.map((job, index) => (
                    <article
                        key={job.title}
                        className={`relative group min-h-[400px] col-span-${job.colSpan} cursor-pointer`}
                        style={{ transform: `rotate(${job.tilt}deg)` }}
                        onClick={() => handleJobClick(job)}
                        onMouseEnter={() => hoverSound?.play && hoverSound.play()}
                    >
                        <div className="absolute inset-[-5px] translate-x-0 translate-y-2 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.45)]" style={{
                            clipPath: job.clipPath?.sm || "none",
                        }} />
                        <div
                            className="relative h-100 flex items-center justify-center overflow-hidden border-4 border-black text-black shadow-[0_14px_32px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.01] group-hover:-translate-y-1"
                            style={{
                                backgroundColor: job.color,
                                clipPath: job.clipPath?.sm || "none",
                            }}
                        >
                            <div className="absolute -left-8 -skew-y-3 top-6 h-10 w-24 bg-black opacity-60 blur-[2px]" />
                            <div className="flex flex-col gap-2 p-7 sm:p-8">
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] font-semibold">
                                    <span className="bg-black text-white px-3 py-1 rounded-full shadow" >
                                        {job.year}
                                    </span>
                                    <span className="text-black/70">{`#0${index + 1}`}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
                                    {job.title}
                                </h3>
                                <p className="text-sm font-semibold tracking-wide uppercase text-black/75">
                                    {job.role}
                                </p>
                                <p className="text-base text-black/85 leading-relaxed">
                                    {job.tagline}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    )
}




