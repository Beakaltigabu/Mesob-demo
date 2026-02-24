import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-20 md:py-28 px-6 text-center">
                <ScrollReveal>
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('nav_about')}
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl mb-4">
                        {t('about_title')}
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('about_subtitle')}
                    </p>
                </ScrollReveal>
            </section>

            {/* Story Section */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <ScrollReveal direction="left">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                    alt="Mesob Interior Design"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                                {/* Decorative frame */}
                                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-10" />
                                {/* Gold accent bar */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-gold" />
                            </div>
                        </ScrollReveal>

                        {/* Text */}
                        <div>
                            <ScrollReveal direction="right" delay={100}>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {t('about_text1')}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="right" delay={200}>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {t('about_text2')}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="right" delay={300}>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {t('about_text3')}
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mesob-inspired decorative divider */}
            <div className="flex justify-center py-8">
                <div className="flex gap-2 items-center">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full ${i % 3 === 1 ? 'w-3 h-3 bg-gold' : 'w-2 h-2 bg-gold/30'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Philosophy */}
            <section className="py-20 md:py-28 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <p className="text-gold text-sm tracking-widest uppercase mb-6">
                            {t('about_philosophy_title')}
                        </p>
                        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-200">
                            {t('about_philosophy_text')}
                        </blockquote>
                    </ScrollReveal>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 md:py-28 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                titleEn: 'Intention',
                                titleAm: 'ዓላማ',
                                descEn: 'Every choice we make has purpose. No detail is accidental, no element is arbitrary.',
                                descAm: 'የምናደርገው እያንዳንዱ ምርጫ ዓላማ አለው። ምንም ዝርዝር በአጋጣሚ አይደለም።',
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                                titleEn: 'Craft',
                                titleAm: 'ጥበብ',
                                descEn: 'We honor the art of making. From hand-selected materials to bespoke furnishings, quality is non-negotiable.',
                                descAm: 'የመፍጠር ጥበብን እናከብራለን። ከእጅ የተመረጡ ቁሳቁሶች እስከ ብጁ ቤት ዕቃዎች ጥራት አይደራደርም።',
                            },
                            {
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                titleEn: 'Communion',
                                titleAm: 'ኅብረት',
                                descEn: 'Like the mesob that brings people together, our spaces are designed to connect, comfort, and inspire togetherness.',
                                descAm: 'ሰዎችን አንድ ላይ እንደሚያመጣው መሶብ ቦታዎቻችን ለማገናኘት፣ ለማጽናናት እና ኅብረትን ለማነሳሳት የተነደፉ ናቸው።',
                            },
                        ].map((value, i) => (
                            <ScrollReveal key={i} delay={i * 150}>
                                <div className="text-center">
                                    <div className="text-gold mb-4 flex justify-center">{value.icon}</div>
                                    <h3 className="font-serif text-2xl mb-3">
                                        {useLanguage().lang === 'am' ? value.titleAm : value.titleEn}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {useLanguage().lang === 'am' ? value.descAm : value.descEn}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
