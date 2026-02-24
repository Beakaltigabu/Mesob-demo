import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-20 md:py-28 px-6 text-center">
                <ScrollReveal>
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('nav_contact')}
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl mb-4">
                        {t('contact_title')}
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('contact_subtitle')}
                    </p>
                </ScrollReveal>
            </section>

            <section className="px-6 pb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <ScrollReveal direction="left">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm tracking-wider uppercase text-gray-500 mb-2">
                                            {t('contact_name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:border-gold focus:outline-none transition-colors duration-300 bg-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm tracking-wider uppercase text-gray-500 mb-2">
                                            {t('contact_email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:border-gold focus:outline-none transition-colors duration-300 bg-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm tracking-wider uppercase text-gray-500 mb-2">
                                            {t('contact_message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full border-b-2 border-gray-200 py-3 text-lg focus:border-gold focus:outline-none transition-colors duration-300 bg-transparent resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group relative px-10 py-4 bg-black text-white text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-gold mt-4"
                                    >
                                        <span className="relative z-10">
                                            {submitted ? '✓' : t('contact_submit')}
                                        </span>
                                    </button>

                                    {submitted && (
                                        <p className="text-gold animate-fade-in mt-2">
                                            Message sent successfully! We'll respond within 24 hours.
                                        </p>
                                    )}
                                </form>
                            </ScrollReveal>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <ScrollReveal direction="right" delay={200}>
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-gold text-sm tracking-widest uppercase mb-2">{t('contact_phone')}</p>
                                        <a href="tel:+2510985242978" className="text-2xl font-serif hover:text-gold transition-colors">
                                            098 524 2978
                                        </a>
                                    </div>

                                    <div>
                                        <p className="text-gold text-sm tracking-widest uppercase mb-2">{t('contact_email_label')}</p>
                                        <a href="mailto:hello@mesob.design" className="text-lg hover:text-gold transition-colors">
                                            hello@mesob.design
                                        </a>
                                    </div>

                                    <div>
                                        <p className="text-gold text-sm tracking-widest uppercase mb-2">{t('contact_area')}</p>
                                        <p className="text-gray-500 leading-relaxed">
                                            {t('contact_area_text')}
                                        </p>
                                    </div>

                                    {/* Decorative */}
                                    <div className="pt-8">
                                        <div className="flex gap-1.5">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-2 h-2 rounded-full bg-gold"
                                                    style={{ opacity: 1 - i * 0.15 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
