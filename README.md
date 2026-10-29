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
webqa/
├── README.md
├── .gitignore
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── LOGO-1.webp
│   └── js/
│       ├── script.js
│       ├── plan-pruebas.js
│       └── formato-casos.js
├── components/
│   ├── navbar.html
│   ├── footer.html
│   └── scroll-top.html
├── pages/
│   ├── bibliografia.html
│   ├── formato-casos-prueba.html
│   ├── habilidades-qa.html
│   ├── java.html
│   ├── plan-pruebas-api.html
│   ├── qa-funcional-automatizador.html
│   ├── revision-codigo.html
│   ├── rol-qa.html
│   └── tipos-pruebas.html
└── test-data/
    └── casos-prueba.json
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

## Estado del proyecto

El sitio se encuentra en fase de presentación y documentación de contenido académico para la semana 2 del programa Eureka, con contenido ya integrado para QA, casos de prueba, plan de pruebas y componentes visuales funcionales para navegación y presentación.
