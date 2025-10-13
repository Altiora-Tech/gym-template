import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div id="privacy" className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Política de Privacidad</h1>
            <p className="text-xl text-gray-300">Cómo protegemos y manejamos tu información personal</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-light dark:text-muted-dark mb-8">
              Última actualización: 13 de Octubre de 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">1. Introducción</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  En [Nombre del Gimnasio], valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">2. Información que Recopilamos</h2>
                <p className="text-muted-light dark:text-muted-dark mb-4">Podemos recopilar los siguientes tipos de información:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark">
                  <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
                  <li>Información de pago (tarjetas de crédito/débito)</li>
                  <li>Datos de salud y condición física (opcionales, con su consentimiento)</li>
                  <li>Datos de uso del gimnasio (asistencia, clases reservadas)</li>
                  <li>Información del dispositivo y de navegación</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">3. Cómo Utilizamos su Información</h2>
                <p className="text-muted-light dark:text-muted-dark mb-4">Utilizamos su información para:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark">
                  <li>Proporcionar y gestionar nuestros servicios</li>
                  <li>Procesar pagos y facturación</li>
                  <li>Personalizar su experiencia de entrenamiento</li>
                  <li>Enviar actualizaciones y comunicaciones importantes</li>
                  <li>Mejorar nuestros servicios y desarrollar nuevas funciones</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">4. Compartir Información</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark mt-4">
                  <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Entrenadores y personal autorizado</li>
                  <li>Autoridades competentes cuando sea requerido por ley</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">5. Sus Derechos</h2>
                <p className="text-muted-light dark:text-muted-dark">Usted tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark mt-4">
                  <li>Acceder a su información personal</li>
                  <li>Solicitar correcciones a su información</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                  <li>Retirar su consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">6. Seguridad</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra accesos no autorizados, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">7. Cambios en esta Política</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Podemos actualizar esta política ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">8. Contáctenos</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Si tiene preguntas sobre esta política o el manejo de sus datos personales, contáctenos en:
                </p>
                <p className="mt-2">
                  <a href="mailto:privacy@gymtemplate.com" className="text-primary hover:text-primary/80 transition-colors">privacy@gymtemplate.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          id="back-to-top"
          name="back-to-top"
          type="button"
          className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;