import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data/projects';

export default function TestimonialSlider() {
    const { lang, t } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 600);
    }, [isAnimating]);

    const next = useCallback(() => {
        goTo((current + 1) % testimonials.length);
    }, [current, goTo]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const testimonial = testimonials[current];

    return (
        <section className="py-24 md:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Section header */}
                <p className="text-gold text-sm tracking-widest uppercase mb-4">
                    {t('testimonials_title')}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-16">
                    {t('testimonials_subtitle')}
                </h2>

                {/* Quote */}
                <div className="relative min-h-[200px] flex items-center justify-center">
                    {/* Quote mark */}
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 font-serif text-8xl text-gold/20 leading-none select-none">
                        "
                    </span>

                    <div className={`transition-all duration-600 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8">
                            "{testimonial.text[lang] || testimonial.text.en}"
                        </blockquote>

                        <div>
                            <p className="text-gold font-medium">
                                {testimonial.name[lang] || testimonial.name.en}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                {testimonial.role[lang] || testimonial.role.en}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`transition-all duration-300 rounded-full ${i === current
                                    ? 'w-8 h-2 bg-gold'
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gold/50'
                                }`}
                            aria-label={`Testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
