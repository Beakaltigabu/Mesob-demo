import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggleLang, t } = useLanguage();
    const location = useLocation();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navBg = scrolled || !isHome || menuOpen
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent';

    const textColor = scrolled || !isHome
        ? 'text-black'
        : 'text-white';

    const links = [
        { to: '/', label: t('nav_home') },
        { to: '/projects', label: t('nav_projects') },
        { to: '/about', label: t('nav_about') },
        { to: '/services', label: t('nav_services') },
        { to: '/contact', label: t('nav_contact') },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${textColor}`}>
                            MISOSO
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {links.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold ${textColor} ${location.pathname === link.to ? 'text-gold' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right side: lang toggle + hamburger */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleLang}
                                className={`text-xs tracking-wider uppercase border px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold ${scrolled || !isHome
                                    ? 'border-black/20 text-black'
                                    : 'border-white/40 text-white'
                                    }`}
                            >
                                {lang === 'en' ? 'አማ' : 'EN'}
                            </button>

                            {/* Hamburger */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${textColor}`}
                                aria-label="Menu"
                            >
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 flex flex-col items-center justify-center gap-8 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                {links.map((link, i) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="font-serif text-3xl text-black hover:text-gold transition-colors duration-300"
                        style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    );
}
