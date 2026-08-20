# Character Counter
**Es una pagina web desarrollada con react y vite para leer las cantidad de caracteres letras y oraciones de el texto que vos escribas**

## Tecnologias y Implementaciones Usadas
- **Frontend:** React,React-Router-Dom,Vite
- **Lenguajes:** HTML,CSS,JavaScript(JSX)
- **Control de Versiones y Deploy:** Git,GitHub,Vercel

## Desafios y Problemas Encontrados Trabajando En La Pagina

Durante el desarrollo de la aplicación surgieron algunos retos técnicos que se resolvieron de la siguiente manera:

1. **Captura y transferencia de datos mediante la URL (`useSearchParams`):**
   - *Problema:* Se necesitaba pasar un mensaje predefinido desde el enlace de navegación hacia la pantalla de Soporte sin perder la fluidez de la app.
   - *Solución:* Se estructuró el componente `<Link>` agregando parámetros de búsqueda (`?mensaje=...`) y se utilizó el hook `useSearchParams` dentro del componente `Soporte` para extraer dicho parámetro y asignarlo mediante `defaultValue` al `<textarea>`.

2. **Ajuste de pantalla en el mismo componente:**
   - *Problema:* Al hacer clic en el enlace de Soporte estando ya posicionados en esa misma pantalla, el navegador no refrescaba el parámetro por defecto.
   - *Solución:* Se comprendió el funcionamiento de las rutas en SPAs (Single Page Applications) asegurando que el flujo de navegación entre rutas raíz y secundarias mantenga el estado de los parámetros.

3. **Adaptabilidad del diseño (Responsive Design 320px - 2000px):**
   - *Problema:* Evitar que en pantallas grandes los formularios e inputs se estiraran en exceso, y que en celulares pequeños (320px) apareciera el scroll horizontal.
   - *Solución:* Se centralizaron los estilos aplicando reglas globales de `max-width`, contenedores con `margin: 0 auto` y `box-sizing: border-box` para garantizar que el contenido permanezca centrado y responsivo.


## Estructura del Proyecto

```text
src/
├── componentes/
│   ├── Customslink.jsx   # Barra de navegación con Query Params
│   ├── Header.jsx        # Encabezado principal
│   └── ...
├── router-components/
│   ├── Normas.jsx        # Pantalla de Normativas
│   └── Soporte.jsx       # Pantalla de Soporte con lectura de URL
├── styles/               # Archivos CSS de estilos
└── App.jsx               # Configuración de rutas y layout principal