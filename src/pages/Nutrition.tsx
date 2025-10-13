import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppleAlt, FaHeartbeat, FaDumbbell } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const servicesData: Service[] = [
  {
    icon: <FaAppleAlt size={32} />,
    title: 'Nutrición Personalizada',
    description: 'Planes de alimentación personalizados para complementar tu entrenamiento y acelerar tus resultados.'
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: 'Fisioterapia Deportiva',
    description: 'Prevención y recuperación de lesiones con nuestros especialistas para que nunca detengas tu progreso.'
  },
  {
    icon: <FaDumbbell size={32} />,
    title: 'Entrenamiento Personalizado',
    description: 'Programas de entrenamiento adaptados a tus objetivos específicos y nivel de condición física.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="inline-block text-primary-600 bg-primary-100 p-4 rounded-full mb-6">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {service.description}
    </p>
    <Link 
      to="/contact" 
      className="inline-flex items-center mt-6 text-primary-600 font-bold hover:text-primary-700 transition-colors group"
    >
      Saber Más <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const Nutrition: React.FC = () => (
  <section id="nutrition" className="py-20 bg-slate-100 dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Bienestar Integral
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Tu salud es más que solo ejercicio. Ofrecemos servicios complementarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
);

export default Nutrition;