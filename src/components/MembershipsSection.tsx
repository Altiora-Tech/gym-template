import React from 'react';
import { Plan } from '../types';
import { FiCheckCircle } from './icons';
import { CircleStar, Gem, ShieldEllipsis } from 'lucide-react';

const plansData: Plan[] = [
  {
    name: 'Básico',
    icon: <ShieldEllipsis />,
    price: '29',
    features: ['Acceso ilimitado al gimnasio', 'Vestuarios con duchas', 'Acceso a clases de Cardio'],
    isPopular: false,
  },
  {
    name: 'Estándar',
    icon: <CircleStar />,
    price: '49',
    features: ['Todo del plan Básico', 'Acceso a todas las clases grupales', 'Evaluación física inicial', 'Acceso a área de peso libre'],
    isPopular: true,
  },
  {
    name: 'Premium',
    icon: <Gem />,
    price: '79',
    features: ['Todo del plan Estándar', '1 sesión de entrenador personal al mes', 'Acceso a sauna y zona de relajación', 'Invitado gratis los fines de semana'],
    isPopular: false,
  },
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <div className={`border rounded-lg p-8 flex flex-col h-full ${plan.isPopular ? 'border-primary bg-primary/5 dark:bg-primary/10 relative ring-2 ring-primary' : 'border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark'}`}>
    {plan.isPopular && <span className="absolute top-0 right-4 -mt-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">MÁS POPULAR</span>}
    <div className="text-center justify-center items-center mb-6">
      <div className="text-4xl mb-2 text-foreground-light dark:text-foreground-dark">{plan.icon}</div>
      <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">{plan.name}</h3>
      <p className="text-4xl font-extrabold text-foreground-light dark:text-foreground-dark mt-4">${plan.price}<span className="text-lg font-medium text-muted-light dark:text-muted-dark">/mes</span></p>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <FiCheckCircle className="text-primary text-foreground-light dark:text-foreground-dark w-5 h-5 mr-3 flex-shrink-0 mt-1" />
          <span className="text-muted-light dark:text-muted-dark">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      type="button"
      name="Suscribirme al plan"
      id="Suscribirme al plan"
      aria-label="Suscribirme al plan"
      role="button"
      className={`w-full mt-auto font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 ${plan.isPopular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-slate-200 dark:bg-border-dark text-foreground-light dark:text-foreground-dark hover:bg-slate-300 dark:hover:bg-slate-600'}`}
      onClick={() => console.log('Suscribirme al plan', plan.name)}
    >
      Suscribirme Ahora
    </button>
  </div>
);


const MembershipsSection: React.FC = () => {
  return (
    <section id="memberships-section" className="py-20 bg-slate-100 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Planes de Membresía</h2>
          <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Elige el plan que se adapte a tus metas. Sin contratos ocultos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center items-center">
          {plansData.map(plan => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;