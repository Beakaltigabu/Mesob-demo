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
        // Modal will stay open until user closes it, or auto-close after a longer time
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 5000);
    };

    const closeModal = () => {
        setSubmitted(false);
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
                                            {t('contact_submit')}
                                        </span>
                                    </button>
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
                                        <a href="mailto:hello@misoso.design" className="text-lg hover:text-gold transition-colors">
                                            hello@misoso.design
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

            {/* Success Modal */}
            {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative animate-fade-up">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="font-serif text-2xl md:text-3xl mb-4">Message Sent</h3>
                        <p className="text-gray-600 mb-8">
                            Thank you for reaching out. A member of our team will get back to you within 24 hours.
                        </p>

                        <button
                            onClick={closeModal}
                            className="w-full px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-gold transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
