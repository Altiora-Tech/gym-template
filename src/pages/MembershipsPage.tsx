import React from 'react';
import { FiCheck, FiClock, FiAward, FiUsers, FiDollarSign, FiZap, FiHeart, FiStar, FiActivity } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const MembershipTier = ({ title, price, features, popular = false, recommended = false }) => (
  <div id="memberships" className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border-2 ${popular ? 'border-primary shadow-lg' : 'border-gray-200 dark:border-gray-700'} h-full`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">MÁS POPULAR</span>
      </div>
    )}
    {recommended && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">RECOMENDADO</span>
      </div>
    )}
    
    <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
    <div className="text-center mb-6">
      <span className="text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">${price}</span>
      <span className="text-muted-light dark:text-muted-dark">/mes</span>
    </div>
    
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
          <span className="text-muted-light dark:text-muted-dark">{feature}</span>
        </li>
      ))}
    </ul>
    
    <button 
      aria-label="Start membership"
      id="start-membership"
      name="start-membership"
      type="button"
      // onClick={() => navigate('/memberships')}
      className={`mt-auto w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
      popular 
        ? 'bg-primary hover:bg-primary/90 text-white' 
        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-foreground-light dark:text-foreground-dark'
    }`}>
      Comenzar Ahora
    </button>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-light dark:text-muted-dark">{description}</p>
  </div>
);

const MembershipsPage: React.FC = () => {
  const navigate = useNavigate();
  const membershipTiers = [
    {
      title: 'Básico',
      price: '29',
      features: [
        'Acceso a zona de pesas',
        'Uso de vestuarios',
        '1 clase grupal por semana',
        'Sin compromiso de permanencia',
        'Acceso a la app móvil',
        'Asesoramiento básico'
      ]
    },
    {
      title: 'Estándar',
      price: '49',
      popular: true,
      features: [
        'Todo en Básico +',
        'Clases grupales ilimitadas',
        'Acceso a piscina y sauna',
        'Plan de entrenamiento personalizado',
        '2 sesiones con entrenador personal',
        'Análisis de composición corporal'
      ]
    },
    {
      title: 'Premium',
      price: '79',
      recommended: true,
      features: [
        'Todo en Estándar +',
        'Acceso 24/7',
        'Entrenador personal 1 vez por semana',
        'Nutrición personalizada',
        'Seguimiento mensual',
        'Acceso a eventos exclusivos',
        'Toalla y candado incluidos'
      ]
    }
  ];

  const services = [
    {
      icon: FiActivity,
      title: 'Entrenamiento Personalizado',
      description: 'Programas de entrenamiento diseñados específicamente para alcanzar tus objetivos personales.'
    },
    {
      icon: FiUsers,
      title: 'Clases Grupales',
      description: 'Amplia variedad de clases desde HIIT hasta yoga, para todos los niveles.'
    },
    {
      icon: FiAward,
      title: 'Programa de Nutrición',
      description: 'Asesoramiento nutricional personalizado para complementar tu entrenamiento.'
    },
    {
      icon: FiClock,
      title: 'Horario Flexible',
      description: 'Acceso ilimitado en nuestro horario extendido para adaptarnos a tu rutina.'
    },
    {
      icon: FiHeart,
      title: 'Bienestar Integral',
      description: 'Servicios de fisioterapia y masajes para tu recuperación.'
    },
    {
      icon: FiZap,
      title: 'Resultados Garantizados',
      description: 'Seguimiento de progreso y ajustes para asegurar que alcances tus metas.'
    }
  ];

  const faqs = [
    {
      question: '¿Puedo congelar mi membresía?',
      answer: 'Sí, ofrecemos la opción de congelar tu membresía hasta por 2 meses al año por razones médicas o de viaje.'
    },
    {
      question: '¿Hay cargos por cancelación?',
      answer: 'No hay cargos por cancelación, pero requerimos un aviso de 30 días para procesar la baja de tu membresía.'
    },
    {
      question: '¿Ofrecen prueba gratuita?',
      answer: 'Sí, ofrecemos un día de prueba gratuita para que conozcas nuestras instalaciones y servicios.'
    },
    {
      question: '¿Puedo cambiar de plan?',
      answer: 'Sí, puedes cambiar a un plan superior en cualquier momento. Los cambios a planes inferiores requieren un aviso de 30 días.'
    }
  ];

  return (
    <div id="membership" className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Membresías</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Encuentra el plan perfecto que se adapte a tus necesidades y objetivos de entrenamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Planes y Servicios</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus objetivos de fitness. Sin sorpresas, sin cargos ocultos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <MembershipTier key={index} {...tier} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-light dark:text-muted-dark mb-6">
              ¿Necesitas un plan personalizado? Contáctanos para opciones corporativas o familiares.
            </p>
            <button 
              aria-label="Request custom plan"
              id="request-custom-plan"
              name="request-custom-plan"
              type="button"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors">
              Solicitar Plan Personalizado
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus metas de fitness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros miembros</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              Descubre las historias de éxito de nuestra comunidad fitness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-light dark:text-muted-dark mb-4">
                  "El mejor gimnasio al que he ido. Los entrenadores son increíbles y las instalaciones están impecables. ¡He logrado mis objetivos más rápido de lo esperado!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Ana M.</h4>
                    <p className="text-sm text-muted-light dark:text-muted-dark">Miembro desde 2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-light dark:text-muted-dark">
              Encuentra respuestas a las preguntas más comunes sobre nuestras membresías.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-light dark:text-muted-dark">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-light dark:text-muted-dark mb-6">
              ¿No encontraste lo que buscabas? Estamos aquí para ayudarte.
            </p>
            <Link 
              aria-label="Contact us"
              id="contact-us"
              name="contact-us"
              to="/contact" className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad hoy mismo y da el primer paso hacia una vida más saludable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button 
              aria-label="View plans"
              id="view-plans"
              name="view-plans"
              type="button"
              onClick={() => navigate('/memberships')}
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Ver Planes
            </button> */}
            <button 
              aria-label="Contact advisor"
              id="contact-advisor"
              name="contact-advisor"
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipsPage;