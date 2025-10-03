// Obtener el formulario y añadir un "escuchador" de eventos para cuando se envíe
document.getElementById('formulario-descarga').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar que el formulario se envíe de la forma tradicional

    // Obtener el valor del número que introdujo el usuario
    const numero = document.getElementById('numero').value;
    
    // Construir la ruta del archivo con el número del usuario
    const nombreArchivo = `${numero}.jpg`;
    const rutaArchivo  = `imagenes/${nombreArchivo}`;
    const rutaArchivo2 = `imagenes1/${nombreArchivo}`;
    const rutaArchivo3 = `imagenes2/${nombreArchivo}`;
    const rutaArchivo4 = `imagenes3/${nombreArchivo}`;
    const rutaArchivo5 = `imagenes4/${nombreArchivo}`;

fetch(rutaArchivo, { method: 'HEAD' })
        .then(response => {
           			 if (response.ok) {
				    const link = document.createElement('a');
				    link.href = rutaArchivo;
				    link.download = nombreArchivo;
				    document.body.appendChild(link);
				    link.click();
				    document.body.removeChild(link);
			            } else {

fetch(rutaArchivo2, { method: 'HEAD' })
        .then(response => {
           			 if (response.ok) {
				    const link = document.createElement('a');
				    link.href = rutaArchivo2;
				    link.download = nombreArchivo;
				    document.body.appendChild(link);
				    link.click();
				    document.body.removeChild(link);
				    } else {

fetch(rutaArchivo3, { method: 'HEAD' })
        .then(response => {
           			 if (response.ok) {
				    const link = document.createElement('a');
				    link.href = rutaArchivo3;
				    link.download = nombreArchivo;
				    document.body.appendChild(link);
				    link.click();
				    document.body.removeChild(link);
				    } else {

fetch(rutaArchivo4, { method: 'HEAD' })
        .then(response => {
           			 if (response.ok) {
				    const link = document.createElement('a');
				    link.href = rutaArchivo4;
				    link.download = nombreArchivo;
				    document.body.appendChild(link);
				    link.click();
				    document.body.removeChild(link);
				    } else {

fetch(rutaArchivo5, { method: 'HEAD' })
        .then(response => {
           			 if (response.ok) {
				    const link = document.createElement('a');
				    link.href = rutaArchivo5;
				    link.download = nombreArchivo;
				    document.body.appendChild(link);
				    link.click();
				    document.body.removeChild(link);
				    


				    } else {

			                 alert(`DNI no encontrado`);
			            }}}}}
		        })

        .catch(error => {
            console.error('Error al verificar el archivo:', error);
            alert('Ocurrió un error al verificar la existencia del archivo.');
        });

});