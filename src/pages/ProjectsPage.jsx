import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const filters = [
        { key: 'all', label: t('projects_filter_all') },
        { key: 'residential', label: t('projects_filter_residential') },
        { key: 'corporate', label: t('projects_filter_corporate') },
    ];

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-20 md:py-28 px-6 text-center">
                <ScrollReveal>
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('nav_projects')}
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl mb-4">
                        {t('projects_title')}
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('projects_subtitle')}
                    </p>
                </ScrollReveal>
            </section>

            {/* Filters */}
            <div className="flex justify-center gap-6 mb-12 px-6">
                {filters.map(f => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`text-sm tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 ${filter === f.key
                                ? 'border-gold text-gold'
                                : 'border-transparent text-gray-400 hover:text-black'
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {filtered.map((project, i) => (
                            <ScrollReveal key={project.id} delay={i * 80}>
                                <ProjectCard project={project} index={i} />
                            </ScrollReveal>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-center text-gray-400 py-20 font-serif text-xl">
                            No projects in this category yet.
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}
