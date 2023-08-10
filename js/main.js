function validarActividad(actividad) {
  const actividadesValidas = ["Campamento", "Bicicleteada", "Trekking", "Cocina rústica", "Canotaje", "Escalada"];
  
  if (actividadesValidas.includes(actividad)) {
    alert("Ingresaste una actividad: " + actividad);
  } else {
    alert("¡Error! La actividad ingresada no se encuentra en la lista.");
  }
}

alert("Bienvenido a Vida en la Naturaleza. Te compartimos las diferentes actividades y elige la que desees para recibir más información! Campamento; Bicicleteada; Trekking; Cocina rústica; Canotaje; Escalada");

let actividad = prompt("Ingresa una actividad. Para salir ingresa 0");

while (actividad !== "0") {
  validarActividad(actividad);
  
  actividad = prompt("Ingresa otra actividad. Para salir ingresa 0");
}

alert("Gracias por confiar en nosotros, te esperamos!");
