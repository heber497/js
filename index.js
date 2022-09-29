class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

class Carrito {
  constructor(id) {
    this.id = id;
    this.productos = [];
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio;
    }
    return total;
  }
}

/* FUNCIONES */

function main() {
  confirmarCompra();
  btnVaciarCarro();
}

function individualTarjeta(producto) {
  let tarjetaIndividual = ` 
                <div class="card" >
                <img src="../public/img/${producto.imagen}" alt="">
                <h5>${producto.nombre}</h5>
                <p>$ ${producto.precio}</p>
                <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carro</a>
            </div>`;

  return tarjetaIndividual;
}

function tarjetaCarro(producto) {
  let carroTarjeta = `
                        <hr><div class="tarjeta-carrito">
                            <div class="imagen">
                                <img src="../public/img/${producto.imagen}" alt="">
                            </div>
                            <div >
                                <h5>${producto.nombre}</h5>
                            </div>
                            <div>
                                <h5>$ ${producto.precio}</h5>
                            </div>
                        </div><hr>`;
  return carroTarjeta;
}

function limpiarCarrito() {
  let divCarrito = document.querySelector("#carrito");
  divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
  let divCarrito = document.querySelector("#carrito");
  carrito.productos.forEach((producto) => {
    divCarrito.innerHTML += tarjetaCarro(producto);
  });
  divCarrito.innerHTML += `<h1>Total: $ ${carrito.calcularTotal()}</h1>`;
}

function renovarStorage() {
  localStorage.removeItem("carrito");
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// function obtenerProductosLocalStorage() {
//   let productosAlmacenados = localStorage.getItem("productos");
//   if (productosAlmacenados !== null) {
//     Producto = JSON.parse(productosAlmacenados);
//   }
// }

/* CARGAR CARRITO EXISTENTE */

window.addEventListener("DOMContentLoaded", (e) => {
  let storage = JSON.parse(localStorage.getItem("carrito"));
  let carritoGuardado = new Carrito(storage.id, storage.productos);
  storage.productos.forEach((producto) => {
    carritoGuardado.productos.push(producto);
  });
  limpiarCarrito();
  actualizarCarrito(carritoGuardado);
});

/* GENERACION CATALOGO DE PRODUCTOS*/

let Catalogo = [];

let producto1 = new Producto(1, "M.Estudiante", 350, "Bangho.png");
let producto2 = new Producto(2, "M.Diseño", 650, "Dell.png");
let producto3 = new Producto(3, "M.Gamer", 1000, "asus tuf.png");
let producto4 = new Producto(4, "M.Pro-Gamer", 2000, "asus pro.png");

Catalogo.push(producto1);
Catalogo.push(producto2);
Catalogo.push(producto3);
Catalogo.push(producto4);

/* GENERACION DE TARJETAS DE PRODUCTOS*/

let tarjetasDiv = document.querySelector("#tarjetas");
Catalogo.forEach((producto) => {
  tarjetasDiv.innerHTML += individualTarjeta(producto);
});

/* carrito De un producto */

let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    let productoSeleccionado = Catalogo.find(
      (producto) => producto.id == e.target.id
    );
    carrito.productos.push(productoSeleccionado);
    limpiarCarrito();
    actualizarCarrito(carrito);
    renovarStorage();
  });
});

// class Producto {
//   constructor(id, nombre, precio, imagen) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// class Carrito {
//   constructor(id) {
//     this.id = id;
//     this.productos = [];
//   }

//   calcularTotal() {
//     let total = 0;
//     for (let i = 0; i < this.productos.length; i++) {
//       total += this.productos[i].precio;
//     }
//     return total;
//   }
// }

// /* FUNCIONES */

// function individualTarjeta(producto) {
//   let tarjetaIndividual = `
//                 <div class="card" >
//                 <img src="../public/img/${producto.imagen}" alt="">
//                 <h5>${producto.nombre}</h5>
//                 <p>$ ${producto.precio}</p>
//                 <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al carro</a>
//             </div>`;

//   return tarjetaIndividual;
// }

// function tarjetaCarro(producto) {
//   let carroTarjeta = `
//                         <hr><div class="tarjeta-carrito">
//                             <div class="imagen">
//                                 <img src="../public/img/${producto.imagen}" alt="">
//                             </div>
//                             <div >
//                                 <h5>${producto.nombre}</h5>
//                             </div>
//                             <div>
//                                 <h5>$ ${producto.precio}</h5>
//                             </div>
//                         </div><hr>`;
//   return carroTarjeta;
// }

// function limpiarCarrito() {
//   let divCarrito = document.querySelector("carrito");
//   divCarrito.innerHTML = "";
// }

// function actualizarCarrito(carrito) {
//   let divCarrito = document.querySelector("#carrito");
//   carrito.productos.forEach((producto) => {
//     divCarrito.innerHTML += tarjetaCarro(producto);
//   });
//   divCarrito.innerHTML += `<h1>Total: $ ${carrito.calcularTotal()}</h1>`;
// }

// function renovarStorage() {
//   localStorage.removeItem("carrito");
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }

// // function obtenerProductosLocalStorage() {
// //   let productosAlmacenados = localStorage.getItem("productos");
// //   if (productosAlmacenados !== null) {
// //     Producto = JSON.parse(productosAlmacenados);
// //   }
// // }

// /* CARGAR CARRITO EXISTENTE */

// window.addEventListener("DOMContentLoaded", (e) => {
//   let storage = JSON.parse(localStorage.getItem("carrito"));
//   let carritoGuardado = new Carrito(storage.id, storage.productos);
//   storage.productos.forEach((producto) => {
//     carritoGuardado.productos.push(producto);
//   });
//   limpiarCarrito();
//   actualizarCarrito(carritoGuardado);
// });

// /* GENERACION CATALOGO DE PRODUCTOS*/

// let Catalogo = [];

// let producto1 = new Producto(1, "M.Estudiante", 350, "Bangho.png");
// let producto2 = new Producto(2, "M.Diseño", 650, "Dell.png");
// let producto3 = new Producto(3, "M.Gamer", 1000, "asus tuf.png");
// let producto4 = new Producto(4, "M.Pro-Gamer", 2000, "asus pro.png");

// Catalogo.push(producto1);
// Catalogo.push(producto2);
// Catalogo.push(producto3);
// Catalogo.push(producto4);

// /* GENERACION DE TARJETAS DE PRODUCTOS*/

// let tarjetasDiv = document.querySelector("#tarjetas");
// Catalogo.forEach((producto) => {
//   tarjetasDiv.innerHTML += individualTarjeta(producto);
// });

// /* carrito De un producto */

// let carrito = new Carrito(1);
// let botones = document.querySelectorAll(".botonDeCompra");
// let arrayDeBotones = Array.from(botones);
// arrayDeBotones.forEach((boton) => {
//   boton.addEventListener("click", (e) => {
//     let productoSeleccionado = Catalogo.find(
//       (producto) => producto.id == e.target.id
//     );

//     carrito.productos.push(productoSeleccionado);
//     limpiarCarrito();
//     actualizarCarrito(carrito);
//     renovarStorage();
//   });
// });

//
//
//
//
// function inicio() {
//   alert("Bienvenidos a nwwPC. Importamos Netbook al mejor precio!");
//   let usuario = prompt("Ingresa tu nombre:");
//   alert(
//     "Hola " +
//       usuario +
//       " " +
//       "Mira la lista de los nuevos ingresos de este mes."
//   );
// }

// function productos() {
//   let lista;
//   do {
//     lista = parseInt(
//       prompt(
//         "\n1 : Netbook modelo estudio marca Bangho con un valor de: $350. \n2 : Netbook modelos diseño marca Dell con un valor de: $600. \n3 : Netbook modelo gamer marca Asus con un valor de: $1000. "
//       )
//     );
//   } while (lista != 1 && lista != 2 && lista != 3);

//   switch (lista) {
//     case 1:
//       return "Modelo Estudiante";
//     case 2:
//       return "Modelo Diseño";
//     case 3:
//       return "Modelo Gamer";
//   }
// }

// function costo(lista) {
//   if (lista === "Modelo Estudiante") {
//     return 350;
//   } else if (lista === "Modelo Diseño") {
//     return 600;
//   } else if (lista === "Modelo Gamer") {
//     return 1000;
//   } else {
//     alert("no existe esa opcion");
//   }
// }

// function pagar(cantidad, costo) {
//   alert("Usted seleccionó lo siguiente: " + cantidad + "\nCosto: $" + costo);
//   let dinero = parseInt(prompt("¿Con cuanto pagara?"));
//   if (dinero >= costo) {
//     alert(
//       "exelente , su vuelto es " +
//         "$" +
//         (dinero - costo) +
//         "," +
//         " solo queda cordinar la entrega. Muchas gracias."
//     );
//   } else {
//     alert("lo siento. es poco dinero");
//   }
// }

// inicio();
// let cantidad = productos();
// let valor = costo(cantidad);
// pagar(cantidad, valor);

// const verMasEstudiante = document.querySelector("#verMasEstudiante");
// const textoEstudiante = document.querySelector("p");

// verMasEstudiante.addEventListener("click", () => {
//   if (textoEstudiante.classList.contains("caracteristicas")) {
//     textoEstudiante.classList.remove("caracteristicas");
//   } else {
//     textoEstudiante.classList.add("caracteristicas");
//   }
// });

// const verMasDisenio = document.querySelector("#verMasDisenio");
// const textoDisenio = document.getElementById("textoDisenio");

// verMasDisenio.addEventListener("click", () => {
//   if (textoDisenio.classList.contains("caracteristicas")) {
//     textoDisenio.classList.remove("caracteristicas");
//   } else {
//     textoDisenio.classList.add("caracteristicas");
//   }
// });

// const verMasGamer = document.querySelector("#verMasGamer");
// const textoGamer = document.getElementById("textoGamer");

// verMasGamer.addEventListener("click", () => {
//   if (textoGamer.classList.contains("caracteristicas")) {
//     textoGamer.classList.remove("caracteristicas");
//   } else {
//     textoGamer.classList.add("caracteristicas");
//   }
// });

// console.log(verMasGamer);

// verMasGamer.addEventListener("click", () => {});

// let final = document.getElementById("producto");
// final.innerHTML =
//   "<h2> gracias por tu compra espero que difrutes tu netbook modelo:<h2>" +
//   " " +
//   cantidad;

// document.body.appendChild(final);

// function filtraNetbook(netbooks, filtro) {
//   const filtrado = netbooks.filter((el) => {
//     return el.marca.includes(filtro);
//   });
//   return filtrado;
// }
// let ingreso = prompt(
//   "Antes de empesar? tenes experiensa en hadware pc? Queres sabes mas detalle de los equipos que tenemos 💻😋? Escribe la marca de los productos publicados y lo veras reflejado por consola 😎"
// );

// const resultado = filtraNetbook(netbooks, ingreso);

// console.log(resultado);

// const netbooks = [
//   {
//     id: 1,
//     marca: "bangho",
//     modelo: "estudiante",
//     caracteristica:
//       "Max L4 i1 gris oscura 14" +
//       "," +
//       "Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home",
//   },
//   {
//     id: 2,
//     marca: "dell",
//     modelo: "diseño",
//     caracteristica: "Inspiron 15 4580 I5 Win11 256ssd 8g Ram gtx 1650",
//   },
//   {
//     id: 3,
//     marca: "asus",
//     modelo: "gamer",
//     caracteristica: "Tuf Core I7 16gb Ssd 512gb Rtx 3060",
//   },
// ];
// function inicio() {
//   alert("Bienvenidos a nwwPC. Importamos Netbook al mejor precio!");
//   let usuario = prompt("Ingresa tu nombre:");
//   alert(
//     "Hola " +
//       usuario +
//       " " +
//       "Mira la lista de los nuevos ingresos de este mes."
//   );
// }
