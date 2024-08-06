# Task Manager Application

Una aplicación de gestión de tareas construida con React que permite a los usuarios crear, filtrar y marcar tareas como completadas.

## Características

- **Añadir Tareas:** Crea nuevas tareas proporcionando un título y una descripción.
- **Filtrar Tareas:** Filtra las tareas por completadas, no completadas, o todas.
- **Marcar Tareas:** Marca las tareas como completadas o no completadas, actualizando automáticamente su estado y color.

## Componentes Principales

### 1. NewTask

Este componente permite a los usuarios agregar nuevas tareas. Usa `useState` para manejar los valores de entrada del título y la descripción de la tarea. Al hacer clic en el botón "New Task", la nueva tarea se añade al estado global de tareas usando `setTasks`.

### 2. FilterTasks

Este componente proporciona opciones para filtrar las tareas. Usa el contexto `TasksContext` para actualizar el estado de `filteredTasks` basado en el filtro seleccionado por el usuario (completadas, no completadas, o todas).

### 3. ItemTask

Cada tarea se representa como un `ItemTask`, que muestra el título y la descripción de la tarea. Usa un checkbox para marcar la tarea como completada. El color del texto de la tarea cambia a verde si está completada y a rojo si no lo está.

### 4. Home

El componente `Home` orquesta la aplicación, utilizando el contexto `TasksContext` para obtener las tareas filtradas y renderizar los componentes `NewTask`, `FilterTasks`, y `ContainerTasks`.

### 5. Context

El archivo `Context.js` define el contexto global `TasksContext`, que contiene el estado y los métodos para manejar las tareas y los filtros. Este contexto es consumido por varios componentes para compartir el estado globalmente.

