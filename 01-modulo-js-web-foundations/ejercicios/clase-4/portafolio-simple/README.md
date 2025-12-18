# 🎯 Ejercicio: Portafolio Simple

## 📖 Descripción del Ejercicio

En este ejercicio, crearás un **portafolio profesional** completo aplicando todos los conceptos de HTML5 y CSS3 vistos en la Clase 4.

Este es un proyecto práctico donde reforzarás:
- ✅ Estructura HTML semántica
- ✅ Selectores CSS
- ✅ Box Model
- ✅ Propiedades de diseño
- ✅ Flexbox y Grid
- ✅ Media Queries (Responsive Design)
- ✅ Transiciones y transformaciones
- ✅ Buenas prácticas de código

---

## 🎓 Objetivos de Aprendizaje

Al completar este ejercicio serás capaz de:

1. **Estructura HTML**: 
   - Crear un documento HTML bien estructurado y semántico
   - Utilizar etiquetas apropiadas para cada tipo de contenido
   - Organizar el contenido lógicamente

2. **Estilos CSS**:
   - Aplicar selectores CSS correctamente
   - Usar propiedades de diseño avanzadas
   - Implementar media queries para responsive design
   - Crear transiciones suaves

3. **Diseño UX**:
   - Crear interfaces atractivas y funcionales
   - Mejorar la experiencia del usuario
   - Aplicar buenas prácticas de accesibilidad

---

## 📁 Estructura del Proyecto

```
portafolio-simple/
├── index.html       # Estructura HTML
├── styles.css       # Estilos CSS
└── README.md       # Este archivo
```

---

## 🚀 Características Implementadas

### 1. **Navegación Fija**
- Menú sticky en la parte superior
- Enlaces que llevan a diferentes secciones
- Efecto hover en los enlaces

### 2. **Sección Hero**
- Banner de bienvenida con gradiente
- Tipografía destacada
- Botón de llamada a la acción

### 3. **Sección Acerca De**
- Tarjeta con información personal
- Layout flexbox para imagen + texto
- Lista de habilidades en grid

### 4. **Galería de Proyectos**
- Grid responsivo (3 columnas en desktop, 1 en móvil)
- Tarjetas con efecto hover
- Tags para tecnologías utilizadas

### 5. **Formulario de Contacto**
- Campos de formulario estilizados
- Información de contacto
- Enlaces a redes sociales

### 6. **Footer**
- Información de derechos de autor
- Estilos consistentes con el diseño

### 7. **Responsive Design**
- Adaptable a tablets (768px)
- Adaptable a móviles (480px)
- Menú responsive
- Navegación mejorada

---

## 📚 Conceptos HTML Utilizados

### Etiquetas Semánticas
```html
<nav>        <!-- Navegación principal -->
<header>     <!-- Encabezado de página -->
<main>       <!-- Contenido principal -->
<section>    <!-- Sección temática -->
<article>    <!-- Contenido independiente -->
<form>       <!-- Formulario -->
<footer>     <!-- Pie de página -->
```

### Atributos Importantes
- `id` - Para enlaces internos (#inicio, #proyectos)
- `class` - Para aplicar estilos CSS
- `href` - Para enlaces
- `placeholder` - En campos de formulario
- `required` - Para validación HTML

---

## 🎨 Conceptos CSS Utilizados

### Selectores
- Selectores de elemento: `p`, `h1`
- Selectores de clase: `.navbar`, `.boton-principal`
- Selectores de ID: `#inicio`, `#contacto`
- Combinadores: `div p`, `.contenedor > p`
- Pseudoclases: `:hover`, `:focus`, `:active`
- Pseudoelementos: `::after`

### Propiedades CSS

**Colores y Fondos**
```css
background-color: #f8f9fa;
color: #333;
background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
```

**Tipografía**
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 16px;
font-weight: bold;
line-height: 1.6;
```

**Espaciado**
```css
padding: 40px;
margin: 20px;
gap: 30px;
```

**Box Model**
```css
border: 1px solid #ddd;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
```

**Flexbox**
```css
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
```

**Grid**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 30px;
```

**Transiciones**
```css
transition: all 0.3s ease;
transform: translateY(-8px);
```

**Media Queries**
```css
@media (max-width: 768px) {
    /* Estilos para tablets */
}

@media (max-width: 480px) {
    /* Estilos para móviles */
}
```

---

## ✏️ Tareas Opcionales de Expansión

Después de completar el ejercicio, puedes intentar mejorar el portafolio:

### Nivel 1: Personalización Básica
- [ ] Cambiar los colores del sitio
- [ ] Modificar el contenido con tu información
- [ ] Agregar más proyectos
- [ ] Cambiar las fuentes

### Nivel 2: Mejoras de Diseño
- [ ] Agregar animaciones a elementos
- [ ] Crear nuevas secciones (servicios, testimonios)
- [ ] Mejorar los formularios
- [ ] Agregar iconos SVG

### Nivel 3: Funcionalidad
- [ ] Validar el formulario con JavaScript
- [ ] Hacer que los botones funcionen
- [ ] Agregar suavizado al scroll
- [ ] Crear efectos interactivos

### Nivel 4: Buenas Prácticas
- [ ] Optimizar imágenes
- [ ] Mejorar accesibilidad ARIA
- [ ] Agregar metaetiquetas SEO
- [ ] Minificar CSS

---

## 🔧 Cómo Usar Este Ejercicio

### 1. Estudiar el Código
- Abre `index.html` y observa la estructura
- Abre `styles.css` y estudia cómo se estilizan los elementos
- Relaciona el HTML con el CSS

### 2. Experimentar
- Modifica algunos valores CSS (colores, tamaños, espacios)
- Observa cómo cambia el resultado
- Prueba diferentes valores para entender las propiedades

### 3. Practicar
- Intenta replicar el diseño desde cero
- Crea variaciones del portafolio
- Personaliza con tu información

### 4. Verificar en Diferentes Dispositivos
- Abre en navegador y redimensiona
- Usa DevTools (F12) para ver responsive design
- Prueba en móvil si es posible

---

## 📚 Referencia de Propiedades CSS Utilizadas

| Propiedad | Uso | Ejemplo |
|-----------|-----|---------|
| `display` | Tipo de elemento | `flex`, `grid`, `block` |
| `grid-template-columns` | Columnas en grid | `repeat(auto-fit, minmax(320px, 1fr))` |
| `justify-content` | Alineación horizontal | `space-between`, `center` |
| `align-items` | Alineación vertical | `center`, `flex-start` |
| `padding` | Espacio interno | `40px`, `20px 30px` |
| `margin` | Espacio externo | `20px`, `0 auto` |
| `border-radius` | Esquinas redondeadas | `8px`, `50%` |
| `box-shadow` | Sombra | `0 4px 12px rgba(0,0,0,0.1)` |
| `transition` | Animación | `all 0.3s ease` |
| `transform` | Transformación | `translateY(-8px)`, `scale(0.98)` |
| `background` | Fondo | `linear-gradient(...)` |

---

## 🐛 Solución de Problemas

### El sitio no se ve bien en móvil
- Verifica que tengas la metaetiqueta viewport
- Revisa los media queries
- Prueba en DevTools con diferentes tamaños

### Los estilos no se aplican
- Asegúrate que el CSS esté linkeado correctamente
- Revisa la ruta del archivo
- Limpia el caché del navegador (Ctrl+Shift+R)

### El formulario no funciona
- Este ejercicio solo tiene HTML/CSS
- En Clase 5 aprenderás JavaScript para hacer funcional el formulario

---

## 🎯 Puntos Clave para Recordar

1. **Semántica HTML**: Usa las etiquetas correctas para cada contenido
2. **Selectores CSS**: Elige los selectores más específicos necesarios
3. **Responsive Design**: Siempre prueba en múltiples dispositivos
4. **Accesibilidad**: Asegúrate que el sitio sea navegable
5. **Rendimiento**: Mantén el código limpio y organizado

---

## 📖 Recursos Adicionales

- [MDN - HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN - CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [Codepen](https://codepen.io/) - Inspiración y ejemplos

---

## 🎓 Próximos Pasos

Después de dominar HTML y CSS:
- **Clase 5**: Aprenderás JavaScript para hacer el sitio interactivo
- **Clase 6**: Conectarás con APIs para datos dinámicos
- **Proyectos**: Crearás sitios web completos y funcionales

¡Sigue adelante y recuerda practicar con paciencia! 💪

---

**Última actualización**: 2024  
**Autor**: Academia DevSeniorCode  
**Nivel**: Principiante (Junior Developer)
