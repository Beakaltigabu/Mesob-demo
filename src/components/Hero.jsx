import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    // Mark loaded once video/image is ready — triggers the Ken Burns pan
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Parallax effect on scroll
    useEffect(() => {
        const onScroll = () => {
            if (videoRef.current) {
                const scrollY = window.scrollY;
                videoRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
            {/* Video Background with Ken Burns pan-in effect */}
            <div
                ref={videoRef}
                className={`absolute inset-0 transition-all duration-[4000ms] ease-out ${loaded ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
                    }`}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => setLoaded(true)}
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
                >
                    <source
                        src="https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Overlay — heavier for CTA contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                {/* Decorative line */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold mb-8 animate-fade-in" />

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-up">
                    {t('hero_headline')}
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
                    {t('hero_sub')}
                </p>

                {/* CTA — solid gold background for max visibility */}
                <button
                    onClick={() => navigate('/contact')}
                    className="group relative px-10 py-4 bg-gold text-black font-medium text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-white animate-fade-up"
                    style={{ animationDelay: '400ms' }}
                >
                    <span className="relative z-10">{t('hero_cta')}</span>
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '800ms' }}>
                <div className="w-px h-8 bg-gradient-to-b from-gold/0 to-gold animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>
        </section>
    );
}
