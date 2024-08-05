const aventura = {
  textos: {
    texto1:
      "Vas caminando por un parque de diversiones oscuro. Delante de ti hay dos caminos:\n1 - Izquierda\n2 - Derecha",
    texto2:
      "El camino hacia la izquierda te lleva a un laberinto abandonado.\n1 - Intentas cruzarlo\n2 - Vuelves hacia atras y regresas",
    texto3:
      "El camino hacia la derecha te conduce a una carpa de circo.\n1 - Entro a la carpa\n2 - Continúo caminando",
  },

  opciones: {
    opcionesizq: {
      1: "Te pierdes dentro del laberinto y nunca te encuentran. ¡Es el fin!",
      2: "Al regresar, descubres que el parque ya no está abandonado y encuentras a tus amigos, así que te unes a ellos para disfrutar. ¡Lo lograste!",
    },
    opcionesder: {
      1: "Al entrar en la carpa, te encuentras con un payaso asesino. ¡Has muerto!",
      2: "Sigues caminando y encuentras un parque de diversiones fantástico. ¡Solo queda disfrutar!",
    },
  },
};

function comenzar() {
  const inicio = aventura.textos.texto1;
  const opciones = [1, 2];
  let seleccion = prompt(inicio);

  if (opciones.includes(parseInt(seleccion))) {
    jugar(parseInt(seleccion));
  } else {
    alert("Opción no válida. Elige otra vez.");
    comenzar();
  }
}

function jugar(opcion) {
  let texto, opciones, resultado;

  if (opcion === 1) {
    texto = aventura.textos.texto2;
    opciones = Object.keys(aventura.opciones.opcionesizq).map(Number);
    resultado = aventura.opciones.opcionesizq;
  } else if (opcion === 2) {
    texto = aventura.textos.texto3;
    opciones = Object.keys(aventura.opciones.opcionesder).map(Number);
    resultado = aventura.opciones.opcionesder;
  } else {
    alert("Opción no válida. Elige otra vez.");
    comenzar();
    return;
  }

  let eleccion = prompt(texto);

  if (opciones.includes(parseInt(eleccion))) {
    alert(resultado[parseInt(eleccion)]);
  } else {
    alert("Opción no válida.");
    jugar(opcion);
    return;
  }

  if (confirm("¿Jugar de nuevo?")) {
    comenzar();
  }
}

document.getElementById("start").addEventListener("click", comenzar);
