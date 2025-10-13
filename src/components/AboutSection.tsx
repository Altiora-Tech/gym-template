import React from 'react';
import { CheckCircle, Dumbbell, HeartPulse, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: 'Equipamiento de Última Generación',
      description: 'Máquinas y pesas de las mejores marcas para un entrenamiento óptimo.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Comunidad Activa',
      description: 'Únete a una comunidad de más de 1000 miembros comprometidos con su bienestar.'
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: 'Enfoque en la Salud',
      description: 'Programas diseñados para mejorar tu salud física y mental.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: 'Resultados Garantizados',
      description: 'Métodos probados que te ayudarán a alcanzar tus metas de acondicionamiento físico.'
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
            En GymFlex, nos dedicamos a ayudarte a alcanzar tus metas de acondicionamiento físico en un ambiente 
            acogedor y profesional. Nuestro equipo de entrenadores certificados está comprometido con tu éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              id="about-image"
              name="about-image"
              aria-label="Nuestro gimnasio"
              src="https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg" 
              alt="Nuestro gimnasio" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -bottom-2 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg w-1/2">
              <span className="block text-xl font-bold">5+</span>
              <span className="text-sm">Años de Experiencia</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-muted-light dark:text-muted-dark mb-6">
              Creemos que el ejercicio debe ser accesible para todos, independientemente de su nivel de condición física. 
              Nuestro enfoque personalizado garantiza que cada miembro reciba la atención y orientación que necesita 
              para tener éxito en su viaje de fitness.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="mt-1">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-foreground-light dark:text-foreground-dark">
                      {feature.title}
                    </h4>
                    <p className="text-muted-light dark:text-muted-dark text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
