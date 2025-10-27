import React from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
    { src: 'https://i.ibb.co/N6H8V9vm/area-pesas.jpg', alt: 'Área de pesas', span: 'col-span-2' },
    { src: 'https://i.ibb.co/23RyzMrx/spinning.jpg', alt: 'Clase de spinning', span: 'row-span-2' },
    { src: 'https://i.ibb.co/NnxDWJJ4/cardio.jpg', alt: 'Zona de cardio' },
    { src: 'https://i.ibb.co/PZS7Lq1g/vestuarios.jpg', alt: 'Vestuarios modernos' },
    { src: 'https://i.ibb.co/GQ5znfQN/recepcion.jpg', alt: 'Recepción del gimnasio' },
    { src: 'https://i.ibb.co/wNm7L8Fq/area-nutricion.jpg', alt: 'Área de nutrición' },
]; 

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-slate-100 dark:bg-background-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Explora Nuestras Instalaciones</h2>
                    <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Un espacio diseñado para que alcances tus metas.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${image.span || ''}`}
                        >
                            <img
                                id="gallery-image"
                                name="gallery-image"
                                aria-label="Galería de imágenes del gimnasio"
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                style={{ minHeight: '250px' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium">{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Agenda tu Recorrido
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;