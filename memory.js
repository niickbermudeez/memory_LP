var carta1 = null;
var carta2 = null;
var puntuacio = 0;

function giraCarta(carta) {
  switch (carta.id) {
    case "1":
      carta.src = "./img/cubarsi.jpg";
      break;
    case "2":
      carta.src = "./img/girezman.jpg";
      break;
    case "3":
      carta.src = "./img/haaland.jpg";
      break;
    case "4":
      carta.src = "./img/lamineYamal.jpg";
      break;
    case "5":
      carta.src = "./img/mbappe.jpg";
      break;
    case "6":
      carta.src = "./img/messi.webp";
      break;
    case "7":
      carta.src = "./img/neymar.jpg";
      break;
    case "8":
      carta.src = "./img/pedri.jpg";
      break;
  }
  if (carta1 == null) {
    carta1 = carta;
  } else {
    carta2 = carta;
  }
}

function comprovar() {
  if (carta2 != null) {
    if (carta1.src !== carta2.src) {
      setTimeout(() => {
        voltejarCarta(carta1);
        voltejarCarta(carta2);
      }, 500);
    } else {
      carta1.onclick = "";
      carta2.onclick = "";
      carta1 = null;
      carta2 = null;
      puntuacio++;
      guanyador();
    }
  }
}

function voltejarCarta(carta) {
  carta.src = "./img/sobre.png";
  if (carta1 !== null && carta1.id == carta.id) {
    carta1 = null;
  } else {
    carta2 = null;
  }
}

function guanyador() {
  if (puntuacio == 8) {
    alert("HAS GUANYAT LA PARTIDA!");
  }
}
