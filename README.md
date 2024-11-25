# 🎮 [Sala de Juegos - TP 2023](https://github.com/user-attachments/files/17896292/Consigna.Sala.de.Juegos.2023.pdf)

El proyecto consiste en desarrollar una aplicación interactiva llamada **Sala de Juegos** para almacenar y gestionar el desempeño de los jugadores.

---

## 🎯 Objetivo
Crear una aplicación que permita:
- Almacenar estadísticas de jugadores y juegos.
- Garantizar una experiencia de usuario excelente.
- Implementar funcionalidades específicas en sprints semanales.

---

## 🛠️ Requerimientos principales

### 1️⃣ Servidor
- Implementar la aplicación en **Heroku** o **Firebase**.

### 2️⃣ Base de datos
- Usar **Firebase** como sistema de almacenamiento.

### 3️⃣ Login y Registro de usuarios
- **Autenticación segura**.
- Gestión de usuarios (login, registro, logout).

### 4️⃣ Lógica de los juegos
#### Juegos obligatorios:
- **Ahorcado**
- **Mayor o Menor**
- **Preguntados**
#### Juego propio:
- Diseñar un juego adicional.
- **No permitido**:
  - TaTeTi
  - Memotest
  - Piedra, Papel o Tijera

### 5️⃣ Experiencia de usuario (UX)
- Pantallas intuitivas y fáciles de navegar.
- Información clara y detallada en acciones y mensajes.

### 6️⃣ Diseño y Estilos
- Utilizar:
  - **PrimeNG**
  - **Angular Material**
  - **Bootstrap**
- Incluir:
  - Animaciones (CSS o TypeScript).
  - Un **favicon**.

### 7️⃣ Listados
- Mostrar resultados de juegos:
  - Datos del jugador.
  - Fecha y puntajes.

### 8️⃣ Presentación personal ("Quién Soy")
Debe incluir:
- Datos personales del alumno.
- Imagen del alumno.
- Explicación detallada del juego propio.

---

## 🗓️ Cronograma de sprints

### Sprint 1 (Clase 02)
- Estructura básica del proyecto.
- Publicación en Heroku/Firebase.
- Componentes iniciales:
  - Login.
  - Home.
  - Quién Soy.
- Favicon configurado.

### Sprint 2 (Clase 03)
- **Home**:
  - Accesos a juegos y listados.
  - Mostrar usuario logueado y opción de logout.
- **Login**:
  - Validar usuario contra Firebase.
  - Registrar logs (usuario, fecha).
  - Botones de acceso rápido para email/contraseña.
- **Registro**:
  - Crear usuario y loguear automáticamente.
  - Validar duplicados (sin usar `alert`).

### Sprint 3 (Clase 04)
- **Chat**:
  - Solo accesible para usuarios logueados.
  - Mostrar usuario y hora del mensaje.
- **Modularización**:
  - Implementar módulos y `loadChildren`.
- **Juegos iniciales**:
  - Ahorcado: Uso de botones para letras (sin teclado).
  - Mayor o Menor: Adivinar cartas.

### Sprint 4 (Clase 05)
- **Preguntados**:
  - Obtener imágenes desde una API con un `Service`.
  - Opciones interactivas (sin teclado).
- **Juego propio**:
  - Explicación en “Quién Soy”.

### Sprint 5 (Clase 06)
- **Listado de resultados**:
  - Registrar datos al finalizar los juegos (usuario, fecha, puntaje, etc.).
- **Encuesta**:
  - Solicitar:
    - Nombre y apellido.
    - Edad (validar entre 18 y 99 años).
    - Teléfono (máximo 10 números).
    - 3 preguntas mínimas con distintos controles:
      - Textbox, checkbox, radiobutton, etc.
  - Validaciones obligatorias.
  - Guardar en Firebase.

---

## 📋 Estructura básica de la aplicación

### Componentes principales:
- **Login**
- **Registro**
- **Home**
- **Quién Soy**
- Módulos de juegos:
  - Ahorcado
  - Mayor o Menor
  - Preguntados
  - Juego propio
- **Listados y Encuesta**
- **Sala de chat** (usuarios logueados).

---

## 💡 Notas adicionales
- La aplicación está dirigida a evaluar capacidades cognitivas y motrices de los usuarios.
- **Solo accesible para usuarios registrados**.
- **Prohibido usar `alert` para notificaciones**.

---
