// Obtener el formulario y añadir un "escuchador" de eventos para cuando se envíe
document.getElementById('formulario-descarga').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

    // Obtener el valor del número que introdujo el usuario
    const numero = document.getElementById('numero').value;

    // Lista de las posibles carpetas donde se podría encontrar el archivo
    const carpetas = ['imagenes', 'imagenes2', 'imagenes3', 'imagenes4', 'imagenes5'];
    
    // Nombre del archivo a buscar, basado en el DNI
    const nombreArchivo = `${numero}.jpg`;

    // Función asíncrona para buscar y descargar el archivo
    async function buscarYDescargar(rutas) {
        for (const carpeta of rutas) {
            const rutaCompleta = `${carpeta}/${nombreArchivo}`;
            
            try {
                // Intenta verificar la existencia del archivo en la ruta actual
                const response = await fetch(rutaCompleta, { method: 'HEAD' });

                if (response.ok) {
                    // El archivo existe, proceder con la descarga
                    const link = document.createElement('a');
                    link.href = rutaCompleta;
                    link.download = nombreArchivo;
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    alert('Designación descargada con éxito.');
                    return; // Detener la búsqueda si se encontró el archivo
                }
            } catch (error) {
                // Ignorar errores de red y continuar con la siguiente carpeta
                console.warn(`No se pudo verificar el archivo en ${rutaCompleta}:`, error);
            }
        }
        
        // Si el bucle termina sin encontrar el archivo
        alert('DNI no encontrado.');
    }

    // Iniciar la búsqueda
    buscarYDescargar(carpetas);
});