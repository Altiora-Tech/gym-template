import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Star } from 'lucide-react';

const CtaSection: React.FC = () => (
  <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-[#FF6B35] to-[#1976D2] dark:from-[#E64A19] dark:to-[#0D47A1] text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu vida?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 dark:text-white/80">
        Únete a nuestra comunidad fitness y comienza tu viaje hacia una versión más saludable y fuerte de ti mismo.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link 
          to="/memberships" 
          className="px-8 py-4 bg-white text-[#BF360C] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg focus:ring-4 focus:ring-[#FF6B35] focus:outline-none dark:bg-white dark:text-[#E64A19] dark:hover:bg-gray-100"
        >
          Ver Membresías
        </Link>
        <Link 
          to="/contact" 
          className="px-8 py-4 bg-white/90 text-[#1976D2] border-2 border-transparent font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-[#64B5F6] focus:outline-none shadow-md dark:bg-[#BBDEFB] dark:text-[#0D47A1] dark:hover:bg-white"
        >
          Contáctanos
        </Link>
      </div>
      
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/90 dark:text-white/80">
        <div className="flex items-center">
          <div className="p-2 bg-white/10 rounded-full mr-3">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium">+1000 Miembros</span>
        </div>
        <div className="hidden sm:block h-6 w-px bg-white/30"></div>
        <div className="flex items-center">
          <div className="p-2 bg-amber-500/20 rounded-full mr-3">
            <Star className="w-5 h-5 text-amber-400" />
          </div>
          <span className="font-medium">4.9/5 Valoración</span>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
