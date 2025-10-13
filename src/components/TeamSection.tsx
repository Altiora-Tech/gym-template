import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Carlos Mendez',
    role: 'Entrenador Personal',
    image: 'https://i.ibb.co/dwmhdpjR/pexels-pipe-vasquez-1417365709-26582405.jpg',
    bio: 'Especialista en entrenamiento funcional y pérdida de peso con más de 8 años de experiencia.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#'
    }
  },
  {
    name: 'Ana López',
    role: 'Instructora de Yoga',
    image: 'https://i.ibb.co/Jj8bz02C/pexels-karen-irala-242489519-14205053.jpg',
    bio: 'Instructora certificada de yoga y meditación con enfoque en reducción de estrés y flexibilidad.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#'
    }
  },
  {
    name: 'Miguel Ángel',
    role: 'Nutriólogo Deportivo',
    image: 'https://i.ibb.co/VcbLcX2w/pexels-jimmyelizarraras-28455752.jpg',
    bio: 'Nutriólogo especializado en deportes y rendimiento atlético. Te ayuda a alcanzar tus metas con una alimentación balanceada.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#'
    }
  },
  {
    name: 'Laura Torres',
    role: 'Entrenadora de Crossfit',
    image: 'https://i.ibb.co/jvjbBprR/pexels-karen-irala-242489519-14205006.jpg',
    bio: 'Entrenadora certificada en CrossFit Nivel 2 con pasión por ayudar a otros a superar sus límites.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#'
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            Conoce a los profesionales apasionados que te ayudarán a alcanzar tus metas de acondicionamiento físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <img
                  id="team-image"
                  name="team-image"
                  aria-label="Equipo de entrenadores"
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                    <div className="flex space-x-4 pt-2">
                      <a href={member.social.twitter} className="text-gray-300 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={member.social.facebook} className="text-gray-300 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href={member.social.instagram} className="text-gray-300 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-light dark:text-muted-dark text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
