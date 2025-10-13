import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Class } from '../types';

const classesData: Class[] = [
  { id: '1', name: 'Crossfit', description: 'Entrenamiento de alta intensidad para fuerza y acondicionamiento total.', image: 'https://i.ibb.co/zTtQT6y4/pexels-leonmart-1552242.jpg', schedule: 'L-V: 7am, 6pm, 8pm', category: 'Fuerza' },
  { id: '2', name: 'Yoga', description: 'Mejora tu flexibilidad, fuerza y paz mental con nuestras clases de yoga.', image: 'https://i.ibb.co/KzxXNJXj/pexels-olly-868704.jpg', schedule: 'M-J: 8am, 7pm', category: 'Flexibilidad' },
  { id: '3', name: 'Spinning', description: 'Quema calorías y mejora tu resistencia cardiovascular al ritmo de la música.', image: 'https://i.ibb.co/fG0G4fd0/pexels-limonovdigital-8766379.jpg', schedule: 'L-M-V: 6pm, 7pm', category: 'Cardio' },
  { id: '4', name: 'HIIT', description: 'Intervalos de alta intensidad para maximizar la quema de grasa en poco tiempo.', image: 'https://i.ibb.co/PZCWqfh9/pexels-ketut-subiyanto-4853908.jpg', schedule: 'M-J: 7am, 8pm', category: 'Cardio' },
  { id: '5', name: 'Entrenamiento Funcional', description: 'Entrena movimientos que aplicas en tu día a día, mejorando tu calidad de vida.', image: 'https://i.ibb.co/zTjcXdb1/pexels-olly-3757374.jpg', schedule: 'L-V: 9am', category: 'Fuerza' },
  { id: '6', name: 'Pilates', description: 'Fortalece tu core y mejora tu postura con ejercicios de bajo impacto.', image: 'https://i.ibb.co/gM2JmTwc/pexels-n1ch01as-9288101.jpg', schedule: 'M-J: 10am, 5pm', category: 'Flexibilidad' },
];

const categories: (Class['category'] | 'Todos')[] = ['Todos', 'Cardio', 'Fuerza', 'Flexibilidad'];

const ClassCard: React.FC<{ classInfo: Class }> = ({ classInfo }) => (
  <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img 
      id="class-image"
      name="class-image"
      aria-label="Imagen de la clase"
      src={classInfo.image} 
      alt={classInfo.name} 
      className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">{classInfo.name}</h3>
      <p className="text-muted-light dark:text-muted-dark text-sm mb-4">{classInfo.description}</p>
      <p className="text-sm font-semibold text-primary-DEFAULT mb-4">{classInfo.schedule}</p>
      <Link to="/schedule" 
        aria-label="Reserve a class"
        id="reserve-a-class"
        name="reserve-a-class"
        type="button"
        className="w-full block text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-primary/30 focus:outline-none">
        Reservar Clase
      </Link>
    </div>
  </div>
);

const Classes: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Class['category'] | 'Todos'>('Todos');

  const filteredClasses = activeCategory === 'Todos'
    ? classesData
    : classesData.filter(c => c.category === activeCategory);

  return (
    <section id="classes" className="py-20 bg-slate-100 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Nuestras Clases</h2>
          <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Encuentra el entrenamiento perfecto para ti.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-label="Filter classes by category"
              id="filter-classes-by-category"
              name="filter-classes-by-category"
              type="button"
              className={`px-6 py-2.5 font-semibold rounded-full transition-all duration-300 text-sm ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map(classInfo => (
            <ClassCard key={classInfo.id} classInfo={classInfo} />
          ))}
        </div>
         <div className="mt-12 text-center">
            <Link to="/schedule" 
            aria-label="View full schedule"
            id="view-full-schedule"
            name="view-full-schedule"
            type="button"
            className="inline-flex items-center text-primary font-bold hover:text-primary-dark text-lg group transition-colors">
                Ver el horario completo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Classes;