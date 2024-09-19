import React from 'react';
import { Heart, Star, Sparkles, Gift, HandHeart, HeartPulse, Sun } from 'lucide-react';

const IconWrapper = ({ children }) => (
    <div className="inline-block mx-1 text-blue-500">
        {children}
    </div>
);

export default function SeccionMensaje() {
    return (
        <div className="text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg border-2 border-blue-100">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 relative">
                <IconWrapper><Sparkles size={24} /></IconWrapper>
                Dedicado para ti
                <IconWrapper><Sparkles size={24} /></IconWrapper>
            </h1>
            <div className="space-y-4">
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Heart size={20} /></IconWrapper>
                    Déjame darte las gracias por aparecer en mi vida, jamás había encontrado a alguien tan increíble como lo eres tú, de un día a otro te convertiste en la persona más importante en mi vida.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Star size={20} /></IconWrapper>
                    Llegaste a cambiar mi mundo por completo, las palabras no me alcanzan ni me alcanzarán nunca para decirte cuánto te amo a tí.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Sun size={20} /></IconWrapper>
                    Tú eres tan linda, maravillosa, bonita, única, valiosa, especial, preciosa, perfecta, divina, espléndida, hermosa, brillante, increíble, amable, bella, eres en una sola frase lo mejor del universo.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Gift size={20} /></IconWrapper>
                    Tenerte en mi vida en serio que es lo mejor que puede existir, te amo muchísimo, te amo con toda mi alma.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><HandHeart size={20} /></IconWrapper>
                    Mi princesita, yo prometo quedarme contigo por la eternidad si eso es lo que quieres tú.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><HeartPulse size={20} /></IconWrapper>
                    Yo daré todo de mi siempre aunque claro ya lo estoy haciendo, te voy a estar amando muchísimo siempre mi amor, porque mi amor por tí es sincero y bonito.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Heart size={20} /></IconWrapper>
                    Quiero estar en una relación contigo que no tenga fin, quiero crear una historia que quedará grabada en nuestros corazones.
                </p>
                <p className="text-xl text-gray-700 py-2 leading-relaxed">
                    <IconWrapper><Sparkles size={20} /></IconWrapper>
                    Contigo siempre soy feliz y por igual quiero hacerte muy feliz a ti por toda la eternidad.
                </p>
            </div>
        </div>
    );
}