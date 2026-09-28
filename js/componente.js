/**
 * Muestra una notificación visual tipo Toast.
 * @param {string} mensaje - Texto que se mostrará.
 * @param {string} tipo - Tipo de notificación: exito, error o info.
 */
function mostrarToast(mensaje, tipo) {

    let toast = document.createElement("div");

    toast.className = "toast " + tipo;
    let texto = document.createElement("span");

    texto.textContent = mensaje;
    let cerrar = document.createElement("button");

    cerrar.textContent = "×";

    cerrar.addEventListener("click", function() {

        toast.remove();

    });

    toast.appendChild(texto);

    toast.appendChild(cerrar);

    document.body.appendChild(toast);


    setTimeout(function() {

        toast.remove();

    }, 4000);

}