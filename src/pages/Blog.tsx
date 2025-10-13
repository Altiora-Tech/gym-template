import React from 'react';
import { BlogPost } from '../types';

const blogPostsData: BlogPost[] = [
  { id: 1, title: '5 Mitos Sobre la Pérdida de Peso Desmentidos', excerpt: 'Descubre la verdad detrás de los mitos más comunes y acelera tus resultados de forma segura.', imageUrl: 'https://i.ibb.co/27y6QB3P/pexels-annushka-ahuja-7991934.jpg', category: 'Nutrición', date: 'Oct 26, 2023' },
  { id: 2, title: 'La Importancia del Descanso para Ganar Músculo', excerpt: 'Entrenar es solo la mitad de la batalla. Aprende por qué el descanso es crucial para tu progreso.', imageUrl: 'https://i.ibb.co/PvYBL1Yt/pexels-sinileunen-5496591.jpg', category: 'Rutinas', date: 'Oct 22, 2023' },
  { id: 3, title: 'Recetas de Batidos de Proteína Post-Entrenamiento', excerpt: 'Deliciosas y efectivas recetas para recuperarte después de una sesión intensa en el gimnasio.', imageUrl: 'https://i.ibb.co/h1DDPrYB/pexels-jimmyelizarraras-28455336.jpg', category: 'Nutrición', date: 'Oct 18, 2023' },
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-md overflow-hidden group">
        <img 
            id="blog-image"
            name="blog-image"
            aria-label="Imagen blog"
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
        <div className="p-6">
            <p className="text-sm text-primary-DEFAULT font-semibold mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-3 hover:text-primary-DEFAULT transition-colors">
                <a href="#">{post.title}</a>
            </h3>
            <p className="text-muted-light dark:text-muted-dark text-sm mb-4">{post.excerpt}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{post.date}</p>
        </div>
    </div>
);


const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20 bg-background-light dark:bg-card-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Blog y Tips Fitness</h2>
                    <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Información valiosa para potenciar tu entrenamiento.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPostsData.map(post => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-slate-100 dark:bg-background-dark/50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">Suscríbete a nuestro boletín</h3>
                        <p className="text-muted-light dark:text-muted-dark mt-2 mb-6">Recibe los mejores tips y promociones directamente en tu email.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input type="email" placeholder="Tu correo electrónico" className="flex-grow px-4 py-3 rounded-md border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-700 text-foreground-light dark:text-foreground-dark focus:ring-2 focus:ring-primary-DEFAULT focus:outline-none" />
                            <button 
                                type="submit" 
                                name="Suscribirme a nuestro boletín"
                                id="Suscribirme a nuestro boletín"
                                aria-label="Suscribirme a nuestro boletín"
                                role="button"
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;