# 📚 Clase 4: Introducción a HTML y CSS

## 🎯 Objetivos de la Clase

Al finalizar esta clase, serás capaz de:

- ✅ Comprender la estructura básica de un documento HTML
- ✅ Utilizar las etiquetas HTML más comunes para estructurar contenido
- ✅ Aplicar selectores CSS para estilizar elementos
- ✅ Implementar propiedades CSS esenciales para el diseño
- ✅ Crear interfaces básicas combinando HTML y CSS

---

## 📋 Contenido de la Clase

### 1. Fundamentos de HTML

#### 🔍 Anatomía de un Tag HTML

Antes de profundizar en las etiquetas, es importante entender la estructura de un tag HTML:

```html
<a href="https://escuelanew.com">Visita mi Web</a>
```

**Componentes de un tag HTML:**

- 🏷️ **Elemento**: La etiqueta completa (`<a>...</a>`)
- 🚀 **Etiqueta de Apertura**: `<a href="https://escuelanew.com">`
  - **Nombre del Atributo**: `href`
  - **Valor del Atributo**: `"https://escuelanew.com"`
- 📝 **Contenido**: `Visita mi Web` (texto visible)
- 🔚 **Etiqueta de Cierre**: `</a>`

**Tipos de etiquetas:**
- **Etiquetas con contenido**: `<p>Texto</p>`, `<h1>Título</h1>`
- **Etiquetas auto-cerradas**: `<img src="imagen.jpg" />`, `<br />`, `<hr />`

#### 📋 Atributos Comunes

| Atributo | Descripción | Ejemplo |
|----------|-------------|---------|
| `id` | Identificador único | `<div id="contenedor">` |
| `class` | Clase CSS para estilos | `<p class="destacado">` |
| `style` | Estilos CSS inline | `<span style="color: red;">` |
| `title` | Tooltip informativo | `<img title="Descripción">` |

#### 🏗️ Estructura Básica de un Documento HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <h1>Bienvenido a mi sitio</h1>
        <nav>
            <a href="#inicio">Inicio</a>
            <a href="#acerca">Acerca de</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Mi Primer Artículo</h2>
            <p>Este es un párrafo con <strong>texto importante</strong> y <em>énfasis</em>.</p>
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </ul>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
```

**Elementos clave:**
- `<!DOCTYPE html>` - Define el tipo de documento
- `<meta charset="UTF-8">` - Codificación de caracteres
- `<meta name="viewport" ...>` - Responsive en móviles
- `<header>` - Encabezado principal
- `<main>` - Contenido principal
- `<footer>` - Pie de página
- `<article>`, `<section>` - Contenido semántico

#### 📝 Etiquetas HTML Principales con Ejemplos

**Encabezados y Texto:**
```html
<h1>Título Principal</h1>              <!-- Solo uno por página -->
<h2>Subtítulo Importante</h2>
<h3>Subtítulo Secundario</h3>
<p>Párrafo normal de texto.</p>
<span>Texto en línea sin salto</span>
<strong>Texto importante</strong>       <!-- Importancia semántica -->
<em>Texto enfatizado</em>              <!-- Énfasis semántico -->
```

**Listas:**
```html
<!-- Lista desordenada -->
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

<!-- Lista ordenada -->
<ol>
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>
```

**Enlaces e Imágenes:**
```html
<!-- Enlace simple -->
<a href="https://ejemplo.com">Haz clic aquí</a>

<!-- Enlace a sección interna -->
<a href="#seccion">Ir a la sección</a>

<!-- Imagen -->
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200">

<!-- Imagen con enlace -->
<a href="detalle.html">
    <img src="thumbnail.jpg" alt="Miniatura">
</a>
```

**Contenedores:**
```html
<div class="contenedor">          <!-- Contenedor genérico en bloque -->
    Contenido aquí
</div>

<section>                            <!-- Sección temática -->
    <h2>Mi Sección</h2>
    <p>Contenido de la sección...</p>
</section>

<article>                            <!-- Contenido independiente -->
    <h2>Artículo de Blog</h2>
    <p>Contenido del artículo...</p>
</article>
```

### 2. Fundamentos de CSS

#### 📖 Sintaxis Básica de CSS

```css
/* Comentario en CSS */

selector {
    propiedad: valor;
    otra-propiedad: valor;
}

/* Ejemplo real */
p {
    color: blue;
    font-size: 16px;
    margin: 10px;
}
```

#### 🎯 Tipos de Selectores (con Prioridad)

**1. Selector de Elemento (baja prioridad)**
```css
p {
    color: gray;
}

div {
    background-color: lightblue;
}
```

**2. Selector de Clase (media prioridad)**
```css
.destacado {
    color: red;
    font-weight: bold;
}

.principal {
    font-size: 24px;
}

/* HTML: <p class="destacado">Texto destacado</p> */
```

**3. Selector de ID (alta prioridad)**
```css
#encabezado {
    background-color: navy;
    color: white;
    padding: 20px;
}

/* HTML: <header id="encabezado">...</header> */
```

**4. Combinadores**
```css
/* Descendiente - todos los p dentro de div */
div p {
    color: blue;
}

/* Hijo directo - solo p hijos directos de div */
div > p {
    color: green;
}

/* Hermano adyacente - p inmediatamente después de h2 */
h2 + p {
    color: purple;
}

/* Hermanos en general - cualquier p después de h2 */
h2 ~ p {
    color: orange;
}
```

**5. Pseudoclases**
```css
/* Cuando pasas el mouse */
a:hover {
    color: orange;
    text-decoration: underline;
}

/* Enlace visitado */
a:visited {
    color: purple;
}

/* Elemento activo (al hacer clic) */
button:active {
    transform: scale(0.95);
}

/* Primer hijo */
li:first-child {
    font-weight: bold;
}

/* Último hijo */
li:last-child {
    border-bottom: none;
}

/* Elemento cuando recibe focus */
input:focus {
    border-color: blue;
    outline: 2px solid blue;
}
```

#### 🎨 Propiedades CSS Esenciales

**Colores y Fondo:**
```css
.caja {
    /* Texto */
    color: #ff0000;                    /* Formato hexadecimal */
    color: rgb(255, 0, 0);             /* RGB */
    color: rgba(255, 0, 0, 0.5);       /* RGBA con transparencia */
    color: red;                         /* Nombre del color */
    
    /* Fondo */
    background-color: lightyellow;
    background-image: url('fondo.jpg');
    background-size: cover;            /* Cubre todo el área */
    background-repeat: no-repeat;
    background-position: center;
}
```

**Tipografía:**
```css
body {
    font-family: 'Arial', Helvetica, sans-serif;  /* Fuentes fallback */
    font-size: 16px;
    font-weight: normal;                /* normal, bold, 700, etc. */
    line-height: 1.5;                   /* Altura de línea */
    letter-spacing: 0.05em;             /* Espaciado entre letras */
    text-align: center;                 /* left, right, center, justify */
}

h1 {
    font-size: 2.5rem;                  /* Relativo al tamaño base */
    font-weight: 900;
    text-transform: uppercase;          /* uppercase, lowercase, capitalize */
}
```

**Espaciado (Margin y Padding):**
```css
.contenedor {
    /* Margin - espacio fuera del elemento */
    margin: 20px;                        /* Todos los lados */
    margin: 10px 20px;                   /* Vertical | Horizontal */
    margin: 10px 20px 30px 40px;         /* Top | Right | Bottom | Left */
    margin-top: 15px;
    margin-bottom: 15px;
    
    /* Padding - espacio dentro del elemento */
    padding: 20px;                       /* Todos los lados */
    padding: 10px 20px;                  /* Vertical | Horizontal */
    padding: 10px 20px 30px 40px;        /* Top | Right | Bottom | Left */
}
```

**Dimensiones:**
```css
.caja {
    width: 300px;                       /* Ancho fijo */
    width: 80%;                         /* Ancho relativo */
    max-width: 1200px;                  /* Ancho máximo */
    min-width: 200px;                   /* Ancho mínimo */
    
    height: 200px;                      /* Alto fijo */
    min-height: 100px;                  /* Alto mínimo */
}
```

**Bordes:**
```css
.caja {
    /* Borde completo */
    border: 2px solid #333;
    border: 3px dashed red;
    border: 1px dotted gray;
    
    /* Bordes individuales */
    border-top: 2px solid black;
    border-right: 2px solid blue;
    border-bottom: 2px solid green;
    border-left: 2px solid yellow;
    
    /* Esquinas redondeadas */
    border-radius: 8px;
    border-radius: 50%;                 /* Círculo perfecto */
    
    /* Sombra */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}
```

#### 📦 El Box Model (Modelo de Caja)

```
┌────────────────────────────────────────┐
│         Margin (externo)            │
│    ┌──────────────────────────────┐    │
│    │   Border (borde)         │    │
│    │  ┌──────────────────────────┐  │    │
│    │  │ Padding (interno)  │  │    │
│    │  │  ┌──────────────────┐  │  │    │
│    │  │  │  Content     │  │  │    │
│    │  │  │ (contenido)  │  │  │    │
│    │  │  └──────────────┘  │  │    │
│    │  └──────────────────────┘  │    │
│    └──────────────────────────────┘    │
└────────────────────────────────────────┘
```

**Ejemplo práctico:**
```css
.tarjeta {
    width: 300px;
    padding: 20px;              /* Espacio dentro */
    border: 1px solid #ddd;     /* Borde */
    margin: 15px;               /* Espacio fuera */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    /* box-sizing controla cómo se calcula el ancho total */
    box-sizing: border-box;     /* width incluye padding y border */
}
```

#### 🎬 Display y Posicionamiento

**Display (cómo se muestra el elemento):**
```css
/* Block - toma todo el ancho disponible */
div {
    display: block;             /* Default para div, p, section */
    width: 100%;
}

/* Inline - solo toma el espacio necesario */
span {
    display: inline;            /* Default para span, a, strong */
}

/* Inline-block - híbrido */
img {
    display: inline-block;      /* Puede tener ancho/alto pero está en línea */
    width: 100px;
    height: 100px;
}

/* Flexbox - alineación flexible */
.menu {
    display: flex;              /* Contenedor flex */
    justify-content: space-between;  /* Distribuir horizontalmente */
    align-items: center;        /* Alinear verticalmente */
    gap: 10px;                  /* Espacio entre items */
}

.menu a {
    flex: 1;                    /* Crecer proporcionalmente */
}

/* Grid - malla 2D */
.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 columnas iguales */
    gap: 20px;                  /* Espacio entre items */
}

/* Hidden - oculto */
.oculto {
    display: none;              /* No se muestra ni toma espacio */
}
```

**Position (posicionamiento):**
```css
/* Static - default, flujo normal */
.elemento {
    position: static;           /* Default */
}

/* Relative - relativo a su posición normal */
.elemento {
    position: relative;
    top: 10px;                  /* 10px abajo de donde estaría */
    left: 20px;                 /* 20px a la derecha */
}

/* Absolute - relativo al padre posicionado */
.contenedor {
    position: relative;         /* Padre como referencia */
}

.elemento {
    position: absolute;
    top: 0;                     /* Pegado arriba */
    right: 0;                   /* Pegado a la derecha */
}

/* Fixed - relativo a la ventana */
.navbar {
    position: fixed;
    top: 0;                     /* Pegado arriba */
    left: 0;                    /* Pegado a la izquierda */
    width: 100%;
    z-index: 1000;              /* Estar encima de otros elementos */
}

/* Sticky - entre relative y fixed */
h2 {
    position: sticky;
    top: 0;                     /* Se pega cuando scrolleas */
}
```

#### 📱 Media Queries (Responsive)

```css
/* Estilos por defecto (móvil primero) */
body {
    font-size: 14px;
}

.contenedor {
    width: 100%;
    padding: 10px;
}

/* Tablets (768px en adelante) */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
    
    .contenedor {
        width: 90%;
        margin: 0 auto;
        padding: 20px;
    }
}

/* Desktop (1024px en adelante) */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
    }
    
    .contenedor {
        width: 960px;
        margin: 0 auto;
    }
}

/* Impresora */
@media print {
    .navbar {
        display: none;          /* Ocultar menú al imprimir */
    }
    
    body {
        color: black;           /* Asegurar legibilidad */
    }
}
```

### 3. Integración HTML + CSS

#### 🔗 Formas de Incluir CSS

**1. CSS Inline (NO RECOMENDADO)**
```html
<p style="color: red; font-size: 18px;">Texto rojo</p>
```
❌ Problema: Difícil de mantener, no reutilizable

**2. CSS Interno (Para desarrollo inicial)**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
        
        .destacado {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p>Párrafo normal</p>
    <p class="destacado">Párrafo destacado</p>
</body>
</html>
```
⚠️ Útil para aprender pero mezcla contenido y estilos

**3. CSS Externo (MEJOR PRÁCTICA)**
```html
<!-- HTML: index.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <p class="titulo">Mi página</p>
</body>
</html>
```

```css
/* CSS: estilos.css */
p.titulo {
    color: navy;
    font-size: 24px;
    margin-bottom: 10px;
}
```
✅ Ventajas: Separación de responsabilidades, reutilizable, cacheable

#### 🏗️ Ejemplo Completo: Tarjeta de Producto

**HTML:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarjeta de Producto</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor">
        <div class="tarjeta-producto">
            <img src="producto.jpg" alt="Laptop" class="imagen-producto">
            <h2 class="titulo-producto">Laptop Pro</h2>
            <p class="descripcion">Laptop de última generación con procesador rápido</p>
            
            <div class="caracteristicas">
                <span class="etiqueta">Intel i7</span>
                <span class="etiqueta">16GB RAM</span>
                <span class="etiqueta">512GB SSD</span>
            </div>
            
            <div class="precio-seccion">
                <p class="precio">$1,299</p>
                <button class="boton-comprar">Comprar Ahora</button>
            </div>
        </div>
    </div>
</body>
</html>
```

**CSS:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
}

.contenedor {
    max-width: 400px;
    margin: 0 auto;
}

.tarjeta-producto {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta-producto:hover {
    transform: translateY(-5px);            /* Efecto al pasar el mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.imagen-producto {
    width: 100%;
    height: 250px;
    object-fit: cover;                      /* Ajusta sin distorsionar */
}

.titulo-producto {
    font-size: 24px;
    color: #333;
    padding: 20px 20px 10px 20px;
    margin: 0;
}

.descripcion {
    color: #666;
    padding: 0 20px;
    font-size: 14px;
    line-height: 1.6;
}

.caracteristicas {
    display: flex;
    gap: 10px;
    padding: 15px 20px;
    flex-wrap: wrap;
}

.etiqueta {
    background-color: #e8f4f8;
    color: #0066cc;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
}

.precio-seccion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #eee;
}

.precio {
    font-size: 28px;
    font-weight: bold;
    color: #0066cc;
    margin: 0;
}

.boton-comprar {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.boton-comprar:hover {
    background-color: #0052a3;              /* Más oscuro al pasar mouse */
}

.boton-comprar:active {
    transform: scale(0.98);                 /* Efecto de click */
}

/* Responsive */
@media (max-width: 768px) {
    .contenedor {
        max-width: 100%;
    }
    
    .titulo-producto {
        font-size: 20px;
    }
}
```

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | Estándar | Estructura de contenido |
| **CSS3** | Estándar | Presentación y diseño |

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)

### Herramientas Útiles
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores

### Práctica Online
- [Codepen](https://codepen.io/) - Editor online
- [JSFiddle](https://jsfiddle.net/) - Playground web

---

## 📝 Notas Importantes

> **💡 Tip:** La semántica en HTML es crucial. Utiliza las etiquetas apropiadas para cada tipo de contenido, no solo por su apariencia visual.

> **⚠️ Recordatorio:** Siempre incluye el atributo `alt` en las imágenes para mejorar la accesibilidad.

> **🎨 Buena práctica:** Separa siempre la estructura (HTML) de la presentación (CSS) para mantener un código limpio y mantenible.

---

## 🚀 Preparación para la Siguiente Clase

En la **Clase 5** abordaremos:
- Manipulación del DOM con JavaScript
- Eventos y interactividad
- Conexión entre JavaScript y HTML/CSS

¡Asegúrate de practicar los conceptos de esta clase antes de continuar!

---

**Módulo:** JavaScript Junior Developer - Web Foundations & Coding Skills  
**Academia:** DevSeniorCode