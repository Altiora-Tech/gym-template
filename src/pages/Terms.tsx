import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div id="terms" className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Términos del Servicio</h1>
            <p className="text-xl text-gray-300">Términos y condiciones de uso de nuestros servicios</p>
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
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">1. Aceptación de los Términos</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">2. Uso del Servicio</h2>
                <p className="text-muted-light dark:text-muted-dark mb-4">Nuestros servicios incluyen, pero no se limitan a:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark">
                  <li>Acceso a instalaciones del gimnasio</li>
                  <li>Clases grupales y entrenamientos personalizados</li>
                  <li>Asesoramiento nutricional (según membresía)</li>
                  <li>Acceso a la aplicación móvil y servicios en línea</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">3. Membresías y Pagos</h2>
                <div className="space-y-4">
                  <p className="text-muted-light dark:text-muted-dark">
                    Las membresías están sujetas a los siguientes términos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Los pagos son mensuales y se renuevan automáticamente</li>
                    <li>Se requiere un aviso de 30 días para cancelar la membresía</li>
                    <li>No se realizan reembolsos por días no utilizados</li>
                    <li>Los precios están sujetos a cambios con un aviso previo de 30 días</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">4. Política de Cancelación</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Las cancelaciones de clases deben realizarse con al menos 12 horas de anticipación. Las cancelaciones con menos tiempo de aviso o las inasistencias podrían estar sujetas a cargos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">5. Responsabilidad</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Al utilizar nuestras instalaciones y servicios, usted reconoce que el ejercicio físico conlleva riesgos inherentes. Usted acepta que asume toda la responsabilidad por su participación en cualquier actividad física.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">6. Propiedad Intelectual</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Todo el contenido, logotipos, diseños y materiales de capacitación son propiedad exclusiva de [Nombre del Gimnasio] y están protegidos por las leyes de derechos de autor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">7. Modificaciones</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">8. Ley Aplicable</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Estos términos se regirán e interpretarán de acuerdo con las leyes de [País/Estado], sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">9. Contacto</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Si tiene preguntas sobre estos Términos de Servicio, contáctenos en:
                </p>
                <p className="mt-2">
                  <a href="mailto:legal@gymtemplate.com" className="text-primary hover:text-primary/80 transition-colors">legal@gymtemplate.com</a>
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

export default TermsOfService;