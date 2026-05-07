/**
 * Punto de entrada de la aplicación
 * Inicializa el servidor Express
 */

const express = require('express');
const config = require('./config/config');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/usuarios', usuarioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido al backend de usuarios',
    version: '1.0.0'
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    mensaje: 'Ruta no encontrada'
  });
});

// Iniciar servidor
app.listen(config.PORT, () => {
  console.log(`✅ Servidor ejecutándose en puerto ${config.PORT}`);
  console.log(`🔗 http://localhost:${config.PORT}`);
  console.log(`📚 Endpoints disponibles:`);
  console.log(`   POST   /usuarios       - Crear usuario (implementado)`);
  console.log(`   GET    /usuarios       - Obtener todos (Implementado)`);
  console.log(`   GET    /usuarios/:id   - Obtener por ID (Implementado)`);
  console.log(`   PATCH  /usuarios/:id   - Actualizar (por completar)`);
});
