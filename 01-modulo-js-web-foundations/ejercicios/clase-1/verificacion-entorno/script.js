// ============================================
// UTILIDADES
// ============================================

/**
 * Copia texto al portapapeles
 */
function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('✅ Comando copiado al portapapeles: ' + texto);
    }).catch(() => {
        alert('❌ Error al copiar al portapapeles');
    });
}

/**
 * Actualiza la barra de progreso y muestra/oculta la sección final
 */
function actualizarProgreso() {
    // Obtener todos los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Contar checkboxes marcados
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // Calcular porcentaje
    const porcentaje = Math.round((marcados / checkboxes.length) * 100);
    
    // Actualizar barra de progreso
    const barraProgreso = document.getElementById('progreso');
    const textoProgreso = document.getElementById('porcentaje');
    
    barraProgreso.style.width = porcentaje + '%';
    textoProgreso.textContent = porcentaje;
    
    // Mostrar/ocultar sección final
    const seccionCompleta = document.getElementById('seccion-completa');
    const seccionIncompleta = document.getElementById('seccion-incompleta');
    
    if (porcentaje === 100) {
        seccionCompleta.style.display = 'block';
        seccionIncompleta.style.display = 'none';
    } else {
        seccionCompleta.style.display = 'none';
        seccionIncompleta.style.display = 'block';
    }
    
    // Guardar progreso en localStorage
    guardarProgreso();
}

/**
 * Guarda el progreso en localStorage
 */
function guardarProgreso() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const estado = [];
    
    checkboxes.forEach((checkbox) => {
        estado.push({
            id: checkbox.id,
            checked: checkbox.checked
        });
    });
    
    localStorage.setItem('progreso-clase-1', JSON.stringify(estado));
}

/**
 * Carga el progreso desde localStorage
 */
function cargarProgreso() {
    const estadoGuardado = localStorage.getItem('progreso-clase-1');
    
    if (estadoGuardado) {
        const estado = JSON.parse(estadoGuardado);
        
        estado.forEach((item) => {
            const checkbox = document.getElementById(item.id);
            if (checkbox) {
                checkbox.checked = item.checked;
            }
        });
        
        // Actualizar progreso después de cargar
        actualizarProgreso();
    }
}

/**
 * Inicia los event listeners
 */
function inicializar() {
    // Cargar progreso guardado
    cargarProgreso();
    
    // Agregar listeners a todos los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', actualizarProgreso);
    });
    
    // Actualizar al cargar la página
    actualizarProgreso();
}

// ============================================
// INICIALIZACIÓN
// ============================================

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// ============================================
// COMANDOS DE EJEMPLO PARA LA CONSOLA
// ============================================

console.log('%c🚀 Bienvenido a la Verificación de Entorno', 'color: #0066cc; font-size: 18px; font-weight: bold;');
console.log('%c\nAquí puedes probar comandos de JavaScript:', 'color: #666; font-size: 14px;');

console.log(`
Ejemplos útiles:

1. Guardar progreso manualmente:
   localStorage.setItem('progreso-clase-1', JSON.stringify({...}));

2. Limpiar progreso guardado:
   localStorage.removeItem('progreso-clase-1');

3. Ver todas las herramientas:
   document.querySelectorAll('.seccion-herramienta h2');

4. Marcar todo como completado:
   document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
   actualizarProgreso();
`);
