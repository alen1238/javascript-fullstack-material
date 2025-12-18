# 🧮 Ejercicio: Calculadora de IMC - Clase 2

## 📖 Descripción

Este ejercicio te enseña los **fundamentos de JavaScript** a través de una calculadora de Índice de Masa Corporal (IMC) que aplica el modelo algorítmico **EPS** (Entrada → Proceso → Salida).

Es un ejercicio completo que combina conceptos de variables, tipos de datos, operadores, funciones y validación, todo contextualizado en una aplicación práctica.

---

## 🎯 Objetivos de Aprendizaje

Al completar este ejercicio serás capaz de:

### 1. **Comprender Algoritmos (EPS)**
- ✅ Entender la estructura Entrada → Proceso → Salida
- ✅ Identificar cada fase en un algoritmo real
- ✅ Aplicar el modelo EPS en tus propios programas

### 2. **Usar Variables y Tipos de Datos**
- ✅ Declarar variables con `let` y `const`
- ✅ Entender diferentes tipos de datos en JavaScript
- ✅ Usar `typeof` para verificar tipos

### 3. **Operar con Operadores**
- ✅ Utilizar operadores aritméticos (+, -, *, /)
- ✅ Aplicar operadores de comparación (>, <, ===)
- ✅ Usar operadores lógicos (&&, ||, !)

### 4. **Crear Funciones**
- ✅ Declarar funciones con `function` y arrow functions
- ✅ Usar parámetros y valores de retorno
- ✅ Reutilizar funciones en diferentes contextos

### 5. **Manipular el DOM**
- ✅ Obtener valores de elementos HTML
- ✅ Actualizar contenido de elementos
- ✅ Mostrar/ocultar elementos

---

## 📁 Estructura del Proyecto

```
calculadora-imc/
├── index.html       # Estructura HTML
├── styles.css       # Estilos CSS
├── script.js        # Lógica JavaScript
└── README.md        # Este archivo
```

---

## 🧠 Concepto: Modelo EPS

### ¿Qué es EPS?

Es la estructura fundamental de cualquier algoritmo:

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   ENTRADA    │  ──> │   PROCESO    │  ──> │    SALIDA    │
│              │      │              │      │              │
│ Peso (kg)    │      │ IMC = P/(A²) │      │ IMC = 24.49  │
│ Altura (m)   │      │              │      │ Categoría    │
└──────────────┘      └──────────────┘      └──────────────┘
```

### En nuestra Calculadora:

**ENTRADA:**
- Peso del usuario (número)
- Altura del usuario (número)

**PROCESO:**
1. Validar que los datos sean válidos
2. Calcular IMC con la fórmula: `IMC = peso / (altura * altura)`
3. Clasificar en categoría según rango

**SALIDA:**
- Valor de IMC
- Categoría (Bajo Peso, Normal, Sobrepeso, Obesidad)

---

## 💻 Conceptos de JavaScript Utilizados

### 1. Variables

```javascript
// Variables en JavaScript
const peso = 75;        // constante - no puede cambiar
let altura = 1.75;      // variable - puede cambiar
let resultado;          // sin valor inicial
```

**Recomendación:**
- Usa `const` por defecto
- Usa `let` cuando necesites reasignar
- Evita `var`

### 2. Tipos de Datos

```javascript
// Tipos primitivos
typeof 75;              // "number"
typeof 1.75;            // "number"
typeof "Hola";          // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" (quirk de JS)

// Tipos complejos
typeof {};              // "object"
typeof [];              // "object"
typeof function(){};    // "function"
```

### 3. Operadores

```javascript
// Aritméticos
75 / (1.75 * 1.75)     // División y multiplicación

// Comparación
imc < 18.5             // Menor que
imc >= 25              // Mayor o igual que
imc === 24.49          // Igualdad estricta

// Lógicos
peso > 0 && altura > 0.5   // AND
categoria == "Normal" || categoria == "Bajo Peso"  // OR
!hayError              // NOT
```

### 4. Funciones

```javascript
// Declaración tradicional
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Arrow function moderna
const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
};

// Arrow function versión corta
const calcularIMC = (peso, altura) => peso / (altura * altura);

// Con parámetros por defecto
function obtenerCategoria(imc = 0) {
    if (imc < 18.5) return "Bajo Peso";
    // ...
}
```

### 5. Manipulación del DOM

```javascript
// Obtener elemento
const input = document.getElementById('peso');

// Obtener valor
const peso = parseFloat(input.value);

// Establecer valor
input.value = '';

// Acceder a propiedades
element.style.display = 'none';
element.style.color = '#ff0000';

// Cambiar contenido
element.textContent = 'Nuevo texto';

// Agregar listeners
element.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularIMC();
    }
});
```

---

## 🔧 Cómo Funciona la Aplicación

### Flujo Principal

1. **Usuario ingresa datos** → Peso y Altura en los inputs
2. **Hace clic en "Calcular IMC"** → Se ejecuta `calcularIMC()`
3. **Validación** → Se verifica que los datos sean válidos
4. **Cálculo** → Se calcula el IMC con la fórmula
5. **Categorización** → Se determina la categoría
6. **Visualización** → Se muestran los resultados

### Estructura de Funciones

```javascript
// Validación
espesoValido(peso)          // true/false
esAlturaValida(altura)      // true/false
sonDatosValidos(p, a)       // true/false

// Cálculo
calcularIMC(peso, altura)   // número

// Clasificación
obtenerCategoria(imc)       // string
obtenerColor(imc)           // string hexadecimal

// Control
calcularIMC()               // función principal
mostrarResultado(...)       // muestra en página
limpiar()                   // resetea todo
mostrarSolucion(id)         // alterna visibilidad
```

---

## 📝 Ejercicios para Practicar

### Ejercicio 1: Validación Simple

**Objetivo:** Crear una función que valide si los datos son válidos

```javascript
// Tu código aquí
function esValido(peso, altura) {
    // Devuelve true si peso > 0 && peso < 300
    // Y altura > 0.5 && altura < 2.5
}

// Prueba
console.log(esValido(75, 1.75));    // true
console.log(esValido(400, 1.75));   // false
console.log(esValido(75, 3));       // false
```

### Ejercicio 2: Categorización

**Objetivo:** Crear una función que retorne la categoría del IMC

```javascript
// Tu código aquí
function obtenerCategoria(imc) {
    // Si imc < 18.5 → "Bajo Peso"
    // Si imc < 25 → "Peso Normal"
    // Si imc < 30 → "Sobrepeso"
    // Si imc >= 30 → "Obesidad"
}

// Prueba
console.log(obtenerCategoria(17));   // "Bajo Peso"
console.log(obtenerCategoria(22));   // "Peso Normal"
console.log(obtenerCategoria(27));   // "Sobrepeso"
console.log(obtenerCategoria(32));   // "Obesidad"
```

### Ejercicio 3: Función Completa

**Objetivo:** Crear una función que haga todo el proceso

```javascript
// Tu código aquí
function procesarIMC(peso, altura) {
    // 1. Validar los datos
    // 2. Calcular IMC
    // 3. Obtener categoría
    // 4. Retornar un objeto con todo
    
    return {
        peso: peso,
        altura: altura,
        imc: imc,
        categoria: categoria
    };
}

// Prueba
const resultado = procesarIMC(75, 1.75);
console.log(resultado);
// { peso: 75, altura: 1.75, imc: 24.49, categoria: "Peso Normal" }
```

### Ejercicio 4: Mejorar la Validación

**Objetivo:** Agregar más validaciones

```javascript
// Mejora la función para:
// - Verificar que los valores no sean strings
// - Verificar que sean números válidos (no NaN)
// - Mostrar mensajes de error específicos

function validarConMensaje(peso, altura) {
    if (isNaN(peso)) {
        return { valido: false, error: "Peso debe ser un número" };
    }
    if (isNaN(altura)) {
        return { valido: false, error: "Altura debe ser un número" };
    }
    // ... más validaciones
    
    return { valido: true };
}
```

### Ejercicio 5: Información Adicional

**Objetivo:** Agregar más datos al resultado

```javascript
// Agrega a la función:
// - Peso ideal (basado en altura)
// - Gramos a perder o ganar
// - Recomendaciones personalizadas

function calcularImcCompleto(peso, altura) {
    // ... cálculo base
    
    // Peso ideal para altura (IMC = 22)
    const pesoIdeal = 22 * altura * altura;
    
    // Diferencia
    const diferencia = peso - pesoIdeal;
    
    return {
        imc: imc,
        categoria: categoria,
        pesoIdeal: pesoIdeal,
        diferencia: diferencia,
        recomendacion: "..."
    };
}
```

---

## 🚀 Cómo Usar

### 1. Abre el archivo en tu navegador
```bash
# Abre index.html en tu navegador
```

### 2. Ingresa tus datos
- Peso en kilogramos
- Altura en metros

### 3. Haz clic en "Calcular IMC"

### 4. Observa el resultado
- Tu IMC calculado
- Tu categoría
- Información detallada

---

## 🧪 Pruebas en la Consola

Abre DevTools (F12) y prueba estas funciones:

```javascript
// Calcular IMC
calcularIMC(75, 1.75);          // 24.49

// Obtener categoría
obtenerCategoria(24.49);         // "Peso Normal"

// Obtener color
obtenerColor(24.49);             // "#10b981"

// Validar datos
sonDatosValidos(75, 1.75);       // true
sonDatosValidos(400, 1.75);      // false

// Casos de prueba completos
console.log(calcularIMC(50, 1.60));      // 19.53 (Normal)
console.log(calcularIMC(95, 1.75));      // 30.98 (Obesidad)
console.log(calcularIMC(45, 1.70));      // 15.57 (Bajo peso)
```

---

## 📚 Conceptos Clave Aprendidos

| Concepto | Explicación |
|----------|------------|
| **Algoritmo EPS** | Entrada → Proceso → Salida |
| **Variables** | Contenedores de datos (const, let) |
| **Tipos de Datos** | Number, String, Boolean, Object, Array |
| **Operadores** | Aritméticos, comparación, lógicos |
| **Funciones** | Bloques reutilizables de código |
| **Validación** | Verificar que datos cumplan requisitos |
| **DOM** | Acceder y modificar elementos HTML |
| **Tipado Débil** | JavaScript permite cambiar tipos |

---

## 🎨 Mejoras Opcionales

Después de completar el ejercicio, puedes intentar:

### Nivel 1: Interfaz
- [ ] Cambiar colores y estilos
- [ ] Agregar más información visual
- [ ] Mejorar la experiencia del usuario

### Nivel 2: Funcionalidad
- [ ] Guardar histórico de cálculos
- [ ] Agregar comparación con promedio
- [ ] Sugerir dieta personalizada

### Nivel 3: Avanzado
- [ ] Usar localStorage para guardar datos
- [ ] Crear gráficos de resultados
- [ ] Agregar más métricas (grasa corporal, etc.)

---

## 🔗 Recursos Adicionales

### Documentación Oficial
- [MDN - JavaScript Basics](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [MDN - Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [MDN - DOM](https://developer.mozilla.org/es/docs/Web/API/Document)

### Herramientas
- [VS Code](https://code.visualstudio.com/) - Editor de código
- [DevTools](https://developer.chrome.com/docs/devtools/) - Debugger
- [JSFiddle](https://jsfiddle.net/) - Pruebas online

### Práctica Online
- [Codecademy](https://www.codecademy.com/) - Cursos interactivos
- [FreeCodeCamp](https://www.freecodecamp.org/) - Tutoriales
- [HackerRank](https://www.hackerrank.com/) - Desafíos de código

---

## 🎓 Próximos Pasos

Después de dominar este ejercicio:

1. **Clase 3** - Condicionales y Bucles
   - if/else, switch
   - for, while, forEach
   
2. **Clase 4** - HTML y CSS
   - Estructura HTML semántica
   - Estilos CSS avanzados

3. **Clase 5** - Interactividad con DOM
   - Event listeners
   - Manipulación dinámica del DOM

---

## 📞 Dudas Frecuentes

### ¿Por qué usar `const` en lugar de `let`?
Porque `const` es más seguro - impide cambios accidentales. Usa `let` solo cuando necesites reasignar.

### ¿Cuál es la diferencia entre `==` y `===`?
`===` es más seguro (comparación estricta). `==` hace coerción de tipos (puede causar bugs).

### ¿Cómo depuro mi código?
Abre DevTools (F12), usa `console.log()` para ver valores, coloca breakpoints, etc.

### ¿Por qué mis funciones no funcionan?
Verifica:
1. ¿La función está declarada antes de usarla?
2. ¿Pasas los parámetros correctos?
3. ¿Devuelve lo esperado? (usa console.log)

---

## 📝 Notas Importantes

> **💡 Tip:** El mejor camino para aprender programación es: **entender → escribir → depurar → mejorar**

> **⚠️ Recordatorio:** Los errores son normales - la consola (DevTools) te muestra dónde están

> **🎯 Objetivo:** Practica hasta que las funciones básicas se conviertan en segunda naturaleza

---

**Última actualización:** 2024  
**Autor:** Academia DevSeniorCode  
**Nivel:** Principiante (Junior Developer)  
**Tiempo estimado:** 2-4 horas
