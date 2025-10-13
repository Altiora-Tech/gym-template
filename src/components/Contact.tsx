import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FaWhatsapp } from './icons';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-primary-DEFAULT/10 text-primary-DEFAULT rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-bold text-foreground-light dark:text-foreground-dark">{title}</h4>
      <div className="text-muted-light dark:text-muted-dark">{content}</div>
    </div>
  </div>
);


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Ponte en Contacto</h2>
          <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">¿Tienes preguntas? Estamos aquí para ayudarte.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 mt-6 text-foreground-light dark:text-foreground-dark">Envíanos un Mensaje</h3>
            <form className="space-y-10">
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input type="text" id="name" placeholder="Tu Nombre" className="w-full px-4 py-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-foreground-light dark:text-foreground-dark focus:ring-2 focus:ring-primary-DEFAULT focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Tu Correo Electrónico" className="w-full px-4 py-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-foreground-light dark:text-foreground-dark focus:ring-2 focus:ring-primary-DEFAULT focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea id="message" rows={5} placeholder="Tu Mensaje" className="w-full px-4 py-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-foreground-light dark:text-foreground-dark focus:ring-2 focus:ring-primary-DEFAULT focus:outline-none"></textarea>
              </div>
              <button 
                type="submit"
                name="submit"
                aria-label="Enviar Mensaje"
                id="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-6">
                <ContactInfoItem icon={<FiMapPin size={24} />} title="Dirección" content={<p>Av. Siempreviva 742<br />Springfield, USA</p>} />
                <ContactInfoItem icon={<FiPhone size={24} />} title="Teléfono" content={<a href="tel:+1234567890" className="hover:text-primary-DEFAULT">+1 (234) 567-890</a>} />
                <ContactInfoItem icon={<FaWhatsapp size={24} />} title="WhatsApp" content={<a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary-DEFAULT">Chatea con nosotros</a>} />
                <ContactInfoItem icon={<FiClock size={24} />} title="Horarios" content={<p>Lunes - Viernes: 6am - 10pm<br />Sábados y Domingos: 8am - 8pm</p>} />
            </div>
            <div className="h-64 bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059695193!2d-74.25986541104443!3d40.69714941926217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1678886573887!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;