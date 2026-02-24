import { useState, useEffect, useCallback } from 'react';

export default function Gallery({ images, alt = '' }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openLightbox = (index) => {
        setActiveIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const goNext = useCallback(() => {
        setActiveIndex(prev => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setActiveIndex(prev => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [lightboxOpen, goNext, goPrev]);

    return (
        <>
            {/* Masonry-style Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {images.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => openLightbox(i)}
                        className={`group relative overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''
                            }`}
                    >
                        <img
                            src={src}
                            alt={`${alt} ${i + 1}`}
                            className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                            >
                                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Nav arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                            <path d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                            <path d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <img
                        src={images[activeIndex]}
                        alt={`${alt} ${activeIndex + 1}`}
                        className="max-h-[85vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-wider">
                        {activeIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
