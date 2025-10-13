import React from 'react';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';

const About: React.FC = () => {
  return (
    <main id="about" className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50">
        <img 
          id="hero-image"
          name="hero-image"
          aria-label="Imagen hero"
          src="https://i.ibb.co/LD5r1rqr/pexels-olly-3776144.jpg" 
          alt="Gym" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Conoce Nuestra Historia
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Más que un gimnasio, somos una comunidad comprometida con tu bienestar y éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <AboutSection />
      
      {/* Team Section */}
      <TeamSection />
      
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">
              Lo que dicen nuestros miembros
            </h2>
            <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">
              Historias de éxito y transformación de nuestra comunidad
            </p>
          </div> */}
          <Testimonials />
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
    </main>
  );
};

export default About;
