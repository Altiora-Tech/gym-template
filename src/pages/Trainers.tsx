import React from 'react';
import { Trainer } from '../types';
import { FiTwitter, FiInstagram, FiLinkedin } from '../components/icons';

const trainersData: Trainer[] = [
  { id: 1, name: 'Ana López', specialty: 'Entrenamiento de Fuerza', bio: 'Apasionada por ayudar a las personas a alcanzar su máximo potencial físico.', image: 'https://i.ibb.co/ghYZZPZ/pexels-amar-14673247.jpg', social: { twitter: '#', instagram: '#' } },
  { id: 2, name: 'Carlos Vega', specialty: 'Yoga y Flexibilidad', bio: 'Experto en conectar cuerpo y mente para un bienestar integral.', image: 'https://i.ibb.co/d4r167wW/pexels-blanxybuilding-20337685.jpg', social: { instagram: '#' } },
  { id: 3, name: 'Sofía Martin', specialty: 'HIIT y Cardio', bio: 'Energía pura. Sus clases te llevarán al límite y más allá.', image: 'https://i.ibb.co/GvRHgDR0/pexels-karen-irala-242489519-14205054.jpg', social: { twitter: '#', instagram: '#' } },
  { id: 4, name: 'David Ruiz', specialty: 'Nutrición Deportiva', bio: 'Combina entrenamiento y nutrición para resultados sostenibles.', image: 'https://i.ibb.co/Y7xyvC2F/pexels-eduardo-lopez-242403618-13993024.jpg', social: { linkedin: '#' } },
]; 

const TrainerCard: React.FC<{ trainer: Trainer }> = ({ trainer }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="aspect-w-3 aspect-h-4 w-full">
      <img 
        id="trainer-image"
        name="trainer-image"
        aria-label="Imagen del entrenador"
        src={trainer.image} 
        alt={trainer.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    
    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex-1 flex items-end">
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">{trainer.name}</h3>
          <p className="text-primary text-sm sm:text-base font-medium mb-2 drop-shadow">{trainer.specialty}</p>
          
          <div className="bg-black/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg mt-3 transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-xs sm:text-sm text-gray-200 mb-3 line-clamp-3">{trainer.bio}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {trainer.social.instagram && (
                  <a 
                    href={trainer.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`Instagram de ${trainer.name}`}
                  >
                    <FiInstagram size={18} />
                  </a>
                )}
                {trainer.social.twitter && (
                  <a 
                    href={trainer.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`Twitter de ${trainer.name}`}
                  >
                    <FiTwitter size={18} />
                  </a>
                )}
                {trainer.social.linkedin && (
                  <a 
                    href={trainer.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`LinkedIn de ${trainer.name}`}
                  >
                    <FiLinkedin size={18} />
                  </a>
                )}
              </div>
              
              <a 
                href="/contact" 
                className="inline-flex items-center bg-primary/90 hover:bg-primary text-white text-xs sm:text-sm font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-md transition-colors duration-200"
              >
                Contactar
                <span className="ml-1 hidden sm:inline">a {trainer.name.split(' ')[0]}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-12 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3">NUESTRO EQUIPO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
            Conoce a Nuestros <span className="text-primary">Entrenadores</span>
          </h2>
          <p className="text-base md:text-lg text-muted-light dark:text-muted-dark">
            Profesionales certificados y apasionados por ayudarte a alcanzar tus metas de fitness y bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {trainersData.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            ¡Quiero Empezar Ahora!
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trainers;