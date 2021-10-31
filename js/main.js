
// Clase 09 Desafío: Interactuar con HTML

let contenedor = document.createElement("hacerPedido");
contenedor.innerHTML = `<button id="btn-pedido" class="menu__item menu__link pedido">Realice su pedido</button>`
hacerPedido.appendChild(contenedor);
// COMO ELIMINAR EL BOTON DE PEDIDO?
hacerPedido.addEventListener("click", respuestaClick2)
function respuestaClick2() {
    hacerPedido.parentNode.removeChild(hacerPedido);
}

// Click del boton pedido
let boton = document.getElementById("btn-pedido");
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Respuesta evento");
    let miFormulario = document.createElement("formulario");
    miFormulario.innerHTML = `<form id="formulario">
                                <div>
                                "¿Qué va a comer? Introduce el número junto a la opción:<br>
                                1: Pancho ($100)<br>
                                2: Hamburguesa ($350)<br>
                                3: Picada ($700)<br>
                                4: Tostados ($200)<br>
                                5: Otra comida"
                                </div>
                                <input type="text">
                                <input type="text">
                                <input type="submit" value="Enviar">
                            </form>`
    pedido.appendChild(miFormulario);

    miFormulario.addEventListener("submit", validarFormulario);
    function validarFormulario(e) {
        //Cancelamos el comportamiento del evento
        e.preventDefault();
        //Obtenemos el elemento desde el cual se disparó el evento
        let formulario = e.target
        //Obtengo el valor del primero hijo <input type="text">
        console.log(formulario.children[0].value);
        //Obtengo el valor del segundo hijo <input type="number">
        console.log(formulario.children[1].value);

        correr();
    }

}

// let parrafo      = document.getElementById("parrafo1");
// //Elminando el propio elemento, referenciando al padre
// parrafo.parentNode.removeChild(parrafo);

// let paises       = document.getElementsByClassName("paises");
// //Eliminando el primer elemento de clase paises
// paises[0].parentNode.removeChild(paises[0])






function correr() {

    let comida = 0;
    let cantidadComida = 0;
    let precioComida = 0;
    let bebida = 0;
    let cantidadBebida = 0;
    let precioBebida = 0;

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

        const pedidoComida = [
            { id: 1, comida: 'Pancho', precioComida: 100 },
            { id: 2, comida: 'Hamburguesa', precioComida: 350 },
            { id: 3, comida: 'Picada', precioComida: 700 },
            { id: 4, comida: 'Tostados', precioComida: 200 },
        ];

        while (!comida || comida == 0 || comida > 5 || comida < 0) {
            comida = parseInt(prompt(
                "¿Qué va a comer? Introduce el número junto a la opción:\n 1: Pancho ($100),\n 2: Hamburguesa ($350),\n 3: Picada ($700),\n 4: Tostados ($200),\n 5: Otra comida"));

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
        }

        while (!cantidadComida || cantidadComida == 0 || cantidadComida < 0) {
            cantidadComida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
        }

        const pedidoBebida = [
            { id: 1, bebida: "Gaseosa", precioBebida: 150 },
            { id: 2, bebida: "Agua", precioBebida: 100 },
            { id: 3, bebida: "Jugo", precioBebida: 200 },
            { id: 4, bebida: "Agua gasificada", precioBebida: 120 },
        ]

        while (!bebida || bebida == 0 || bebida > 5 || bebida < 0) {
            bebida = parseInt(prompt("¿Qué le gustaría beber? Introduce el número junto a la opción:\n 1: Gaseosa ($150),\n 2: Agua ($100),\n 3: Jugo ($200),\n 4: Agua gasificada ($120),\n 5: Otra bebida"));

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
        }

        while (!cantidadBebida || cantidadBebida == 0 || cantidadBebida < 0) {
            cantidadBebida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"))
        }

        return new Pedido(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida);
    }



    const pedido = new tomarPedido();
    pedido.calcularCuenta();
    pedido.calcularIva();
    pedido.aplicarDescuento();
    pedido.darPropina();

    
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Detalle de la cuenta:</h3>
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
    let elimina = document.getElementById("eliminar");
    elimina.addEventListener("click", eliminar);

};


function eliminar() {
        cuenta.innerHTML = "";
        pedido.innerHTML = "";
        hacerPedido.appendChild(contenedor);
};

// function otroPedido() {
//     eliminar();
//     correr();
// }
// <input type="button" class="menu__item menu__link pedido" value="Realice su pedido" onclick=" otroPedido() "></input>








