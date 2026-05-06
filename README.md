# Backend de Usuarios - Tarea Metodología

Backend sencillo para gestión de usuarios diseñado como material educativo.

## Estructura del Proyecto

```
src/
├── config/          # Configuración de la aplicación
├── controllers/     # Controladores que manejan las peticiones HTTP
├── routes/         # Definición de rutas
├── services/       # Lógica de negocio
├── validations/    # Validaciones con Joi
├── handlers/       # Manejadores de respuestas
└── index.js        # Punto de entrada
```

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Copia las variables de entorno:
```bash
cp .env.example .env
```

3. Inicia el servidor:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints

### Crear Usuario (Implementado)
`POST /usuarios`

Body:
```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@example.com",
  "edad": 25
}
```

### Obtener Usuarios (IMPLEMENTADO)
`GET /usuarios`

### Obtener Usuario por ID (Por implementar)
`GET /usuarios/:id`

### Actualizar Usuario (Por implementar)
`PATCH /usuarios/:id`

## Notas Importantes

- Actualmente usamos almacenamiento en memoria (array)
- **Esta semana**: Conectaremos una base de datos real
- Los endpoints GET y PATCH están listos para que los completes
- Revisa los comentarios en los archivos para las ayuditas

## Tarea para Estudiantes

1. **Completa el endpoint GET /usuarios** - Debe retornar todos los usuarios
2. **Completa el endpoint GET /usuarios/:id** - Debe retornar un usuario específico
3. **Completa el endpoint PATCH /usuarios/:id** - Debe actualizar un usuario existente
4. **Agrega validaciones** si lo consideras necesario en `src/validations/`
