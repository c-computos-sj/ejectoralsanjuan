// Obtener el formulario y añadir un "escuchador" de eventos para cuando se envíe
document.getElementById('formulario-descarga').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

    // Obtener el valor del número que introdujo el usuario
    const numero = document.getElementById('numero').value;
    
    // Construir la ruta del archivo con el número del usuario
    const nombreArchivo = `${numero}.jpg`;
    const rutaArchivo = `imagenes/${nombreArchivo}`;

    // Crear un enlace de descarga temporal y simular un clic
    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo; // El atributo 'download' fuerza la descarga
    
    // El enlace se crea y se elimina para evitar que quede en la página
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});