import React from 'react';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';

const StatItem: React.FC<{ value: number; label: string; suffix?: string; }> = ({ value, label, suffix = '' }) => {
  const count = useCounter(value);
  return (
    <div className="text-center">
      <p className="text-4xl lg:text-5xl font-extrabold text-white">
        +{count}{suffix}
      </p>
      <p className="text-sm lg:text-base text-gray-300">{label}</p>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/poster/video-gym-1.jpg"
      >
        <source src="/videos/video-gym-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary-DEFAULT">Transforma</span> tu cuerpo.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          Transforma tu <span className="text-primary-DEFAULT">vida.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2 items-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/memberships" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:ring-4 focus:ring-primary/50 focus:outline-none"
            >
                Únete Ahora
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-primary font-bold py-4 px-10 rounded-xl text-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 shadow-md focus:ring-4 focus:ring-primary/30 focus:outline-none"
            >
                Obtén Pase Gratis
            </Link>
        </div>


        <div className="mt-16 pt-8 border-t border-gray-600 w-full max-w-4xl animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 gap-8">
                <StatItem value={500} className="p-4 mb-2" label="Miembros Activos" />
                <StatItem value={10} className="p-4 mb-2" label="Entrenadores Certificados" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;