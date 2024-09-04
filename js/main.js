const btnGuardar = document.getElementById("btnGuardar")
const txtName = document.getElementById("Name")

btnGuardar.addEventListener("click", function(event){
    event.preventDefault()
    if (txtName.value.length < 3) {
        txtName.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
        return false
    }

    localStorage.setItem("nombre", txtName.value)

    txtName.value = ""
})