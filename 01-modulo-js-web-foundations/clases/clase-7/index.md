# 🚀 Clase 7: Introducción a TypeScript

## 📚 Objetivos de la Clase

- Entender qué es TypeScript y cómo mejora JavaScript
- Aprender a usar interfaces y tipos personalizados
- Crear clases tipadas con TypeScript
- Comprender los beneficios del tipado estático
- Construir una aplicación práctica: Tienda Online Tipada

---

## 🧠 ¿Qué es TypeScript?

**TypeScript** es un **superset** de JavaScript desarrollado por Microsoft que añade **tipado estático** al lenguaje. Es decir, te permite especificar qué tipo de dato debe tener cada variable, parámetro de función, etc.

### ¿Por qué TypeScript?

Imagina que tienes una función que suma dos números:

```javascript
// JavaScript
function sumar(a, b) {
    return a + b;
}

sumar(5, 3);        // ✅ Funciona: 8
sumar("5", "3");    // ✅ Funciona pero suma strings: "53"
sumar(5, "3");      // ❌ Comportamiento impredecible
```

Con TypeScript puedes especificar exactamente qué esperas:

```typescript
// TypeScript
function sumar(a: number, b: number): number {
    return a + b;
}

sumar(5, 3);        // ✅ Correcto
sumar("5", "3");    // ❌ Error en compilación
sumar(5, "3");      // ❌ Error en compilación
```

### Ventajas Principales

| Beneficio | Ejemplo |
|-----------|---------|
| **Errores antes de ejecutar** | TypeScript detecta errores durante el desarrollo, no cuando ejecutas el código |
| **Autocompletado inteligente** | El editor sabe exactamente qué propiedades tiene cada objeto |
| **Documentación automática** | Los tipos sirven como documentación del código |
| **Refactoring seguro** | Cambiar un tipo automaticamente actualiza todo el código que lo usa |
| **Compatible con JavaScript** | Todo código JavaScript válido es válido en TypeScript |

### El Flujo de TypeScript

```
Código TypeScript (.ts) 
    ↓
Compilador (tsc) - Verifica tipos
    ↓
JavaScript (.js) - Código limpio
    ↓
Ejecución en navegador o Node.js
```

---

## 🔧 Configuración Básica

### Instalación

```bash
# Instalar TypeScript globalmente
npm install -g typescript

# Verificar instalación
tsc --version
```

### Compilar un archivo TypeScript

```bash
# Compilar un archivo
tsc archivo.ts

# Ver el resultado en JavaScript
cat archivo.js

# Modo watch (compila automáticamente cuando cambias el archivo)
tsc archivo.ts --watch
```

### Proyecto TypeScript

```bash
# Inicializar un proyecto
npm init -y

# Instalar TypeScript como dependencia de desarrollo
npm install -D typescript

# Crear configuración (tsconfig.json)
tsc --init
```

---

## 📝 Tipos Básicos en TypeScript

### Tipos Primitivos

```typescript
// String
let nombre: string = "Juan";

// Number
let edad: number = 25;
let precio: number = 19.99;

// Boolean
let esActivo: boolean = true;

// Array
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];

// Tupla (array con tipos específicos en cada posición)
let coordenada: [number, number] = [10, 20];
let usuario: [string, number] = ["Juan", 25];

// Union (puede ser uno de varios tipos)
let id: string | number;
id = "abc123";    // ✅ OK
id = 12345;       // ✅ OK
// id = true;     // ❌ Error
```

### Type Literals

Restringir un valor a opciones específicas:

```typescript
// Solo permite estos valores exactos
let direccion: "norte" | "sur" | "este" | "oeste";
direccion = "norte";     // ✅ OK
// direccion = "arriba"; // ❌ Error

// Con números
let nivel: 1 | 2 | 3 | 4 | 5;
nivel = 3;  // ✅ OK
```

---

## 🏗️ Interfaces y Types

### ¿Qué es una Interfaz?

Una interfaz es un contrato que especifica qué propiedades y métodos debe tener un objeto.

```typescript
// Definir una interfaz
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    enStock: boolean;    // Propiedad requerida
    descripcion?: string; // Propiedad opcional (con ?)
}

// Usar la interfaz
const laptop: Producto = {
    id: 1,
    nombre: "Laptop Dell",
    precio: 1200,
    enStock: true,
    descripcion: "Laptop de alta performance"
};

// Sin descripción también es válido
const mouse: Producto = {
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 25,
    enStock: true
    // descripcion no es obligatoria
};
```

### Type vs Interface

Ambos son muy similares, pero la interfaz es mejor para estructuras de objetos:

```typescript
// Interface (para estructuras de objetos)
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

// Type (para alias más simples o uniones)
type Rol = 'admin' | 'usuario' | 'moderador';

type Estado = 'activo' | 'inactivo';

// Puedes combinarlos
interface UsuarioConRol extends Usuario {
    rol: Rol;
    estado: Estado;
}
```


## 🎯 Clases en TypeScript

Las clases en TypeScript son como en JavaScript, pero con tipos:

```typescript
// Clase simple
class Coche {
    // Propiedades con tipos
    marca: string;
    modelo: string;
    velocidad: number = 0;

    // Constructor
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Métodos
    acelerar(): void {
        this.velocidad += 10;
        console.log(`${this.marca} ${this.modelo} acelerando a ${this.velocidad} km/h`);
    }

    obtenerVelocidad(): number {
        return this.velocidad;
    }
}

// Usar la clase
const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar(); // Toyota Corolla acelerando a 10 km/h
```

### Modificadores de Acceso

```typescript
class Persona {
    // public - accesible desde cualquier lado (por defecto)
    public nombre: string;

    // private - solo accesible dentro de la clase
    private edad: number;

    // protected - accesible en la clase y subclases
    protected direccion: string;

    constructor(nombre: string, edad: number, direccion: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    private calcularAñoNacimiento(): number {
        return new Date().getFullYear() - this.edad;
    }

    protected cambiarDireccion(nueva: string): void {
        this.direccion = nueva;
    }
}

const persona = new Persona("Juan", 30, "Calle Principal 123");
console.log(persona.nombre);        // ✅ OK (public)
// console.log(persona.edad);       // ❌ Error (private)
// console.log(persona.direccion);  // ❌ Error (protected)
```

## 📖 Recursos Adicionales

- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Documentación oficial
- [TypeScript Playground](https://www.typescriptlang.org/play) - Prueba TypeScript online
---

## 💡 Tips Importantes

1. **Compila antes de ejecutar**: Siempre compila el código TypeScript a JavaScript antes de ejecutarlo en el navegador.

2. **Lee los errores**: Los mensajes de error de TypeScript son muy descriptivos, ayúdate de ellos.

3. **Usa tipos específicos**: Evita usar `any` - TypeScript pierde su valor si usas `any`.

4. **Las interfaces documentan**: Las interfaces sirven como documentación del código, especifica bien sus propiedades.

5. **Practica con ejercicios reales**: La mejor forma de aprender TypeScript es usándolo en proyectos reales.

---

> **Próxima clase**: Proyecto Integrador - Combinaremos todo lo aprendido en un proyecto web completo