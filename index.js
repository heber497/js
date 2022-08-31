

function inicio () {
    alert ("Bienvenidos a nwwPC. Importamos Netbook al mejor precio!");
    let usuario = prompt ("Ingresa tu nombre:");
    alert ("Hola " +usuario+" "+ "Mira la lista de los nuevos ingresos de este mes.")
}

function productos() {
    let lista;
    do {
        lista = parseInt(prompt ("\n1 : Netbook modelo estudio marca Bangho con un valor de: $350. \n2 : Netbook modelos diseño marca Dell con un valor de: $600. \n3 : Netbook modelo gamer marca Asus con un valor de: $1000. "));}
        while (lista!=1 && lista!=2 && lista!=3) 
      
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
    }
    else if (lista === "Modelo Diseño") { 
        return 600;
    }
    else if (lista === "Modelo Gamer"){ 
        return 1000;
    }
  else{
    alert("no existe esa opcion");
  }
   
}


function pagar (cantidad, costo) {
    alert("Usted seleccionó lo siguiente: " +cantidad +"\nCosto: $"+costo);
    let dinero = parseInt (prompt ("¿Con cuanto pagara?"))
    if (dinero>= costo) {
        alert ("exelente , su vuelto es " + "$" + (dinero - costo) + "," + " solo queda cordinar la entrega. Muchas gracias.")
    } else {
        alert ("lo siento. es poco dinero")
    }
    }




inicio();
let cantidad =  productos();
let valor = costo (cantidad);
pagar (cantidad,valor); 

