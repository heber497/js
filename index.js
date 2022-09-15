function inicio() {
  alert("Bienvenidos a nwwPC. Importamos Netbook al mejor precio!");
  let usuario = prompt("Ingresa tu nombre:");
  alert(
    "Hola " +
      usuario +
      " " +
      "Mira la lista de los nuevos ingresos de este mes."
  );
}

function productos() {
  let lista;
  do {
    lista = parseInt(
      prompt(
        "\n1 : Netbook modelo estudio marca Bangho con un valor de: $350. \n2 : Netbook modelos diseño marca Dell con un valor de: $600. \n3 : Netbook modelo gamer marca Asus con un valor de: $1000. "
      )
    );
  } while (lista != 1 && lista != 2 && lista != 3);

  switch (lista) {
    case 1:
      return "Modelo Estudiante";
    case 2:
      return "Modelo Diseño";
    case 3:
      return "Modelo Gamer";
  }
}

function costo(lista) {
  if (lista === "Modelo Estudiante") {
    return 350;
  } else if (lista === "Modelo Diseño") {
    return 600;
  } else if (lista === "Modelo Gamer") {
    return 1000;
  } else {
    alert("no existe esa opcion");
  }
}

function pagar(cantidad, costo) {
  alert("Usted seleccionó lo siguiente: " + cantidad + "\nCosto: $" + costo);
  let dinero = parseInt(prompt("¿Con cuanto pagara?"));
  if (dinero >= costo) {
    alert(
      "exelente , su vuelto es " +
        "$" +
        (dinero - costo) +
        "," +
        " solo queda cordinar la entrega. Muchas gracias."
    );
  } else {
    alert("lo siento. es poco dinero");
  }
}

inicio();
let cantidad = productos();
let valor = costo(cantidad);
pagar(cantidad, valor);

// const boton = document.querySelector("#boton");
// const texto = document.querySelector("p");

// boton.addEventListener("click", () => {
//   if (texto.classList.contains("caracteristicas")) {
//     texto.classList.remove("caracteristicas");
//   } else {
//     texto.classList.add("caracteristicas");
//   }
// });

let final = document.getElementById("producto");
final.innerHTML =
  "<h2> gracias por tu compra espero que difrute su netbook modelo<h2>" +
  cantidad;

// document.body.appendChild(final);

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
