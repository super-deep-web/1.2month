import React from 'react';

export default function SeccionSorpresa() {
    const abrirRegalo = () => {
        window.open('https://www.youtube.com/watch?v=FZrmdRRo-Ww', '_blank');
    };

    return (
        <div className="text-center my-6 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">¡Sorpresa!</h2>
            <p className="text-xl text-gray-700 mb-4">
                He preparado algo especial para ti. ¿Qué te parece si...
            </p>
            <p className="text-xl text-gray-700 mb-4">
                Ahora te dedico a ti una linda canción que tal vez no es tan linda como tú ya que como te he dicho siempre no hay nada más lindo y hermoso que tú.
            </p>
            <p className="text-xl text-gray-700 mb-4">
                Espero disfrutes de esta canción que te la doy con todo mi amor. Te amo muchísimo mi dulce y maravillosa princesa.
            </p>
            <button onClick={abrirRegalo} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Descubre tu regalo
            </button>
        </div>
    );
}