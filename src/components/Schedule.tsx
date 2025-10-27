import React from 'react';
import { Link } from 'react-router-dom';
import { ScheduleEntry } from '../types';

const scheduleData: ScheduleEntry[] = [
  { time: '07:00', Lunes: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Martes: { name: 'HIIT', trainer: 'Sofía M.', category: 'Cardio' }, Miércoles: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Jueves: { name: 'HIIT', trainer: 'Sofía M.', category: 'Cardio' }, Viernes: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Sabado: null },
  { time: '08:00', Lunes: null, Martes: { name: 'Yoga', trainer: 'Carlos V.', category: 'Flexibilidad' }, Miércoles: null, Jueves: { name: 'Yoga', trainer: 'Carlos V.', category: 'Flexibilidad' }, Viernes: null, Sabado: { name: 'Yoga', trainer: 'Carlos V.', category: 'Flexibilidad' } },
  { time: '09:00', Lunes: { name: 'Funcional', trainer: 'David R.', category: 'Fuerza' }, Martes: null, Miércoles: { name: 'Funcional', trainer: 'David R.', category: 'Fuerza' }, Jueves: null, Viernes: { name: 'Funcional', trainer: 'David R.', category: 'Fuerza' }, Sabado: null },
  { time: '17:00', Lunes: null, Martes: { name: 'Pilates', trainer: 'Carlos V.', category: 'Flexibilidad' }, Miércoles: null, Jueves: { name: 'Pilates', trainer: 'Carlos V.', category: 'Flexibilidad' }, Viernes: null, Sabado: { name: 'HIIT', trainer: 'Sofía M.', category: 'Cardio' } },
  { time: '18:00', Lunes: { name: 'Spinning', trainer: 'Sofía M.', category: 'Cardio' }, Martes: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Miércoles: { name: 'Spinning', trainer: 'Sofía M.', category: 'Cardio' }, Jueves: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Viernes: { name: 'Spinning', trainer: 'Sofía M.', category: 'Cardio' }, Sabado: null },
  { time: '19:00', Lunes: null, Martes: { name: 'Yoga', trainer: 'Carlos V.', category: 'Flexibilidad' }, Miércoles: { name: 'Spinning', trainer: 'Sofía M.', category: 'Cardio' }, Jueves: { name: 'Yoga', trainer: 'Carlos V.', category: 'Flexibilidad' }, Viernes: null, Sabado: null },
  { time: '20:00', Lunes: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Martes: { name: 'HIIT', trainer: 'Sofía M.', category: 'Cardio' }, Miércoles: { name: 'Crossfit', trainer: 'Ana L.', category: 'Fuerza' }, Jueves: { name: 'HIIT', trainer: 'Sofía M.', category: 'Cardio' }, Viernes: null, Sabado: null },
];

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];

const categoryColors: { [key: string]: string } = {
    Cardio: 'bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-400',
    Fuerza: 'bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-400',
    Flexibilidad: 'bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-400',
};


const Schedule: React.FC = () => {
    return (
        <section id="schedule" className="py-20 bg-background-light dark:bg-card-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-light dark:text-foreground-dark">Horario de Clases</h2>
                    <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Planifica tu semana y no te pierdas ninguna clase.</p>
                </div>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full min-w-[700px] text-center">
                        <thead className="bg-slate-200 dark:bg-background-dark">
                            <tr>
                                <th className="p-4 font-semibold text-sm">Hora</th>
                                {days.map(day => (
                                    <th key={day} className="p-4 font-semibold text-sm">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-card-light dark:bg-card-dark">
                            {scheduleData.map(({ time, ...rest }) => (
                                <tr key={time} className="border-b border-border-light dark:border-border-dark">
                                    <td className="p-4 font-bold text-primary-DEFAULT">{time}</td>
                                    {days.map(day => {
                                        const classInfo = rest[day];
                                        if (typeof classInfo === 'object' && classInfo !== null) {
                                            return (
                                                <td key={day} className="p-2">
                                                    <div className={`p-3 rounded-lg border-l-4 ${categoryColors[classInfo.category] || ''} transform hover:scale-105 transition-transform duration-200`}>
                                                        <p className="font-bold text-sm">{classInfo.name}</p>
                                                        <p className="text-xs">{classInfo.trainer}</p>
                                                    </div>
                                                </td>
                                            );
                                        }
                                        return <td key={day} className="p-4"></td>;
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-8">
                    <Link to="/contact" className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Reserva tu Clase Ahora
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Schedule;