alert("Bienvenido a Vida en la Naturaleza. Te compartimos las diferentes actividades y elige la que desees para recibir más información! Campamento; Bicicleteada; Trekking; Cocina rústica; Canotaje; Escalada");

let actividad = prompt("Ingresa una actividad. Para salir ingresa 0");

while (actividad !== "0") {
  if (actividad === "Campamento" || actividad === "Bicicleteada" || actividad === "Trekking" || actividad === "Cocina rústica" || actividad === "Canotaje" || actividad === "Escalada") {
    alert("Ingresaste una actividad: " + actividad);
  } else {
    alert("¡Error! La actividad ingresada no se encuentra en la lista.");
  }
  
  actividad = prompt("Ingresa otra actividad. Para salir ingresa 0");
}

alert("Gracias por confiar en nosotros, te esperamos!");
