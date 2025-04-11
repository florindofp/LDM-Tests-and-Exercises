

# **Proyecto Final — Dashboard del Tiempo y Noticias (HTML, CSS, JS y APIs)** ☁️🖥️

### Duración estimada: 30 horas ⏳📅

### Módulo: Lenguaje de Marcas y Sistemas de gestión de la información🧩📘

---

### **Descripción general** 🌍📄

Vas a desarrollar una aplicación web compuesta por **al menos 5 páginas HTML interconectadas** que funcionen como un *dashboard* informativo. La web mostrará datos **en tiempo real** sobre el clima y noticias recientes, utilizando **APIs públicas**, e incluirá elementos de diseño atractivo y navegación funcional. 🧱📡🗂️

Este proyecto se irá realizando tanto en horario de clase como en horas de trabajo autónomo del alumnado. El objetivo es poner en práctica lo aprendido en HTML, CSS y JavaScript, así como el manejo de datos externos mediante APIs. 📚💻🛠️

---

### **Objetivos principales** 🎯📘

- Aplicar estructuras HTML semánticas y diseño responsive con CSS.
- Manipular el DOM y gestionar eventos con JavaScript.
- Integrar información dinámica de APIs externas.
- Organizar el proyecto en múltiples páginas HTML enlazadas entre sí.
- Documentar el desarrollo y presentar el proyecto con claridad.

---

### **Estructura mínima del sitio (5 páginas obligatorias)** 🗂️🌐

1. **`index.html`** 📊 — Página principal:

   - Debe mostrar un **resumen del tiempo actual por horas**.
   - Visualización del tiempo actual desglosado por horas específicas del día: **00:00h, 08:00h, 12:00h y 18:00h**, mostrando:
     - Temperatura máxima y mínima.
     - Velocidad del viento.
     - Probabilidad de precipitación.
     - Icono del estado del cielo (ej. soleado, nublado, lluvia).
   - Resumen de titulares de noticias.
   - **Debe incluir un menú de navegación visible** hacia las demás páginas.

2. **`clima.html`** 🌦️ — Página dedicada al clima:

   - Selector de ciudad/localización.
     - Cuando cambie el selector se debe actualizar la información correctamente.
     - El selector debe incluir al menos 4 ciudades.
   - Visualización del **tiempo actual desglosado por horas específicas del día**: **00:00h, 08:00h, 12:00h y 18:00h**, mostrando:
     - Temperatura máxima y mínima.
     - Velocidad del viento.
     - Probabilidad de precipitación.
     - Icono del estado del cielo (ej. soleado, nublado, lluvia).
   - Previsión meteorológica de los próximos 5 días, para cada día, incluyendo:
     - Temperatura máxima y mínima.
     - Velocidad del viento.
     - Probabilidad de precipitación.
     - Icono del estado del cielo.
   - Visualización de **alertas meteorológicas**, si las hubiera. Si no hay, mostrar mensaje:
     > *“No hay alertas meteorológicas para esta ubicación.”*

3. **`noticias.html`** 📰 — Página de noticias nacionales:

   - Mostrar **5 noticias recientes de España** usando la API de GNews.
   - Cada noticia debe incluir:
     - Imagen destacada.
     - Título.
     - Contenido o resumen.
     - Enlace a la noticia completa.
     - Fuente (medio de comunicación).

4. **`acerca.html`** 📘 — Página con un contenido muy parecido al `README.md`, incluyendo:
   - Descripción general del proyecto.
   - Objetivos del desarrollo.
   - APIs utilizadas.
   - Tecnologías empleadas (HTML, CSS, JavaScript, etc.).
   - Nombre del autor o autora del proyecto.

5. **`contacto.html`** 📬 — Página con un formulario de contacto simulado que debe incluir los siguientes campos mínimos:
   - Nombre
   - Email
   - Teléfono
   - Mensaje
   El formulario debe validar que **ninguno de los campos esté vacío**. Si todos los campos son válidos al enviar, se debe mostrar un mensaje con `alert("Formulario enviado con éxito")`.

---

### **APIs públicas obligatorias** 🌐🔌📊💾



A continuación se facilitan dos, pero se pueden usar cualquieras que necesites.

#### API del Clima — *WeatherAPI* 🌦️

- Documentación: [https://www.weatherapi.com/docs/](https://www.weatherapi.com/docs/)
- Registro: [https://www.weatherapi.com](https://www.weatherapi.com) — **requisito obligatorio** para obtener una API Key gratuita.
- **Endpoints obligatorios:**
  - `current.json` → Clima actual.
  - `forecast.json` → Previsión para los próximos 5 días.
- **Datos obligatorios por hora específica (00h, 08h, 12h, 18h):**
  - Temperatura máxima y mínima.
  - Velocidad del viento.
  - Probabilidad de precipitación.
  - Icono e información de la condición meteorológica.

---

#### API de Noticias — *GNews* 🗞️

- Documentación: [https://gnews.io/docs/](https://gnews.io/docs/)
- Registro: [https://gnews.io/dashboard](https://gnews.io/dashboard) — **API Key gratuita requerida**.
- Deben obtenerse 5 noticias recientes de España, en español.

---

### **Requisitos técnicos** 🛠️📋🧪💡

- HTML5 semántico, múltiples páginas enlazadas.
- CSS3 con diseño responsive (Flexbox, Grid o ambos).
- JavaScript para interactividad y consumo de APIs.
- Menú de navegación en todas las páginas.
- Clima por horas (00h, 08h, 12h, 18h) en `index.html` y `clima.html`.
- Previsión de 5 días con todos los datos meteorológicos.
- Visualización clara y completa de noticias.
- Tema claro/oscuro con posibilidad de cambio.
- Validación de formularios básica.
- `README.md` documentado con instrucciones, capturas y fuentes.

---

### **Criterios adicionales de evaluación** 🧩🔍✅⚙️

Además de los requisitos mencionados, se valorará:

- Uso de la librería **Bootstrap** para mejorar la maquetación y diseño.
- Código **ordenado, bien estructurado y con comentarios cuando sea necesario**.
- Ausencia de **errores o advertencias en la consola del navegador**.

⚠️ **Importante:** Cualquier proyecto que se detecte que proviene de una fuente externa (copiado de internet, plantillas no autorizadas, etc.) será invalidado. El profesorado podrá realizar **preguntas adicionales** al alumnado durante la presentación para comprobar la **autoría real del trabajo**.

---

### **Entrega final** 📦📝🎤📤

- Proyecto completo con estructura organizada y navegable.
- Documentación `README.md` detallada.
- Presentación oral o grabada defendiendo el trabajo realizado. 🎯📈✅



