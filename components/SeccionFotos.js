import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const simbolosRomanticos = [
    '❤️', '💖', '💘', '💝',
    'Amor', 'Juntos', 'Siempre', 'Eternidad'
];

export default function SeccionFotos() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        initializeGame();
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        const updateHeight = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const initializeGame = () => {
        const shuffled = [...simbolosRomanticos, ...simbolosRomanticos].sort(() => Math.random() - 0.5);
        setCards(shuffled.map((simbolo, index) => ({ id: index, simbolo })));
        setFlipped([]);
        setSolved([]);
        setDisabled(false);
        setMoves(0);
        setGameWon(false);
    };

    const handleClick = (id) => {
        if (disabled) return;
        setFlipped((prev) => [...prev, id]);
    };

    useEffect(() => {
        if (flipped.length === 2) {
            setDisabled(true);
            setMoves((prev) => prev + 1);
        }
        if (flipped.length === 2 && cards[flipped[0]].simbolo === cards[flipped[1]].simbolo) {
            setSolved((prev) => [...prev, cards[flipped[0]].simbolo]);
            setFlipped([]);
            setDisabled(false);
        } else if (flipped.length === 2) {
            setTimeout(() => {
                setFlipped([]);
                setDisabled(false);
            }, 1000);
        }
    }, [flipped, cards]);

    useEffect(() => {
        if (solved.length === simbolosRomanticos.length) {
            setGameWon(true);
        }
    }, [solved]);

    const renderCard = (card) => {
        const flippedOrSolved = flipped.includes(card.id) || solved.includes(card.simbolo);
        return (
            <button
                key={card.id}
                className={`w-full aspect-square text-sm sm:text-base md:text-lg ${flippedOrSolved ? 'bg-blue-200' : 'bg-pink-100'
                    } rounded-md transition-colors duration-300 focus:outline-none flex items-center justify-center shadow-md hover:shadow-lg`}
                onClick={() => handleClick(card.id)}
                disabled={flippedOrSolved || disabled}
            >
                {flippedOrSolved ? card.simbolo : <Star className="text-blue-300" size={24} />}
            </button>
        );
    };

    return (
        <div className="flex rounded-lg flex-col w-full items-center justify-center min-h-[calc(100vh-110px)] max-h-[calc(100vh-110px)] bg-gradient-to-br from-blue-100 to-pink-100 px-4 sm:px-6 lg:px-8 py-4">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600 text-center">Memorama de Amor</h1>
                {!gameWon && ( <div className="mb-4 grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                    {cards.map(renderCard)}
                </div>
                )}
                <p className="text-lg sm:text-xl mb-4 text-blue-600 text-center">Movimientos: {moves}</p>
                {gameWon && (
                    <div className="bg-blue-100 border border-blue-300 text-blue-600 px-4 py-3 rounded-md relative mb-4 shadow-md" role="alert">
                        <p className="font-bold text-center">¡Felicidades, mi princesa!</p>
                        <p className="text-center">Has completado nuestro juego en {moves} movimientos. ¡Nuestro amor es infinito como las estrellas!</p>
                        <p className="text-center">Nuestro amor es tan grande, más grande que el universo mismo, porque cada día crece más y más, estoy tan seguro como tú que lo haremos crecer juntos por la eternidad.</p>
                    </div>
                )}
                <div className="flex justify-center">
                    <button
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out"
                        onClick={initializeGame}
                    >
                        Jugar de nuevo
                    </button>
                </div>
            </div>
        </div>
    );
}