import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight, HeartPulse } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div id="not-found" className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
        {/* Animated Header */}
        <div className="bg-primary p-6 md:p-8 text-white">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full animate-bounce">
              <Dumbbell className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">404</h1>
            <h2 className="text-xl md:text-2xl font-semibold">¡Ups! Página no encontrada</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl">
              Parece que te has perdido en tu rutina de ejercicios. ¡No te preocupes! 
              Te ayudamos a volver al buen camino.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                <HeartPulse className="w-6 h-6 mr-2" />
                <span className="font-medium">Mantén la calma</span>
              </div>
              <div className="hidden md:block text-gray-400">•</div>
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                <Dumbbell className="w-6 h-6 mr-2" />
                <span className="font-medium">Sigue entrenando</span>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto mb-8">
              <div className="absolute -inset-1 bg-primary rounded-lg blur opacity-25"></div>
              <Link 
                to="/" 
                className="relative w-full flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Volver al inicio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Fun Gym Tips */}
          <div className="bg-primary rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">
              💪 Consejo del día:
            </h3>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Incluso los mejores atletas tropezaron en sus inicios. 
              Lo importante es levantarse y seguir adelante. ¡Tú puedes!"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ¿Necesitas ayuda? <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:text-primary-600/80 transition-colors">Contáctanos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
