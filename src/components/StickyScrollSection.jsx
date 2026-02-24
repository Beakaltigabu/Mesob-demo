import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const services = [
    {
        key: 'residential',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4m-4 0V15a1 1 0 00-1-1h-2a1 1 0 00-1 1v3" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    },
    {
        key: 'corporate',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
    {
        key: 'consultation',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
    },
];

export default function StickyScrollSection() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const panelRefs = useRef([]);

    useEffect(() => {
        const observers = [];

        panelRefs.current.forEach((panel, index) => {
            if (!panel) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                { threshold: 0.6 }
            );
            observer.observe(panel);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <section className="bg-black text-white">
            <div ref={containerRef} className="relative">
                {/* Section header */}
                <div className="text-center py-20 px-6">
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('services_title')}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
                        {t('services_subtitle')}
                    </h2>
                </div>

                {/* Sticky container */}
                <div className="lg:flex lg:min-h-screen">
                    {/* Sticky image — left side */}
                    <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
                        <div className="relative w-full h-full overflow-hidden">
                            {services.map((service, i) => (
                                <img
                                    key={service.key}
                                    src={service.image}
                                    alt={t(`services_${service.key}_title`)}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeIndex === i ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                        </div>
                    </div>

                    {/* Scrollable content — right side */}
                    <div className="lg:w-1/2">
                        {services.map((service, i) => (
                            <div
                                key={service.key}
                                ref={el => panelRefs.current[i] = el}
                                className="min-h-[70vh] lg:min-h-screen flex items-center px-6 lg:px-16"
                            >
                                <div className={`max-w-lg transition-all duration-700 ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
                                    }`}>
                                    {/* Mobile image */}
                                    <div className="lg:hidden mb-8 overflow-hidden rounded-sm">
                                        <img
                                            src={service.image}
                                            alt={t(`services_${service.key}_title`)}
                                            className="w-full aspect-[16/9] object-cover"
                                        />
                                    </div>

                                    <div className="text-gold mb-6">{service.icon}</div>

                                    {/* Step indicator */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-gold text-sm tracking-widest">0{i + 1}</span>
                                        <div className="h-px flex-1 bg-gray-700" />
                                    </div>

                                    <h3 className="font-serif text-3xl md:text-4xl mb-4">
                                        {t(`services_${service.key}_title`)}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {t(`services_${service.key}_desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
