const { exec } = require('child_process');
const chokidar = require('chokidar');

// Ruta del proyecto, "." es la carpeta actual
const watcher = chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true
});

// Función para ejecutar comandos git
function gitAutoCommit() {
  const fecha = new Date().toLocaleString();
  exec('git add . && git commit -m "Auto-commit ' + fecha + '" && git push', (err, stdout, stderr) => {
    if (err) console.error('Error al hacer auto-commit:', err);
    else console.log('Auto-commit hecho a las', fecha);
  });
}

// Cada vez que hay un cambio en cualquier archivo
watcher.on('change', (path) => {
  console.log(`Archivo cambiado: ${path}`);
  gitAutoCommit();
});

console.log('Auto-commit activado, vigilando cambios...');
