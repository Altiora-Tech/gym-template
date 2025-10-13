import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div id="cookies" className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Política de Cookies</h1>
            <p className="text-xl text-gray-300">Uso de cookies y tecnologías similares</p>
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
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">1. ¿Qué son las cookies?</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia de usuario, recordar sus preferencias y ofrecerle un servicio más personalizado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">2. Tipos de cookies que utilizamos</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-2">Cookies Esenciales</h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Son necesarias para que el sitio web funcione correctamente. Incluyen, por ejemplo, cookies que permiten el acceso a áreas seguras del sitio.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-2">Cookies de Rendimiento</h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Recopilan información sobre cómo los visitantes usan nuestro sitio web, como qué páginas visitan con más frecuencia. Toda la información es anónima.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-2">Cookies de Funcionalidad</h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Nos permiten recordar sus preferencias (como su idioma o región) y ofrecer características mejoradas y más personales.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-2">Cookies de Publicidad</h3>
                    <p className="text-muted-light dark:text-muted-dark">
                      Se utilizan para ofrecer anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">3. Cookies de Terceros</h2>
                <p className="text-muted-light dark:text-muted-dark mb-4">
                  Utilizamos servicios de terceros que también pueden utilizar cookies, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-light dark:text-muted-dark">
                  <li>Google Analytics para análisis de tráfico web</li>
                  <li>Redes sociales para integración de botones de compartir</li>
                  <li>Servicios de publicidad como Google AdSense</li>
                  <li>Servicios de chat en vivo y soporte</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">4. Control de Cookies</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Puede controlar y/o eliminar las cookies como desee. Para obtener más información, visite <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">aboutcookies.org</a>. Puede eliminar todas las cookies que ya están en su ordenador y configurar la mayoría de los navegadores para evitar que se coloquen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">5. Cambios en nuestra Política de Cookies</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Podemos actualizar nuestra Política de Cookies ocasionalmente. Le notificaremos sobre cualquier cambio publicando la nueva política en esta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">6. Contacto</h2>
                <p className="text-muted-light dark:text-muted-dark">
                  Si tiene alguna pregunta sobre nuestra Política de Cookies, contáctenos en:
                </p>
                <p className="mt-2">
                  <a href="mailto:privacy@gymtemplate.com" className="text-primary hover:text-primary/80 transition-colors">privacy@gymtemplate.com</a>
                </p>
              </section>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg mt-12">
                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-4">Configuración de Cookies</h3>
                <p className="text-muted-light dark:text-muted-dark mb-4">
                  Utilice el siguiente selector para elegir qué tipos de cookies desea permitir:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="essential" className="h-4 w-4 text-primary focus:ring-primary/50" defaultChecked disabled />
                    <label htmlFor="essential" className="ml-3 block text-sm font-medium text-foreground-light dark:text-foreground-dark">
                      Cookies Esenciales (siempre activas)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="performance" className="h-4 w-4 text-primary focus:ring-primary/50" defaultChecked />
                    <label htmlFor="performance" className="ml-3 block text-sm font-medium text-foreground-light dark:text-foreground-dark">
                      Cookies de Rendimiento
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="functionality" className="h-4 w-4 text-primary focus:ring-primary/50" defaultChecked />
                    <label htmlFor="functionality" className="ml-3 block text-sm font-medium text-foreground-light dark:text-foreground-dark">
                      Cookies de Funcionalidad
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="advertising" className="h-4 w-4 text-primary focus:ring-primary/50" defaultChecked />
                    <label htmlFor="advertising" className="ml-3 block text-sm font-medium text-foreground-light dark:text-foreground-dark">
                      Cookies de Publicidad
                    </label>
                  </div>
                </div>
                <button className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Guardar Preferencias
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicy;