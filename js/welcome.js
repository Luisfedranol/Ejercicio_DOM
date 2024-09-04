const btnEliminar = document.getElementById("btnEliminar")
const mensaje = document.getElementById("mensaje")

window.addEventListener("load", function(event){
    if(this.localStorage.getItem("nombre") != null){
        mensaje.innerHTML = `Hola ${this.localStorage.getItem("nombre")}, bienvenido de nuevo`
    }
})

btnEliminar.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.removeItem("nombre")
    //location.href = "welcome.html"
    history.go(0)
})