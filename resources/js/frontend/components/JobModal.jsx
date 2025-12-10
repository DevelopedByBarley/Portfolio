export const JobModal = ({ job, onClose, hoverSound, selectSound, isTouchDevice }) => {
    if (!job) return null;

    const handleClose = () => {
        if (selectSound?.play) selectSound.play();
        onClose();
    };

    const handleVisitSite = () => {
        if (selectSound?.play) selectSound.play();
        window.open(job.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleClose}
        >
            <div
                className="relative max-w-4xl w-full bg-main-light-dark border-4 border-main-orange shadow-[0_0_40px_rgba(254,164,0,0.3)] max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-main-dark border-b-4 border-main-orange p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-custom text-4xl text-main-orange drop-shadow-[0_0_10px_rgba(254,164,0,0.5)]">
                                {job.title}
                            </h2>
                            <p className="text-light-yellow text-sm mt-1 tracking-wide uppercase">
                                {job.role} · {job.year}
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            onMouseEnter={() => hoverSound?.play && !isTouchDevice && hoverSound.play()}
                            className="text-main-orange hover:text-light-yellow transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center border-2 border-main-orange hover:border-light-yellow"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Image Gallery */}
                {job.image && (
                    <div className="relative bg-black">
                        <img
                            src={job.image}
                            alt={`${job.title} screenshot`}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Description */}
                    <div className="space-y-3">
                        <h3 className="text-main-orange font-custom text-2xl">RÉSZLETEK</h3>
                        <p className="text-white/90 leading-relaxed">
                            {job.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    {job.technologies && job.technologies.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-main-orange font-custom text-2xl">TECHNOLÓGIÁK</h3>
                            <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-main-dark text-light-yellow border border-main-orange text-sm uppercase tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Features */}
                    {job.features && job.features.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-main-orange font-custom text-2xl">FUNKCIÓK</h3>
                            <ul className="space-y-2">
                                {job.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/90">
                                        <span className="text-dark-green text-lg mt-0.5">●</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t-2 border-main-orange/30">
                        <button
                            onClick={handleClose}
                            onMouseEnter={() => hoverSound?.play && !isTouchDevice && hoverSound.play()}
                            className="flex-1 bg-main-dark hover:bg-main-light-dark text-white border-2 border-main-orange py-3 px-6 font-custom text-xl transition-all hover:shadow-[0_0_20px_rgba(254,164,0,0.4)]"
                        >
                            VISSZA
                        </button>
                        {job.url && (
                            <button
                                onClick={handleVisitSite}
                                onMouseEnter={() => hoverSound?.play && !isTouchDevice && hoverSound.play()}
                                className="flex-1 bg-main-orange hover:bg-light-yellow text-main-dark border-2 border-main-dark py-3 px-6 font-custom text-xl transition-all hover:shadow-[0_0_20px_rgba(254,164,0,0.6)]"
                            >
                                MEGTEKINTÉS
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
