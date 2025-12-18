# 📋 Guía de Verificación de Entorno - Clase 1

## 🎯 ¿Qué es esto?

Esta es una **guía interactiva** que te ayuda a verificar y completar la configuración de tu entorno de desarrollo para trabajar como **Full Stack JavaScript Developer**.

No es un ejercicio de programación tradicional, sino una **herramienta de configuración** que:
- ✅ Proporciona instrucciones paso a paso
- ✅ Ofrece comandos listos para copiar
- ✅ Mantiene un registro de lo que has completado
- ✅ Te muestra el progreso visual

---

## 🚀 Cómo Usar

### 1. **Abre el archivo en tu navegador**
   ```bash
   # Abre index.html en tu navegador favorito
   ```

### 2. **Sigue cada sección**
   - Lee las instrucciones
   - Ejecuta los comandos en tu Terminal/PowerShell
   - Marca ✓ cuando completes cada paso

### 3. **Mantén el registro**
   - Tu progreso se guarda automáticamente
   - Puedes volver más tarde y continuar
   - Recarga la página para ver tu progreso

### 4. **Alcanza el 100%**
   - Verás un resumen final cuando completes todo
   - Tendrás acceso a los próximos pasos

---

## 📚 Herramientas a Configurar

### 🔴 Críticas (Deben estar instaladas)
- **Node.js** - Motor JavaScript para el servidor
- **NPM** - Gestor de paquetes
- **Git** - Control de versiones

### 🟠 Importantes (Muy recomendadas)
- **VS Code** - Editor de código
- **Angular CLI** - Framework frontend

### 🟢 Recomendadas
- **MongoDB Atlas** - Base de datos en la nube

### 🔵 Herramientas auxiliares
- **Navegador web** con Developer Tools

---

## ✨ Características Especiales

### 📋 Checklist Interactivo
Marca cada elemento conforme lo completes. Tu progreso se actualiza automáticamente.

### 📋 Copiar Comandos
Botón "Copiar" junto a cada comando para pegarlo rápidamente en tu Terminal.

### 💾 Progreso Guardado
Tu progreso se guarda en localStorage del navegador. No perderás avance si cierras la página.

### 🎯 Barra de Progreso Visual
Visualiza tu avance hacia la configuración completa.

### 📱 Responsive
Funciona en desktop, tablet y móvil.

---

## 🛠️ Especificaciones Recomendadas

| Herramienta | Versión Mínima | Versión Recomendada |
|-------------|-----------------|-------------------|
| Node.js | 14.x | 18.x LTS o superior |
| NPM | 6.x | 9.x o superior |
| Git | 2.x | 2.40+ |
| Angular CLI | 15.x | 16.x o superior |
| VS Code | Latest | Latest |

---

## 🆘 Solución de Problemas

### "Node.js no se reconoce en la terminal"
- **Solución:** Reinicia tu computadora después de instalar Node.js
- La variable de entorno PATH necesita actualizarse

### "npm install -g falla"
- **Solución:** Intenta con permisos de administrador
- En Windows: Abre PowerShell como Administrador
- En Mac/Linux: Usa `sudo npm install -g`

### "Git no se reconoce"
- **Solución:** Reinicia tu terminal después de instalar
- En Windows: Cierra y abre PowerShell nuevamente

### "Angular CLI tarda mucho"
- **Solución:** Es normal, tarda 2-5 minutos
- Asegúrate de tener conexión a internet estable

### "MongoDB Atlas no funciona"
- **Solución:** Verifica:
  - Tu conexión a internet
  - El email de verificación fue confirmado
  - La IP está en la whitelist (Network Access)

---

## 📝 Stack MEAN Explicado

Cuando completes esta guía, tendrás:

```
ARQUITECTURA MEAN
├─ Frontend (Angular)
│  └─ Lo que ve el usuario en el navegador
├─ Backend (Node.js + Express)
│  └─ Lógica del servidor
└─ Base de Datos (MongoDB)
   └─ Almacenamiento de datos
```

### Flujo de una Petición

```
Usuario (Navegador)
    ↓
Angular (Frontend)
    ↓
HTTP Request
    ↓
Express + Node.js (Backend)
    ↓
MongoDB (Base de Datos)
    ↓
Respuesta JSON
    ↓
Angular (Frontend)
    ↓
Navegador muestra resultado
```

---

## 🎓 Próximos Pasos Después

Una vez completes esta configuración:

1. **Clase 2:** Fundamentos de JavaScript
   - Variables, tipos de datos, operadores
   - Funciones y algoritmos
   - Ejercicio: Calculadora de IMC

2. **Clase 3:** Condicionales y Bucles
   - if/else, switch
   - for, while, forEach

3. **Clase 4:** HTML y CSS
   - Estructura semántica
   - Diseño responsivo

4. **Clase 5:** Interactividad con DOM
   - Manipular elementos HTML
   - Event listeners

5. **Clase 6:** APIs y Fetch
   - Conexión con servidores
   - Obtener datos en tiempo real

---

## 🔗 Enlaces Útiles

### Documentación Oficial
- [Node.js](https://nodejs.org/) - Descarga e instalación
- [Git](https://git-scm.com/) - Control de versiones
- [VS Code](https://code.visualstudio.com/) - Editor
- [Angular](https://angular.io/) - Framework frontend
- [MongoDB](https://www.mongodb.com/) - Base de datos

### Tutoriales
- [Node.js Basics](https://nodejs.org/en/docs/)
- [Git Tutorial](https://git-scm.com/book/en/v2)
- [VS Code Tips](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [MongoDB Guide](https://docs.mongodb.com/manual/)

### Comunidades
- [Stack Overflow](https://stackoverflow.com/) - Preguntas y respuestas
- [GitHub](https://github.com/) - Repositorios
- [Dev.to](https://dev.to/) - Artículos de desarrollo

---

## 💡 Consejos Profesionales

1. **Mantén todo actualizado**
   - Node.js y npm reciben actualizaciones frecuentes
   - Usa `npm update -g` ocasionalmente

2. **Usa Terminal/PowerShell correctamente**
   - Aprende comandos básicos (cd, ls, mkdir)
   - Es una habilidad esencial

3. **Git desde el inicio**
   - Practica con `git init`, `git add`, `git commit`
   - Crea repositorios en GitHub desde el principio

4. **Lee los mensajes de error**
   - Parecen aterradores, pero contienen información valiosa
   - Stack traces ayudan a debuggear

5. **Documenta tu entorno**
   - Apunta versiones de herramientas
   - Guarda contraseñas de forma segura (gestores como 1Password)

---

## 🎉 Logros Desbloqueados

Cuando completes esta guía:

| Logro | Descripción |
|-------|------------|
| ⚙️ **Motor Encendido** | Node.js y npm instalados |
| 🔀 **Versionista** | Git configurado |
| 📝 **Codificador** | VS Code listo |
| 🅰️ **Angular Ready** | CLI instalado |
| 🍃 **Base de Datos** | MongoDB Atlas conectada |
| 🚀 **Developer Full Stack** | Entorno completo configurado |

---

## 📞 Preguntas Frecuentes

### ¿Necesito todo esto de inmediato?
No todos los campos son críticos para empezar:
- Node.js + NPM: **Obligatorio**
- Git: **Muy importante**
- VS Code: **Muy recomendado**
- Angular CLI: **Importante para el proyecto final**
- MongoDB: **Necesario para proyecto final**

### ¿Puedo usar otro editor en lugar de VS Code?
Sí, pero VS Code es el más popular y mejor integrado con Angular.

### ¿Qué SO es mejor para desarrollo?
Todos funcionan: Windows, Mac, Linux. Windows + WSL2 es recomendado.

### ¿Necesito pagar por algo?
No, todo es gratuito:
- Node.js: Gratuito
- Git: Gratuito
- VS Code: Gratuito
- MongoDB Atlas: Tier gratuito disponible
- GitHub: Gratuito con repositorios públicos

---

## 📊 Estado de tu Progreso

Tu progreso se muestra en la **barra en la parte superior**. 

Cuando llegues al **100%**, verás:
- ✅ Resumen de todas las herramientas instaladas
- 📋 Próximos pasos para comenzar con la programación
- 💪 Motivación para continuar

---

## 🎯 Objetivo Final

Al completar esta guía, tendrás:

```
✅ Un entorno profesional de desarrollo
✅ Todas las herramientas configuradas
✅ Conocimiento básico del Stack MEAN
✅ Listo para aprender JavaScript
✅ Preparado para crear aplicaciones Full Stack
```

---

## 📝 Notas Importantes

> **⚠️ Haz una copia de seguridad**
> Guarda en un lugar seguro:
> - Tu contraseña de MongoDB
> - Tu cadena de conexión MongoDB
> - Tus credenciales de Git

> **💡 Práctica constante**
> La repetición es la madre del aprendizaje:
> - Practica comandos de Git
> - Experimenta con Node.js
> - Crea pequeños proyectos

> **🤝 Pide ayuda**
> Si estás atascado:
> - Lee mensajes de error cuidadosamente
> - Busca en Google (92% de los devs lo hacen)
> - Pregunta en comunidades

---

**Última actualización:** 2024  
**Autor:** Academia DevSeniorCode  
**Nivel:** Principiante (Setup/Onboarding)  
**Tiempo estimado:** 30-60 minutos

¡Bienvenido al mundo del desarrollo Full Stack! 🚀
