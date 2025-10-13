import React, { useState } from 'react';
import { Testimonial } from '../types';
import { FiChevronLeft, FiChevronRight, FiStar } from './icons';

const testimonialsData: Testimonial[] = [
  { id: 1, name: 'Laura Gómez', quote: '¡Bajé 10 kg en 3 meses!', story: 'Gracias al plan HIIT y el apoyo constante de los entrenadores, logré metas que creía imposibles. ¡Mi energía y confianza están por las nubes!', rating: 5, beforeImage: 'https://i.ibb.co/Z6zxGf16/antes1.jpg', afterImage: 'https://i.ibb.co/BKrgTxxQ/despeues1.jpg' },
  { id: 2, name: 'Juan Pérez', quote: 'Gané masa muscular y definición.', story: 'El programa de fuerza y la guía nutricional fueron clave. El ambiente en GymFlex es increíblemente motivador.', rating: 5, beforeImage: 'https://i.ibb.co/Xx8Rmys5/antes2.jpg', afterImage: 'https://i.ibb.co/QFyJzhQX/despues2.jpg' },
  { id: 3, name: 'Elena Rodriguez', quote: 'El yoga cambió mi vida.', story: 'No solo mejoré mi flexibilidad, sino que encontré un espacio para desconectar y reducir el estrés. Los instructores son maravillosos.', rating: 5, beforeImage: 'https://i.ibb.co/k2VCTn0j/antes3.jpg', afterImage: 'https://i.ibb.co/4nJfWpsn/despues3.jpg' },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-accent-DEFAULT">
        {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < rating ? 'fill-current' : 'text-slate-300 dark:text-slate-600'} />
        ))}
    </div>
);


const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(i => (i === 0 ? testimonialsData.length - 1 : i - 1));
    const next = () => setCurrentIndex(i => (i === testimonialsData.length - 1 ? 0 : i + 1));
    
    const { name, quote, story, rating, beforeImage, afterImage } = testimonialsData[currentIndex];

    return (
        <section id="testimonials" className="py-20 bg-background-light dark:bg-card-dark text-foreground-light dark:text-foreground-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Historias de Éxito Reales</h2>
                    <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Nuestros miembros son nuestra mayor inspiración.</p>
                </div>

                <div className="relative max-w-4xl mx-auto bg-slate-100 dark:bg-background-dark/50 rounded-lg shadow-xl p-8 md:p-12 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center space-x-4">
                            <div className="text-center">
                                <img 
                                    id="before-image"
                                    name="before-image"
                                    aria-label="Imagen antes de la transformación"
                                    src={beforeImage} 
                                    alt="Antes" 
                                    className="rounded-lg shadow-md w-40 h-40 object-cover" />
                                <p className="mt-2 font-semibold text-sm text-muted-light dark:text-muted-dark">Antes</p>
                            </div>
                            <div className="text-center">
                                <img 
                                    id="after-image"
                                    name="after-image"
                                    aria-label="Imagen después de la transformación"
                                    src={afterImage} 
                                    alt="Después" 
                                    className="rounded-lg shadow-md w-40 h-40 object-cover" />
                                <p className="mt-2 font-semibold text-sm text-primary-DEFAULT">Después</p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <Rating rating={rating} />
                            <h3 className="text-2xl font-bold mt-4">"{quote}"</h3>
                            <p className="text-muted-light dark:text-muted-dark mt-2 mb-4">{story}</p>
                            <p className="font-bold text-lg text-primary-DEFAULT">{name}</p>
                        </div>
                    </div>
                     {/* Navigation */}
                    <button 
                        onClick={prev} 
                        aria-label="Previous Testimonial"
                        id="prev-testimonial"
                        name="prev-testimonial"
                        type="button"
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-card-light/50 dark:bg-card-dark/50 hover:bg-card-light dark:hover:bg-slate-700 rounded-full p-2 transition text-foreground-light dark:text-foreground-dark">
                        <FiChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={next} 
                        aria-label="Next Testimonial"
                        id="next-testimonial"
                        name="next-testimonial"
                        type="button"
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-card-light/50 dark:bg-card-dark/50 hover:bg-card-light dark:hover:bg-slate-700 rounded-full p-2 transition text-foreground-light dark:text-foreground-dark">
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;