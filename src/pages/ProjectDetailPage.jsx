import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import Gallery from '../components/Gallery';
import ScrollReveal from '../components/ScrollReveal';

export default function ProjectDetailPage() {
    const { id } = useParams();
    const { lang, t } = useLanguage();

    const project = projects.find(p => p.id === id);
    const currentIndex = projects.findIndex(p => p.id === id);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    if (!project) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-4xl mb-4">Project not found</h1>
                    <Link to="/projects" className="text-gold hover:underline">
                        {t('projects_view_all')}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main>
            {/* Hero Image */}
            <section className="relative h-[70vh] overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title[lang] || project.title.en}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-gold text-sm tracking-widest uppercase mb-3">
                            {project.category === 'residential' ? t('projects_filter_residential') : t('projects_filter_corporate')} · {project.location[lang] || project.location.en} · {project.year}
                        </p>
                        <h1 className="font-serif text-4xl md:text-6xl text-white">
                            {project.title[lang] || project.title.en}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Project Story */}
            <section className="py-20 md:py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        <ScrollReveal delay={0}>
                            <div>
                                <p className="text-gold text-sm tracking-widest uppercase mb-4">{t('projects_challenge')}</p>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.challenge[lang] || project.challenge.en}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <div>
                                <p className="text-gold text-sm tracking-widest uppercase mb-4">{t('projects_concept')}</p>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.concept[lang] || project.concept.en}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <div>
                                <p className="text-gold text-sm tracking-widest uppercase mb-4">{t('projects_solution')}</p>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.solution[lang] || project.solution.en}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <Gallery images={project.images} alt={project.title[lang] || project.title.en} />
                    </ScrollReveal>
                </div>
            </section>

            {/* Walkthrough Video */}
            {project.walkthroughUrl && (
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <p className="text-gold text-sm tracking-widest uppercase mb-8 text-center">
                                {t('projects_walkthrough')}
                            </p>
                            <div className="aspect-video bg-black rounded-sm overflow-hidden shadow-2xl">
                                <iframe
                                    src={project.walkthroughUrl}
                                    title={`${project.title.en} walkthrough`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Next Project */}
            <section className="relative h-[50vh] overflow-hidden group">
                <Link to={`/projects/${nextProject.id}`} className="block h-full">
                    <img
                        src={nextProject.heroImage}
                        alt={nextProject.title[lang] || nextProject.title.en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-gold text-sm tracking-widest uppercase mb-4">
                            {t('projects_next')}
                        </p>
                        <h2 className="font-serif text-3xl md:text-5xl text-white group-hover:translate-y-[-4px] transition-transform duration-500">
                            {nextProject.title[lang] || nextProject.title.en}
                        </h2>
                    </div>
                </Link>
            </section>
        </main>
    );
}
