import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import SeccionMensaje from '../components/SeccionMensaje';
import SeccionFotos from '../components/SeccionFotos';
import SeccionSorpresa from '../components/SeccionSorpresa';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export default function Home() {
  const [seccionActual, setSeccionActual] = useState(0);
  const [clics, setClics] = useState(0);
  const [animacionFinal, setAnimacionFinal] = useState(false);

  const avanzarSeccion = () => {
    if (clics < 13) {
      setClics(prev => prev + 1);
    } else if (clics === 13) {
      setClics(14);
      setAnimacionFinal(true);

      setTimeout(() => {
        setSeccionActual(1);
      }, 500);
    }
  };

  const navegarASeccion = (direccion) => {
    setSeccionActual(prev => {
      const nuevaSeccion = prev + direccion;
      return Math.max(0, Math.min(nuevaSeccion, 3));
    });
  };

  const heartSize = clics === 0 ? 48 : 48 + (clics * 8);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Imagen de fondo dinámica */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url('/images/${seccionActual === 0 ? 'home' : 'background'}.jpeg')`,
        }}
      ></div>

      {/* Capa de superposición para mejorar la legibilidad */}
      <div className="fixed inset-0 z-0 bg-blue-500 bg-opacity-30"></div>

      <main className="flex-grow flex items-center py-4 px-4 w-full max-w-4xl mx-auto justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={seccionActual}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full mb-20 flex items-center justify-center"
          >
            {seccionActual === 0 && (
              <div className="relative flex flex-col items-center justify-center">
                <div className="text-6xl absolute top-[-100px] z-10 font-bold text-white mb-12 shadow-text">
                  {clics}
                </div>
                <Heart
                  className={`text-red-500 cursor-pointer transition-all duration-500
                    ${animacionFinal ? 'scale-[10] opacity-0' : 'hover:scale-110'} drop-shadow-lg`}
                  onClick={avanzarSeccion}
                  size={heartSize}
                  fill="currentColor"
                  stroke="none"
                />
              </div>
            )}
            {seccionActual === 1 && <SeccionMensaje />}
            {seccionActual === 2 && <SeccionFotos />}
            {seccionActual === 3 && <SeccionSorpresa />}
          </motion.div>
        </AnimatePresence>
      </main>

      {seccionActual !== 0 && (
        <nav className="fixed bottom-0 left-0 right-0 bg-blue-400 text-white py-4 px-6 rounded-t-3xl shadow-lg z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navegarASeccion(-1)}
              className="p-2 rounded-full bg-blue-300 hover:bg-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={seccionActual === 1}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <div className="relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-100 p-4 rounded-full shadow-lg">
                  <Heart className="h-10 w-10 text-red-500 animate-pulse" fill="currentColor" />
                </div>
              </div>
            </div>
            <button
              onClick={() => navegarASeccion(1)}
              className="p-2 rounded-full bg-blue-300 hover:bg-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={seccionActual === 3}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}