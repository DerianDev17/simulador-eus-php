var idPreguntaEliminar;

function agregarTema() {
    modalTema = document.getElementById("modalTema");
    modalTema.style.display = "block";
}
// Cuando se hace click en Cerrar el modal de la noticia
function cerrarTema() {
    modalTema = document.getElementById("modalTema");
    modalTema.style.display = "none";
}
// Cuando se hace click en Cerrar el modal de la noticia
function cerrarEliminar() {
    modalPregunta = document.getElementById("modalPregunta");
    modalPregunta.style.display = "none";
}

function editarPregunta(idPregunta) {
    window.location.href = "editarpregunta.php?idPregunta=" + idPregunta;
}

function eliminarPregunta() {
    window.location.href = "eliminarpregunta.php?idPregunta=" + idPreguntaEliminar;;
}

function abrirModalEliminar(idPregunta) {
    idPreguntaEliminar = idPregunta;
    modalPregunta = document.getElementById("modalPregunta");
    modalPregunta.style.display = "block";
}

function paginaActiva(id) {
    var paginas = document.querySelectorAll(".icono");
    for (i = 0; i < paginas.length; i++) {
        paginas[i].className = "icono";
    }
    paginas[id].className = "icono selected";
}

function mostrarImagen() {
    const $seleccionArchivos = document.querySelector(".pregunta"),
    $imagenPrevisualizacion = document.querySelector("#mostrarimagenes");

    $seleccionArchivos.addEventListener("change", ()=>{
        const archivos = $seleccionArchivos.files;
        if (!archivos || !archivos.length) {
            $imagenPrevisualizacion.src = "";
            return;
          }
          // Ahora tomamos el primer archivo, el cual vamos a previsualizar
          const primerArchivo = archivos[0];
          // Lo convertimos a un objeto de tipo objectURL
          const objectURL = URL.createObjectURL(primerArchivo);
          // Y a la fuente de la imagen le ponemos el objectURL
          $imagenPrevisualizacion.src = objectURL;
        ;
    })
}