let clicks=0
let clicksAñadidos=1
let i=0;
const jalapeño = document.getElementById("Jalapeño")
const texto = document.getElementById("textoJalapeño")

function contarClicks() {
    clicks+=clicksAñadidos
    textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    verificarVictoria()
    document.getElementById("p").innerHTML = "Llevas " + clicks + " jalapeños."
}
function comprarClicks(clicka, precio) {
    if (clicks>=precio) {
        clicks-=precio
        clicksAñadidos+=clicka
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    }
    else {
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    }
}
function mostrarTienda() {
    if (i%2==0) {
        document.getElementById("tienda").style.display="block"
        document.getElementById("main").style.display="none"
        i++
        document.getElementById("porPeticionDeJustinho").innerHTML = 'Volver'

    }
    else {
        document.getElementById("main").style.display="block"
        document.getElementById("tienda").style.display="none"
        i++
        document.getElementById("porPeticionDeJustinho").innerHTML = 'Tienda'

    }
    verificarVictoria()
}
function comprarSkin(foto, precio) {
    if (clicks>=precio) {
        clicks-=precio
        document.getElementById("Jalapeño").src = foto
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    }
}
function verificarVictoria() {
    console.log(clicks);
    if (clicks >=10000000000) {
        document.getElementById('main').style.display = "none";
        document.getElementById('pantallaVictoria').style.display = 'flex';
    }
}
function secreta() {
    clicks+=1000000
    textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    mostrarTienda()
}