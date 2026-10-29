# Programa Eureka 2026 - QA Automatizador - Semana 2

Proyecto web estático desarrollado para presentar los contenidos de la segunda semana del programa Eureka, enfocado en QA Automatizador y calidad de software.

## Descripción

Este sitio tiene como objetivo explicar de forma clara y ordenada los conceptos clave del rol de QA, los fundamentos del lenguaje Java, los tipos de pruebas, la revisión de código y la diferencia entre QA funcional y QA automatizador.

También incluye un formato para registrar casos de prueba con enfoque en módulos/Epic e historias de usuario, junto con un plan de pruebas para una API REST y bibliografía relevante.

## Objetivos del proyecto

- Definir el rol de un QA dentro del proceso de desarrollo.
- Identificar habilidades esenciales para el trabajo de calidad.
- Explicar qué es Java y sus ventajas/desventajas para aplicaciones web.
- Mostrar aspectos importantes al validar código fuente.
- Detallar los tipos de pruebas aplicables en un proyecto de software.
- Explicar la diferencia entre QA funcional y QA automatizador.
- Presentar un formato para registrar casos de prueba.
- Documentar un plan de pruebas para una API REST.
- Brindar referencias bibliográficas útiles.

## Estructura del proyecto

```text
eureka-qa-week2/
├── README.md
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── script.js
│       ├── scroll-to-top.js
│       ├── plan-pruebas.js
│       └── formato-casos.js
├── test-data/
│   └── casos-prueba.json
├── pages/
│   ├── rol-qa.html
│   ├── habilidades-qa.html
│   ├── java.html
│   ├── revision-codigo.html
│   ├── tipos-pruebas.html
│   ├── qa-funcional-automatizador.html
│   ├── plan-pruebas-api.html
│   ├── formato-casos-prueba.html
│   ├── bibliografia.html
│   └── ...
└── .gitignore
```

## Contenido incluido

### Página principal
- `index.html`: inicio del proyecto con navegación a todas las temáticas.

### Páginas de contenido
- `rol-qa.html`: responde qué rol cumple un QA.
- `habilidades-qa.html`: describe las habilidades clave de un QA.
- `java.html`: explica Java, ventajas y desventajas para desarrollo web.
- `revision-codigo.html`: presenta aspectos para validar código fuente.
- `tipos-pruebas.html`: explica tipos de pruebas en desarrollo de software.
- `qa-funcional-automatizador.html`: diferencia entre QA funcional y QA automatizador.
- `plan-pruebas-api.html`: describe un plan de pruebas para una API REST.
- `formato-casos-prueba.html`: muestra una estructura para registrar casos de prueba.
- `bibliografia.html`: reúne referencias útiles.

## Cómo ejecutar localmente

También se puede abrir `index.html` directamente desde el navegador, pero no es la mejor opción para probar el sitio, ya que algunos navegadores pueden comportarse de forma distinta con rutas relativas o recursos externos.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Tailwind CSS (CDN)
- Sitio web estático

## Consideraciones

- El proyecto está pensado para ser una presentación estática sin backend.
- La estructura es compatible con GitHub Pages.
- Las rutas relativas están diseñadas para funcionar en un sitio desplegado.

## Actualizaciones recientes

- Se incorporó un plan de pruebas basado en la estructura real de la base de datos de usuarios, solicitudes y documentos.
- Se creó un archivo JSON centralizado en `test-data/casos-prueba.json` como fuente única de verdad para los casos de prueba.
- La vista de casos en `pages/plan-pruebas-api.html` consume ese JSON para renderizar la tabla sin duplicar información.
- La lógica del plan y los ejemplos de formato se movieron a archivos JavaScript dedicados: `assets/js/plan-pruebas.js` y `assets/js/formato-casos.js`.
- Se ajustó la plantilla de casos para que coincida con la estructura de QA pedida: ID, Módulo, Historia de usuario, Nombre, Prioridad, Precondiciones, Pasos, Resultado esperado y Estado.
- Se estandarizó el estado de todos los casos a `Pendiente`.
- Se normalizaron los tipos a `Funcional` y `No funcional` para mantener consistencia con el formato de prueba.
- Se corrigió el comportamiento global del botón de Scroll Top para que aparezca al hacer scroll en todas las páginas del sitio.
- Se ajustó la visual del botón para que coincida con el color de la navbar.
- Se dejó preparado el proyecto para ser desplegado en GitHub Pages como sitio estático.

## Estado del proyecto

El sitio se encuentra en fase de presentación y documentación de contenido académico para la semana 2 del programa Eureka, con contenido ya integrado para QA, casos de prueba, plan de pruebas y componentes visuales funcionales para navegación y presentación.
