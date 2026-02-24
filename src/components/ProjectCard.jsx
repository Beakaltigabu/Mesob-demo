import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, index = 0 }) {
    const { lang } = useLanguage();

    return (
        <Link
            to={`/projects/${project.id}`}
            className="group block relative overflow-hidden bg-gray-100"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={project.title[lang] || project.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content — always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category === 'residential' ? '◆ Residential' : '◆ Corporate'} · {project.year}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: '100ms' }}>
                    {project.title[lang] || project.title.en}
                </h3>
                <p className="text-white/60 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionDelay: '150ms' }}>
                    {project.location[lang] || project.location.en}
                </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold transition-all duration-500" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/0 group-hover:border-gold transition-all duration-500" />
        </Link>
    );
}
