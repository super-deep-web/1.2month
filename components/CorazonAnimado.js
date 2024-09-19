import { useState, useEffect } from 'react';

export default function CorazonAnimado({ onClick, clics, mostrarFinal }) {
    const [isBeating, setIsBeating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBeating(prev => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        if (clics < 14) {
            onClick();
        }
    };

    const scale = 1 + (clics * 0.1); // Aumenta 10% por cada clic

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <button
                onClick={handleClick}
                className={`text-8xl transition-all duration-300 ease-in-out
          ${isBeating && !mostrarFinal ? 'animate-pulse' : ''}
          ${mostrarFinal ? 'animate-final-heart' : ''}
        `}
                style={{
                    transform: `scale(${scale}) ${mostrarFinal ? 'rotate(360deg)' : ''}`,
                    opacity: mostrarFinal ? 0 : 1,
                    transition: mostrarFinal ? 'all 3s ease-in-out' : 'transform 0.3s ease-in-out'
                }}
            >
                ❤️
            </button>
        </div>
    );
}