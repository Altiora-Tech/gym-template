import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from './icons';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-card-dark dark:bg-black text-muted-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Quote */}
                    <div className="md:col-span-1">
                        <a href="#inicio" className="text-3xl font-bold text-primary-DEFAULT mb-4 inline-block">
                            GymFlex
                        </a>
                        <p className="italic text-slate-400">"Tu cuerpo puede lograrlo. Convéncete tú."</p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-foreground-dark uppercase tracking-wider mb-4">Accesos Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="/classes" className="hover:text-primary-DEFAULT transition-colors">Clases</a></li>
                            <li><a href="/schedule" className="hover:text-primary-DEFAULT transition-colors">Horarios</a></li>
                            <li><a href="/blog" className="hover:text-primary-DEFAULT transition-colors">Blog</a></li>
                            <li><a href="/trainers" className="hover:text-primary-DEFAULT transition-colors">Entrenadores</a></li>
                            <li><a href="/memberships" className="hover:text-primary-DEFAULT transition-colors">Membresías</a></li>
                           
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-foreground-dark uppercase tracking-wider mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="/privacy" className="hover:text-primary-DEFAULT transition-colors">Política de Privacidad</a></li>
                            <li><a href="/terms" className="hover:text-primary-DEFAULT transition-colors">Términos y Condiciones</a></li>
                            <li><a href="/cookies" className="hover:text-primary-DEFAULT transition-colors">Política de Cookies</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-foreground-dark uppercase tracking-wider mb-4">Contacto y Horarios</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>L-V: 6:00 - 23:00</li>
                            <li>S-D: 8:00 - 20:00</li>
                            <li className="pt-2"><a href="tel:+1234567890" className="hover:text-primary-DEFAULT">+1 (234) 567-890</a></li>
                        </ul>
                         <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-slate-400 hover:text-primary-DEFAULT transition-colors"><FiFacebook size={24} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary-DEFAULT transition-colors"><FiTwitter size={24} /></a>
                            <a href="#" className="text-slate-400 hover:text-primary-DEFAULT transition-colors"><FiInstagram size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-border-dark pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} GymFlex. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;