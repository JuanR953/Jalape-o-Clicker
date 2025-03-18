clicks=0;
i=0
aumentoClicks=1


function mostrarTienda() {
    if (i%2==0) {
        document.getElementById('aside').style.display = "block";
        document.getElementById('main').style.display = "none";
        i++
    }
    else {
        document.getElementById('main').style.display = "block";
        document.getElementById('aside').style.display = "none";
        i++
        document.getElementById('main').style.display = 'flex';
        document.getElementById('main').style.flexDirection = 'column';
        document.getElementById('main').style.alignItems = 'center';    
    }
}

function sumarClick() {
    clicks+=aumentoClicks;
    document.getElementById('contador').textContent = 'Llevas ' + clicks + ' jalapeños.';
    ganaste()
}

function aumentarClicks(masClicks, precio) {
    if (clicks>=precio) {
        aumentoClicks+=masClicks;
        clicks-=precio
        document.getElementById('contador').textContent = 'Llevas ' + clicks + ' jalapeños.';
    }
    else {
    alert(`Este aumento cuesta ${precio} jalapeños. Usted tiene ${clicks} jalapeños. Le faltan ${precio-clicks} jalapeños.`)
    }
}
function multiplicarClicks(aumento, precio) {
    if (clicks>=precio) {
        clicks*=aumento;
        document.getElementById('contador').textContent = 'Llevas ' + clicks + ' jalapeños.';
        setTimeout(() => {
            alert(`Sus ingresos totales fueron multiplicados por ${aumento}`)
        }, 1)    
    }
    else {
    alert(`Este aumento cuesta ${precio} jalapeños. Usted tiene ${clicks} jalapeños. Le faltan ${precio-clicks} jalapeños.`)
}
}
function ganaste() {
    if (clicks>=1000000) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('section').style.display = 'block';      
        document.getElementById('boton').disabled = true;
    }
}