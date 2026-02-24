import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
    { key: 'step4', number: '04' },
    { key: 'step5', number: '05' },
];

export default function ProcessTimeline() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm tracking-widest uppercase mb-4">
                        {t('services_process_title')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

                    {steps.map((step, i) => (
                        <ScrollReveal
                            key={step.key}
                            direction={i % 2 === 0 ? 'left' : 'right'}
                            delay={i * 100}
                        >
                            <div className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                {/* Content */}
                                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <span className="text-gold font-serif text-4xl opacity-30">{step.number}</span>
                                    <h3 className="font-serif text-2xl mt-2 mb-3">
                                        {t(`services_${step.key}_title`)}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {t(`services_${step.key}_desc`)}
                                    </p>
                                </div>

                                {/* Center dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gold z-10" />

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
