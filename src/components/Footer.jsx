import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    const links = [
        { to: '/', label: t('nav_home') },
        { to: '/projects', label: t('nav_projects') },
        { to: '/about', label: t('nav_about') },
        { to: '/services', label: t('nav_services') },
        { to: '/contact', label: t('nav_contact') },
    ];

    const socials = [
        {
            label: 'TikTok',
            href: 'https://tiktok.com/@mesob',
            icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />,
        },
        {
            label: 'Instagram',
            href: 'https://instagram.com/mesob',
            icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/company/mesob',
            icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
        },
    ];

    return (
        <footer className="bg-black text-white">
            {/* Decorative gold line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {/* Brand — full width on smallest screens */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <h3 className="font-serif text-2xl mb-2">MESOB</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer_tagline')}
                        </p>
                        {/* Social Icons — inline on mobile */}
                        <div className="flex gap-3 mt-5">
                            {socials.map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
                                    aria-label={s.label}
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs sm:text-sm tracking-widest uppercase text-gold mb-4 sm:mb-6">
                            {t('footer_links')}
                        </h4>
                        <ul className="space-y-2.5">
                            {links.map(link => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs sm:text-sm tracking-widest uppercase text-gold mb-4 sm:mb-6">
                            {t('footer_contact')}
                        </h4>
                        <div className="space-y-2.5 text-sm text-gray-400">
                            <a href="tel:+2510985242978" className="block hover:text-white transition-colors">
                                📞 098 524 2978
                            </a>
                            <a href="mailto:hello@mesob.design" className="block hover:text-white transition-colors">
                                ✉️ hello@mesob.design
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Mesob. {t('footer_rights')}
                    </p>
                    <p className="text-gray-600 text-xs">
                        Powered by{' '}
                        <a
                            href="https://digitalamba.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold/70 hover:text-gold transition-colors duration-300"
                        >
                            DigitalAmba
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
