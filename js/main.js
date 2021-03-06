
// Clase 14 Desafío: Tercera Entrega del Proyecto Final


//OCULTA EL INGRESO DE MOZO Y MESA
    $("#local").css({
        "display": "none",});

//AGREGA EL BOTON DE PEDIDO
$("#hacerPedido").append('<button id="btn-pedido" class="menu__item menu__link pedido">Realice su pedido</button>');
$("#recuperarPedido").append('<button id="btn-recuperCuenta" class="menu__link menu__link pedido">Recuperar última cuenta</button>');


let mozo = 0;
let mesa = 0;


// Click del boton pedido
$("#hacerPedido").click(() => {
    //ELIMINAR EL BOTON DE PEDIDO
    $( "#hacerPedido" ).remove();
    $( "#recuperarPedido" ).remove();
    //MUESTRA PARA AGREGAR EL MOZO Y LA MESA
    // document.getElementById("local").style.display = "block";
    $("#local").css({
        "display": "block",});
    let local = document.getElementById("local");
    local.addEventListener("submit", validarFormulario);
    function validarFormulario(e) {
        e.preventDefault();
        let salon = e.target

        mozo = parseInt(salon.children[1].value);
        mesa = parseInt(salon.children[3].value);
    }
});

let comida = 0;
let cantidadComida = 0;
let precioComida = 0;
let bebida = 0;
let cantidadBebida = 0;
let precioBebida = 0;

// Click del boton DE MOZO Y MESA
$("#addLocal").click(() => {

    //OCULTA EL INGRESO DE MOZO Y MESA
    document.getElementById("local").style.display = "none";

    let miFormulario = document.createElement("formulario");
    miFormulario.innerHTML = ` <form id="formulario">
                                    <div>
                                        <h2>¿Qué va a comer?</h2><br>
                                        1: Pancho ($100)<br>
                                        2: Hamburguesa ($350)<br>
                                        3: Picada ($700)<br>
                                        4: Tostados ($200)<br>
                                        5: Otra comida<br>
                                        Introduce el número junto a la opción:<br>
                                    </div>
                                    <input type="number">
                                    <div>
                                        Ingresa la cantidad:<br>
                                    </div>
                                    <input type="number">
                                    <div><br>
                                        <h2>¿Qué vas a tomar?</h2><br>
                                        1: Gaseosa ($150)<br>
                                        2: Agua ($100)<br>
                                        3: Jugo ($200)<br>
                                        4: Agua gasificada ($120)<br>
                                        5: Otra bebida<br>
                                        Introduce el número junto a la opción:<br>
                                    </div>
                                    <input type="number">
                                    <div>
                                        Ingresa la cantidad:<br>
                                    </div>
                                    <input type="number"><br>
                                    <input type="submit" value="Enviar">
                                </form>`
    pedido.appendChild(miFormulario);

    miFormulario.addEventListener("submit", validarFormulario);
    function validarFormulario(e) {
        //Cancelamos el comportamiento del evento
        e.preventDefault();
        //Obtenemos el elemento desde el cual se disparó el evento
        let formulario = e.target;

        if (formulario.children[1].value.length == 0 || parseInt(formulario.children[1].value) == 0 || parseInt(formulario.children[1].value) > 5 || parseInt(formulario.children[1].value) < 0) {
            alert("Tiene que ingresar una opcion de comida del 1 al 5");
            return 0;
        }
        if (formulario.children[3].value.length == 0 || parseInt(formulario.children[3].value) == 0) {
            alert("Tiene que ingresar la cantidad de comida");
            return 0;
        }
        if (formulario.children[5].value.length == 0 || parseInt(formulario.children[5].value) == 0 || parseInt(formulario.children[5].value) > 5 || parseInt(formulario.children[5].value) < 0) {
            alert("Tiene que ingresar una opcion de bebida del 1 al 5");
            return 0;
        }
        if (formulario.children[7].value.length == 0 || parseInt(formulario.children[7].value) == 0) {
            alert("Tiene que ingresar la cantidad de bebida");
            return 0;
        }

        comida = parseInt(formulario.children[1].value);
        cantidadComida = parseInt(formulario.children[3].value);
        bebida = parseInt(formulario.children[5].value);
        cantidadBebida = parseInt(formulario.children[7].value);

        const pedidoComida = [
            { id: 1, comida: 'Pancho', precioComida: 100 },
            { id: 2, comida: 'Hamburguesa', precioComida: 350 },
            { id: 3, comida: 'Picada', precioComida: 700 },
            { id: 4, comida: 'Tostados', precioComida: 200 },
        ];

        if (comida == 1) {
            comida = pedidoComida[0].comida;
            precioComida = pedidoComida[0].precioComida;
        }
        else if (comida == 2) {
            comida = pedidoComida[1].comida;
            precioComida = pedidoComida[1].precioComida;
        }
        else if (comida == 3) {
            comida = pedidoComida[2].comida;
            precioComida = pedidoComida[2].precioComida;
        }
        else if (comida == 4) {
            comida = pedidoComida[3].comida;
            precioComida = pedidoComida[3].precioComida;
        }
        else if (comida == 5) {
            let entradaComida = prompt("Ingresar otra comida");
            let entradaPrecioComida;
            while (!entradaPrecioComida || entradaPrecioComida == 0 || entradaPrecioComida < 0) {
                entradaPrecioComida = parseInt(prompt("ingresa precio de otra comida"));
            }
            pedidoComida.push({ id: (comida), comida: (entradaComida), precioComida: (entradaPrecioComida) });
            comida = pedidoComida[4].comida;
            precioComida = pedidoComida[4].precioComida;
        }
        else {
            comida = 0;
        }
        const pedidoBebida = [
            { id: 1, bebida: "Gaseosa", precioBebida: 150 },
            { id: 2, bebida: "Agua", precioBebida: 100 },
            { id: 3, bebida: "Jugo", precioBebida: 200 },
            { id: 4, bebida: "Agua gasificada", precioBebida: 120 },
        ]

        if (bebida == 1) {
            bebida = pedidoBebida[0].bebida;
            precioBebida = pedidoBebida[0].precioBebida;
        }
        else if (bebida == 2) {
            bebida = pedidoBebida[1].bebida;
            precioBebida = pedidoBebida[1].precioBebida;
        }
        else if (bebida == 3) {
            bebida = pedidoBebida[2].bebida;
            precioBebida = pedidoBebida[2].precioBebida;
        }
        else if (bebida == 4) {
            bebida = pedidoBebida[3].bebida;
            precioBebida = pedidoBebida[3].precioBebida;
        }
        else if (bebida == 5) {
            let entradaBebida = prompt("Ingresar otra bebida");
            let entradaPrecioBebida;
            while (!entradaPrecioBebida || entradaPrecioBebida == 0 || entradaPrecioBebida < 0) {
                entradaPrecioBebida = parseInt(prompt("Ingresa precio de otra bebida"));
            }
            pedidoBebida.push({ id: (bebida), bebida: (entradaBebida), precioBebida: (entradaPrecioBebida) });
            bebida = pedidoBebida[4].bebida;
            precioBebida = pedidoBebida[4].precioBebida;
        }
        else {
            bebida = 0;
        }

        // ELIMINAR miFormulario
        $( "#miFormulario" ).remove();
        // CORRE LA FUNCION
        correr()
    }
});

function correr() {

    class Pedido {
        constructor(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida) {
            this.comida = comida;
            this.cantidadComida = cantidadComida;
            this.precioComida = precioComida;
            this.bebida = bebida;
            this.cantidadBebida = cantidadBebida;
            this.precioBebida = precioBebida;
            this.propina = 0;
            this.porcentajePropina = 0;
            this.iva = 0;
            this.descuento = 0;
            this.cuenta = 0;
            this.total = 0;
        }

        calcularCuenta() {
            this.cuenta = (this.cantidadComida * this.precioComida) + (this.cantidadBebida * this.precioBebida)
        }

        calcularIva() {
            this.iva = this.cuenta * 0.21;
        }

        aplicarDescuento() {
            if (this.cuenta >= 2500) {
                this.descuento = this.cuenta * -0.1;
                this.total = this.cuenta + this.descuento;
            }
            else {
                this.total = this.cuenta;
            }
        }

        darPropina() {
            this.propina = confirm("¿Te Gustaría dejar propina?");

            if (this.propina) {
                while (!this.porcentajePropina || this.porcentajePropina <= 0) {
                    this.porcentajePropina = parseFloat(prompt("¿QUE %? (Solo números)"));
                }
                this.propina = this.cuenta * this.porcentajePropina / 100;
                this.total = this.total + this.propina;
            } else {
                this.propina = 0;
            }
        }
    }

    function tomarPedido() {
        return new Pedido(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida);
    }

    const pedido = new tomarPedido();
    pedido.calcularCuenta();
    pedido.calcularIva();
    pedido.aplicarDescuento();
    pedido.darPropina();

    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <h3>RestoBar AB</h3>
<h1>Mozo: ${mozo}</h1> <h1>Mesa: ${mesa}</h1>
<p>==========================</p>
<h3>Detalle de la cuenta:</h3>
<p>- ${pedido.cantidadComida} ${pedido.comida} x $${pedido.precioComida} = $${pedido.cantidadComida * pedido.precioComida}</p>
<p>- ${pedido.cantidadBebida} ${pedido.bebida} x $${pedido.precioBebida} = $${pedido.cantidadBebida * pedido.precioBebida}</p>
<p>--------------------------</p>
<p>SubTotal = $${pedido.cuenta} (iva = $${pedido.iva})</p>
<p>- Descuento = $${pedido.descuento}</p>
<p>- Propina = $${pedido.propina} (% = ${pedido.porcentajePropina})</p>
<p>==========================</p>

<h3><b>Total = $${pedido.total}</b></h3>

<button id="eliminar" class="eliminar">Eliminar</button>`

    cuenta.appendChild(contenedor);

    misCuentas.push({
        mozo: (mozo),
        mesa: (mesa),
        cantidadComida: (pedido.cantidadComida),
        comida: (pedido.comida),
        precioComida: (pedido.precioComida),
        bebida: (pedido.bebida),
        cantidadBebida: (pedido.cantidadBebida),
        precioBebida: (pedido.precioBebida),
        propina: (pedido.propina),
        porcentajePropina: (pedido.porcentajePropina),
        iva: (pedido.iva),
        descuento: (pedido.descuento),
        cuenta: (pedido.cuenta),
        total: (pedido.total)
    });

    guardarCuentaLocalStorage()
    $("#eliminar").click(() => {
        eliminar()
        actualizar()
    });
};

function eliminar() {
    cuenta.innerHTML = "";
    pedido.innerHTML = "";
};
function actualizar() {
    location.reload()
};

const misCuentas = [];

function guardarCuentaLocalStorage() {
    localStorage.setItem('misCuentas', JSON.stringify(misCuentas));
}



// RECUPERA LA ULTIMA CUENTAS GUARDADA EN EL LOCALSTORAGE

$("#recuperarPedido").click(() => {
    //ELIMINAR EL BOTON DE PEDIDO
    $( "#hacerPedido" ).remove();
    $( "#recuperarPedido" ).remove();


    let guardado = JSON.parse(localStorage.getItem('misCuentas'));
    for (const producto of guardado) {
        let contenedor2 = document.createElement("div");
        contenedor2.innerHTML = `
    <h3>RestoBar AB</h3>
<h1>Mozo: ${producto.mozo}</h1> <h1>Mesa: ${producto.mesa}</h1>
<p>==========================</p>
<h3>Detalle de la cuenta:</h3>
<p>- ${producto.cantidadComida} ${producto.comida} x $${producto.precioComida} = $${producto.cantidadComida * producto.precioComida}</p>
<p>- ${producto.cantidadBebida} ${producto.bebida} x $${producto.precioBebida} = $${producto.cantidadBebida * producto.precioBebida}</p>
<p>--------------------------</p>
<p>SubTotal = $${producto.cuenta} (iva = $${producto.iva})</p>
<p>- Descuento = $${producto.descuento}</p>
<p>- Propina = $${producto.propina} (% = ${producto.porcentajePropina})</p>
<p>==========================</p>

<h3><b>Total = $${producto.total}</b></h3>

<button id="eliminar" class="eliminar">Eliminar</button>`
        $("#cuenta").append(contenedor2);
        $("#eliminar").click(() => {
            eliminar()
            actualizar()
        });
    }
});


//Agregamos un botón y un div con jQuery
$(".btn-mostrar").append('<button id="btn-mostrar1">Mostrar</button>');
$(".fotos").prepend(`<div id="fotos1" style="height: 100px">
<img src="multimedia/imagen1.jpeg" alt="" class="gallery--img">
    <h4>Sorpresa</h4>
    </div>`);
//Usamos toggle sobre div1 en respuesta al click del botòn btn1
$("#btn-mostrar1").click(() => {
    $("#fotos1").toggle("fast");
});