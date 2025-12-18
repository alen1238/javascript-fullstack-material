# 🎯 Clase 5: Interactividad con el DOM

Conceptos de DOM | Aprender los conceptos fundamentales de manipulación del DOM |

---

## �📚 Objetivos de la Clase

- Comprender qué es el DOM (Document Object Model)
- Aprender a seleccionar elementos HTML con JavaScript
- Modificar contenido y atributos de elementos
- Gestionar eventos del usuario
- Crear páginas web interactivas y dinámicas
- Implementar temas oscuro y claro en aplicaciones web

---
## 🧠 Conceptos Clave

### ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación estructurada del documento HTML que permite a JavaScript interactuar con los elementos de la página web.

```javascript
// El DOM representa la página como un árbol de objetos
document
  ├── html
      ├── head
      │   ├── title
      │   └── meta
      └── body
          ├── h1
          ├── p
          └── button
```

### Selección de Elementos

#### Métodos principales para seleccionar elementos:

```javascript
// Por ID
const elemento = document.getElementById('miId');

// Por clase (devuelve el primero)
const elemento = document.querySelector('.miClase');

// Por clase (devuelve todos)
const elementos = document.querySelectorAll('.miClase');

// Por etiqueta
const elementos = document.getElementsByTagName('p');

// Selector CSS avanzado
const elemento = document.querySelector('#contenedor .item:first-child');
```

### Modificación de Contenido

```javascript
// Cambiar texto
elemento.textContent = 'Nuevo texto';

// Cambiar HTML interno
elemento.innerHTML = '<strong>Texto en negrita</strong>';

// Modificar atributos
elemento.setAttribute('class', 'nueva-clase');
elemento.src = 'nueva-imagen.jpg';

// Modificar estilos
elemento.style.color = 'red';
elemento.style.fontSize = '20px';
```

### Gestión de Eventos

```javascript
// Agregar event listener
button.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});

// Event listener con arrow function
button.addEventListener('click', () => {
    console.log('¡Botón clickeado!');
});

// Eventos comunes
elemento.addEventListener('mouseover', manejarMouseOver);
elemento.addEventListener('keydown', manejarTecla);
formulario.addEventListener('submit', manejarEnvio);
```

### Manipulación de Clases CSS

```javascript
// Agregar una clase
elemento.classList.add('activo');

// Eliminar una clase
elemento.classList.remove('inactivo');

// Alternar una clase
elemento.classList.toggle('visible');

// Verificar si tiene una clase
if (elemento.classList.contains('especial')) {
    console.log('Tiene la clase especial');
}

// Reemplazar una clase por otra
elemento.classList.replace('viejo-estilo', 'nuevo-estilo');
```

### Creación y Eliminación de Elementos

```javascript
// Crear un nuevo elemento
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Contenido del nuevo elemento';
nuevoDiv.classList.add('mi-clase');

// Agregar al DOM
contenedor.appendChild(nuevoDiv);
contenedor.insertBefore(nuevoDiv, elemento);

// Clonar un elemento
const clon = elemento.cloneNode(true); // true = copia profunda

// Eliminar un elemento
elemento.remove();
elemento.parentNode.removeChild(elemento);
```

### Navegación por el DOM (DOM Traversal)

```javascript
// Acceder a elementos relacionados
elemento.parentElement;          // Elemento padre
elemento.children;               // Hijos directos
elemento.firstChild;             // Primer hijo (puede ser nodo de texto)
elemento.lastChild;              // Último hijo
elemento.nextElementSibling;     // Siguiente elemento hermano
elemento.previousElementSibling; // Elemento hermano anterior

// Ejemplo práctico
const padre = elemento.parentElement;
const hermanos = padre.children;
```

### Manipulación de Atributos

```javascript
// Obtener atributo
const valor = elemento.getAttribute('data-id');

// Establecer atributo
elemento.setAttribute('data-id', '123');
elemento.setAttribute('disabled', 'disabled');

// Eliminar atributo
elemento.removeAttribute('disabled');

// Verificar si tiene atributo
if (elemento.hasAttribute('data-especial')) {
    console.log('Tiene atributo data-especial');
}

// Acceso directo a atributos comunes
elemento.id = 'nuevo-id';
elemento.title = 'Información';
elemento.href = 'https://ejemplo.com';
```

### Propiedades y Métodos Útiles del DOM

```javascript
// Propiedades de dimensiones y posición
elemento.offsetWidth;      // Ancho total (incluye border)
elemento.offsetHeight;     // Alto total
elemento.clientWidth;      // Ancho sin border
elemento.clientHeight;     // Alto sin border
elemento.scrollTop;        // Desplazamiento vertical
elemento.scrollLeft;       // Desplazamiento horizontal

// Obtener información
elemento.innerHTML;        // HTML interno
elemento.textContent;      // Texto sin HTML
elemento.outerHTML;        // HTML del elemento incluido

// Métodos de búsqueda avanzada
elemento.querySelector('selector');      // Primer coincidencia
elemento.querySelectorAll('selector');   // Todas coincidencias
```

### Validación y Manipulación de Formularios

```javascript
// Acceder a valores de formularios
const input = document.getElementById('miInput');
const valor = input.value;

// Validar contenido
if (input.value.trim() === '') {
    console.log('El campo está vacío');
}

// Modificar estado de inputs
input.disabled = false;
input.readOnly = true;
input.required = true;

// Obtener todos los datos del formulario
const formulario = document.getElementById('miFormulario');
const datos = new FormData(formulario);

// Acceder a datos de formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(new FormData(formulario));
});
```

### Eventos Avanzados

```javascript
// Event Delegation - Manejar eventos en elementos creados dinámicamente
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('boton')) {
        console.log('Clic en un botón dentro del contenedor');
    }
});

// Acceder a información del evento
elemento.addEventListener('click', (evento) => {
    evento.preventDefault();           // Evitar comportamiento por defecto
    evento.stopPropagation();          // Detener propagación del evento
    console.log(evento.target);        // Elemento que disparó el evento
    console.log(evento.currentTarget); // Elemento que escucha el evento
    console.log(evento.type);          // Tipo de evento (click, mouseover, etc)
    console.log(evento.clientX);       // Posición X del mouse
    console.log(evento.clientY);       // Posición Y del mouse
});

// Eventos de teclado
document.addEventListener('keydown', (e) => {
    console.log('Tecla presionada:', e.key);
    if (e.key === 'Enter') {
        console.log('Se presionó Enter');
    }
});

// Eventos de ratón
elemento.addEventListener('mouseenter', () => console.log('Mouse entra'));
elemento.addEventListener('mouseleave', () => console.log('Mouse sale'));
elemento.addEventListener('mousedown', () => console.log('Mouse presionado'));
elemento.addEventListener('mouseup', () => console.log('Mouse liberado'));
```

### Estilos Dinámicos

```javascript
// Modificar estilos directos
elemento.style.backgroundColor = '#ff0000';
elemento.style.fontSize = '18px';
elemento.style.display = 'none';

// Usar variables CSS
const root = document.documentElement;
root.style.setProperty('--color-primario', '#3498db');
root.style.setProperty('--espaciado', '20px');
```

### Búsqueda y Filtrado de Elementos

```javascript
// Buscar dentro de un elemento específico
const contenedor = document.getElementById('contenedor');
const items = contenedor.querySelectorAll('.item');

// Filtrar elementos
const itemsActivos = Array.from(items).filter(item => 
    item.classList.contains('activo')
);

// Encontrar un elemento específico
const primerItem = items[0];
const ultimoItem = items[items.length - 1];

// Búsqueda con condiciones
const elemento = Array.from(items).find(item => 
    item.dataset.id === '5'
);
```

### Dark Mode y Light Mode

```javascript
// Detectar preferencia del sistema
const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Cambiar tema
const root = document.documentElement;
root.style.setProperty('--color-fondo', '#1a1a1a');
root.style.setProperty('--color-texto', '#ffffff');

// Guardar preferencia en localStorage
localStorage.setItem('tema', 'oscuro');
const temaSguardado = localStorage.getItem('tema');

// Cambio dinámico de tema
function cambiarTema(tema) {
    document.body.classList.remove('claro', 'oscuro');
    document.body.classList.add(tema);
    localStorage.setItem('tema-activo', tema);
}

// Aplicar tema guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema-activo') || 'claro';
    cambiarTema(temaGuardado);
});
```

### Manipulación de HTML y Contenido

```javascript
// Diferencia entre innerHTML, textContent y outerHTML
const elemento = document.getElementById('demo');

// innerHTML: cambiar contenido HTML
elemento.innerHTML = '<p>Nuevo párrafo</p>';

// textContent: cambiar solo texto (más seguro contra XSS)
elemento.textContent = 'Solo texto';

// outerHTML: reemplazar el elemento completo
elemento.outerHTML = '<div>Nuevo contenedor</div>';

// insertAdjacentHTML: insertar HTML en posiciones específicas
elemento.insertAdjacentHTML('beforebegin', '<h2>Antes del elemento</h2>');
elemento.insertAdjacentHTML('afterbegin', '<span>Inicio</span>');
elemento.insertAdjacentHTML('beforeend', '<span>Final</span>');
elemento.insertAdjacentHTML('afterend', '<h2>Después del elemento</h2>');

// Método seguro para contatenación de HTML
const contenido = '<strong>' + nombreVariable + '</strong>';
elemento.textContent = nombreVariable; // Más seguro
```

---

## 🏆 Mejores Prácticas en Manipulación del DOM

### 1. Cachear Elementos Seleccionados
```javascript
// ❌ Mal: seleccionar múltiples veces
for (let i = 0; i < 1000; i++) {
    document.getElementById('contador').textContent = i;
}

// ✅ Bien: guardar referencia
const contador = document.getElementById('contador');
for (let i = 0; i < 1000; i++) {
    contador.textContent = i;
}
```

### 2. Usar Event Delegation
```javascript
// ❌ Mal: agregar listener a cada elemento
items.forEach(item => {
    item.addEventListener('click', handleClick);
});

// ✅ Bien: agregar listener al contenedor
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        handleClick(e);
    }
});
```

### 3. Minimizar Repintes y Reflows
```javascript
// ❌ Mal: múltiples cambios de estilo
elemento.style.left = '10px';
elemento.style.top = '20px';
elemento.style.width = '100px';

// ✅ Bien: un solo cambio
elemento.style.cssText = 'left: 10px; top: 20px; width: 100px;';

// O usar classList
elemento.classList.add('nuevo-estilo');
```

### 4. Usar textContent en lugar de innerHTML cuando sea posible
```javascript
// ✅ Más seguro y rápido
elemento.textContent = 'Texto simple';

// ❌ Evitar cuando no necesitas HTML
elemento.innerHTML = 'Texto simple'; // Más lento y puede haber XSS
```

### 5. Esperar a que el DOM esté Listo
```javascript
// ✅ Bien
document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes acceder a todos los elementos
});

// O en archivos scripts al final del body
```

---

## 📖 Recursos Adicionales

- [MDN - Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- [MDN - Eventos](https://developer.mozilla.org/es/docs/Web/Events)
- [JavaScript DOM Manipulation](https://www.w3schools.com/js/js_htmldom.asp)

---

> **Próxima clase**: Maquetación Avanzada con CSS - Flexbox y Grid para layouts complejos