import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import StickyScrollSection from '../components/StickyScrollSection';
import TestimonialSlider from '../components/TestimonialSlider';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
    const { t } = useLanguage();
    const featured = projects.filter(p => p.featured).slice(0, 6);

    return (
        <main>
            {/* Hero */}
            <Hero />

            {/* Intro Text */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="flex justify-center mb-8">
                            <div className="flex gap-2 items-center">
                                <div className="h-px w-12 bg-gold" />
                                <div className="w-2 h-2 rounded-full bg-gold" />
                                <div className="h-px w-12 bg-gold" />
                            </div>
                        </div>
                        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed">
                            {t('intro_text')}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="featured-projects" className="py-12 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="text-gold text-sm tracking-widest uppercase mb-4">
                                {t('projects_title')}
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl">
                                {t('projects_subtitle')}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {featured.map((project, i) => (
                            <ScrollReveal key={project.id} delay={i * 100}>
                                <ProjectCard project={project} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="text-center mt-12">
                            <Link
                                to="/projects"
                                className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-black hover:text-gold transition-colors duration-300"
                            >
                                {t('projects_view_all')}
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services — Apple-style Sticky Scroll */}
            <StickyScrollSection />

            {/* Testimonials */}
            <TestimonialSlider />

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <ScrollReveal>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                            {t('contact_title')}
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                            {t('contact_subtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="group relative inline-block px-10 py-4 border border-gold text-gold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:text-white"
                        >
                            <span className="relative z-10">{t('hero_cta')}</span>
                            <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
