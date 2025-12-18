// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Valida que el peso sea un número válido
 * ENTRADA: valor del peso
 * PROCESO: verifica rango válido
 * SALIDA: boolean (true/false)
 */
function espesoValido(peso) {
    return peso > 0 && peso < 300;
}

/**
 * Valida que la altura sea un número válido
 * ENTRADA: valor de la altura
 * PROCESO: verifica rango válido
 * SALIDA: boolean (true/false)
 */
function esAlturaValida(altura) {
    return altura > 0.5 && altura < 2.5;
}

/**
 * Valida ambos valores
 * ENTRADA: peso y altura
 * PROCESO: valida ambos con las funciones anteriores
 * SALIDA: boolean (true/false)
 */
function sonDatosValidos(peso, altura) {
    return espesoValido(peso) && esAlturaValida(altura);
}

// ============================================
// FUNCIONES DE CÁLCULO
// ============================================

/**
 * Calcula el Índice de Masa Corporal
 * ENTRADA: peso (kg) y altura (m)
 * PROCESO: IMC = peso / (altura * altura)
 * SALIDA: número con valor del IMC
 */
function calcularValorIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}

/**
 * Obtiene la categoría basada en el valor de IMC
 * ENTRADA: valor numérico del IMC
 * PROCESO: compara con rangos establecidos
 * SALIDA: string con la categoría
 */
function obtenerCategoria(imc) {
    if (imc < 18.5) {
        return "Bajo Peso";
    } else if (imc < 25) {
        return "Peso Normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

/**
 * Obtiene el color basado en la categoría
 * ENTRADA: valor numérico del IMC
 * PROCESO: determina color según categoría
 * SALIDA: string con código de color
 */
function obtenerColor(imc) {
    if (imc < 18.5) {
        return "#3b82f6"; // Azul (Bajo Peso)
    } else if (imc < 25) {
        return "#10b981"; // Verde (Normal)
    } else if (imc < 30) {
        return "#f59e0b"; // Amarillo (Sobrepeso)
    } else {
        return "#ef4444"; // Rojo (Obesidad)
    }
}

// ============================================
// FUNCIÓN PRINCIPAL
// ============================================

/**
 * Función principal que coordina todo el proceso
 * Sigue el modelo EPS:
 * - ENTRADA: obtiene valores del formulario
 * - PROCESO: valida y calcula IMC
 * - SALIDA: muestra resultado
 */
function calcularIMC() {
    // ========== ENTRADA ==========
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    
    // Limpiar mensajes de validación previos
    document.getElementById('validacion-peso').textContent = '';
    document.getElementById('validacion-altura').textContent = '';
    
    // ========== VALIDACIÓN ==========
    let hayError = false;
    
    if (isNaN(peso) || !espesoValido(peso)) {
        document.getElementById('validacion-peso').textContent = 
            'Por favor, ingresa un peso válido (1-300 kg)';
        hayError = true;
    }
    
    if (isNaN(altura) || !esAlturaValida(altura)) {
        document.getElementById('validacion-altura').textContent = 
            'Por favor, ingresa una altura válida (0.5-2.5 m)';
        hayError = true;
    }
    
    if (hayError) {
        document.getElementById('resultado-seccion').style.display = 'none';
        return;
    }
    
    // ========== PROCESO ==========
    const imc = calcularValorIMC(peso, altura);
    const categoria = obtenerCategoria(imc);
    const color = obtenerColor(imc);
    
    // ========== SALIDA ==========
    mostrarResultado(peso, altura, imc, categoria, color);
}

/**
 * Muestra el resultado en la sección correspondiente
 * ENTRADA: peso, altura, IMC, categoría, color
 * PROCESO: actualiza elementos del DOM
 * SALIDA: visualización en la página
 */
function mostrarResultado(peso, altura, imc, categoria, color) {
    // Obtener elementos del DOM
    const resultadoSeccion = document.getElementById('resultado-seccion');
    const imcValor = document.getElementById('imc-valor');
    const imcCategoria = document.getElementById('imc-categoria');
    const pesoResultado = document.getElementById('peso-resultado');
    const alturaResultado = document.getElementById('altura-resultado');
    const imcResultado = document.getElementById('imc-resultado');
    
    // Actualizar contenido
    imcValor.textContent = imc;
    imcValor.style.color = color;
    
    imcCategoria.textContent = categoria;
    imcCategoria.style.backgroundColor = color + '20';
    imcCategoria.style.color = color;
    
    pesoResultado.textContent = peso;
    alturaResultado.textContent = altura;
    imcResultado.textContent = imc;
    
    // Mostrar sección de resultado
    resultadoSeccion.style.display = 'block';
    
    // Scroll suave hacia el resultado
    resultadoSeccion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Limpia el formulario y oculta resultados
 * Permite calcular nuevamente
 */
function limpiar() {
    // Limpiar inputs
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    
    // Ocultar resultado
    document.getElementById('resultado-seccion').style.display = 'none';
    
    // Limpiar validaciones
    document.getElementById('validacion-peso').textContent = '';
    document.getElementById('validacion-altura').textContent = '';
    
    // Scroll hacia el formulario
    document.querySelector('.formulario-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest'
    });
    
    // Enfocar el input de peso
    document.getElementById('peso').focus();
}

/**
 * Muestra u oculta la solución de un ejercicio
 * ENTRADA: id del elemento solución
 * PROCESO: toggle display
 * SALIDA: mostrar/ocultar elemento
 */
function mostrarSolucion(id) {
    const elemento = document.getElementById(id);
    
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Permitir calcular con Enter
document.addEventListener('DOMContentLoaded', function() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    
    pesoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularIMC();
        }
    });
    
    alturaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularIMC();
        }
    });
    
    // Limpiar validación mientras tipea
    pesoInput.addEventListener('input', function() {
        if (this.value) {
            document.getElementById('validacion-peso').textContent = '';
        }
    });
    
    alturaInput.addEventListener('input', function() {
        if (this.value) {
            document.getElementById('validacion-altura').textContent = '';
        }
    });
});

// ============================================
// EJEMPLOS DE USO (Descomenta para probar en consola)
// ============================================

/*
// PRUEBAS DE FUNCIONES

// Test 1: Persona con peso normal
console.log("Test 1: Persona de 75 kg y 1.75 m");
console.log("Peso válido:", espesoValido(75)); // true
console.log("Altura válida:", esAlturaValida(1.75)); // true
console.log("IMC:", calcularIMC(75, 1.75)); // 24.49
console.log("Categoría:", obtenerCategoria(24.49)); // Peso Normal

// Test 2: Persona con sobrepeso
console.log("\nTest 2: Persona de 90 kg y 1.75 m");
console.log("IMC:", calcularIMC(90, 1.75)); // 29.39
console.log("Categoría:", obtenerCategoria(29.39)); // Sobrepeso

// Test 3: Validación de datos inválidos
console.log("\nTest 3: Validación");
console.log("Peso 350 kg válido:", espesoValido(350)); // false
console.log("Altura 3 m válida:", esAlturaValida(3)); // false

// Test 4: Obtener color
console.log("\nTest 4: Colores");
console.log("Color IMC 17:", obtenerColor(17)); // Azul
console.log("Color IMC 22:", obtenerColor(22)); // Verde
console.log("Color IMC 27:", obtenerColor(27)); // Amarillo
console.log("Color IMC 32:", obtenerColor(32)); // Rojo
*/
