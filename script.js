// Obtener el formulario y añadir un "escuchador" de eventos para cuando se envíe
document.getElementById('formulario-descarga').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

    // Obtener el valor del número que introdujo el usuario
    const numero = document.getElementById('numero').value;
    
    // Construir la ruta del archivo con el número del usuario
    const nombreArchivo = `${numero}.jpg`;
    const rutaArchivo = `imagenes/${nombreArchivo}`;

    // Paso 1: Usar la API fetch para verificar la existencia del archivo
    // Se utiliza el método 'HEAD' para solicitar solo los encabezados, lo cual es más rápido y eficiente.
    
    fetch(rutaArchivo, { method: 'HEAD' })
        .then(response => {

           // Paso 2: Verificar el estado de la respuesta
            if (response.ok) {
                // El archivo existe (código de estado 200)
 

    // Crear un enlace de descarga temporal y simular un clic
    const link = document.createElement('a');
    link.href = rutaArchivo;
    link.download = nombreArchivo; // El atributo 'download' fuerza la descarga
    
    // El enlace se crea y se elimina para evitar que quede en la página
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


} else {
                // El archivo no existe (código de estado 404)
                alert(`DNI no encontrado`);
            }
        })
        .catch(error => {
            // Manejar posibles errores de red
            console.error('Error al verificar el archivo:', error);
            alert('Ocurrió un error al verificar la existencia del archivo.');
        });

});