# gym-template
GymFlex - Template para gimnasios componentes reutilizables
<div align="center">
  <h1>GymFlex - Modern Gym Website Template</h1>
  <p>Una plantilla moderna y completamente responsiva para gimnasios y centros de entrenamiento</p>
  <img src="public/logo.png" alt="GymFlex Logo" width="200">
</div>

## 🚀 Características Principales

- **Diseño Moderno y Atractivo** - Interfaz de usuario limpia y profesional
- **Totalmente Responsive** - Se adapta perfectamente a todos los dispositivos
- **Modo Oscuro** - Soporte nativo para modo oscuro
- **Rendimiento Optimizado** - Carga rápida y experiencia de usuario fluida
- **SEO Amigable** - Estructura optimizada para motores de búsqueda
- **Fácil de Personalizar** - Código modular y bien documentado

## 🛠️ Tecnologías Utilizadas

- ⚛️ React 18
- 🎨 Tailwind CSS
- 🔄 React Router v6
- 🌐 TypeScript
- 🚀 Vite
- 🔄 React Icons
- 🌓 Modo Oscuro Integrado

## 📂 Estructura del Proyecto

```
gym-template/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/            # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Páginas de la aplicación
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Classes.tsx
│   │   ├── Contact.tsx
│   │   ├── Cookies.tsx
│   │   ├── Home.tsx
│   │   ├── MembershipsPage.tsx
│   │   ├── Nutrition.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── Trainers.tsx
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Punto de entrada de la aplicación
├── .env                   # Variables de entorno
├── .gitignore
├── package.json
├── tailwind.config.js     # Configuración de Tailwind CSS
└── tsconfig.json          # Configuración de TypeScript
```

## 🚀 Empezando

### Requisitos Previos

- Node.js 16.14.0 o superior
- npm 8.3.0 o superior (o yarn 1.22.0 o superior)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/gym-template.git
   cd gym-template
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 🎨 Personalización

### Cambiar los colores

Puedes personalizar la paleta de colores modificando el archivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Azul por defecto
          dark: '#2563EB',
          light: '#60A5FA',
        },
        // ... más personalizaciones de color
      },
    },
  },
}
```

### Actualizar el contenido

El contenido de la página se puede modificar directamente en los archivos dentro de la carpeta `src/pages/`. Cada página es un componente React que puede ser editado según sea necesario.

## 📄 Páginas Incluidas

- 🏠 **Inicio** - Página principal con secciones destacadas
- 🏋️ **Clases** - Muestra las clases disponibles
- 👥 **Entrenadores** - Presentación del equipo de entrenadores
- 💰 **Membresías** - Planes y precios
- 🥗 **Nutrición** - Información sobre planes nutricionales
- 📰 **Blog** - Artículos y noticias
- 📞 **Contacto** - Formulario de contacto y ubicación
- 📜 **Términos y Condiciones** - Términos legales
- 🔒 **Política de Privacidad** - Información sobre privacidad
- 🍪 **Política de Cookies** - Gestión de cookies

## 📱 Compatibilidad

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Diseño responsive para móviles, tablets y escritorio
- Compatible con las últimas versiones estables de los navegadores

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) para más detalles.

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 📞 Contacto

Tu Nombre - [@tuusuario](https://twitter.com/tuusuario) - email@ejemplo.com

Enlace del Proyecto: [https://github.com/tuusuario/gym-template](https://github.com/tuusuario/gym-template)

## 🙏 Agradecimientos

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Y a todos los contribuyentes de código abierto que hacen posible este proyecto

---

<div align="center">
  Hecho con ❤️ por <a href="https://github.com/tuusuario">Tu Nombre</a>
</div>
