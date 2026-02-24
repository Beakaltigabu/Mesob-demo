import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProcessTimeline from '../components/ProcessTimeline';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPage() {
    const { t, lang } = useLanguage();

    const serviceCards = [
        {
            key: 'residential',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4m-4 0V15a1 1 0 00-1-1h-2a1 1 0 00-1 1v3" />
                </svg>
            ),
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
        },
        {
            key: 'corporate',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        },
        {
            key: 'consultation',
            icon: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
        },
    ];

    const faqs = [
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
    ];

    const [openFaq, setOpenFaq] = useState(null);

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-20 md:py-28 px-6 text-center">
                <ScrollReveal>
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('nav_services')}
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl mb-4">
                        {t('services_title')}
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('services_subtitle')}
                    </p>
                </ScrollReveal>
            </section>

            {/* Service Cards */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {serviceCards.map((card, i) => (
                            <ScrollReveal key={card.key} delay={i * 150}>
                                <div className="group relative overflow-hidden bg-gray-50 hover:bg-black transition-all duration-700 p-8 min-h-[400px] flex flex-col justify-end">
                                    {/* Background image on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                                        <img src={card.image} alt="" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-gold mb-6">{card.icon}</div>
                                        <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-white transition-colors duration-700">
                                            {t(`services_${card.key}_title`)}
                                        </h3>
                                        <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-700">
                                            {t(`services_${card.key}_desc`)}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <div className="bg-gray-50">
                <ProcessTimeline />
            </div>

            {/* FAQ */}
            <section className="py-20 md:py-28 px-6">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                            {t('faq_title')}
                        </h2>
                    </ScrollReveal>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex justify-between items-center py-5 text-left"
                                    >
                                        <span className="font-medium text-lg pr-4">{faq.q}</span>
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                        >
                                            <path d="M12 6v12m6-6H6" />
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'
                                        }`}>
                                        <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
