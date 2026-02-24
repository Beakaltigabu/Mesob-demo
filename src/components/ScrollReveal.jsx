import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '', threshold = 0.15 }) {
    const ref = useScrollReveal({ threshold });

    const dirClass = direction === 'left' ? 'from-left'
        : direction === 'right' ? 'from-right'
            : direction === 'scale' ? 'from-scale'
                : '';

    return (
        <div
            ref={ref}
            className={`reveal-hidden ${dirClass} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
