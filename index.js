
let EL_DIA_DE_MI_CUMPLE = new Date();
EL_DIA_DE_MI_CUMPLE.setSeconds(EL_DIA_DE_MI_CUMPLE.getSeconds() + 11);

function calculaLosSegundos() {
  const elDiaDeMiCumple = EL_DIA_DE_MI_CUMPLE;
  const timestampDelDiaDeMiCumple = elDiaDeMiCumple.getTime();
  const timestampDeHoy = new Date().getTime();
  const milisegundosQueQuedanHastaMiCumple = timestampDelDiaDeMiCumple - timestampDeHoy;
  const segundosQueQuedanHastaMiCumple = conversorSegundos(milisegundosQueQuedanHastaMiCumple,
  );

  return segundosQueQuedanHastaMiCumple;
}

function conversorSegundos(m) {
  return m / 1000;
}

function conversor(segundos) {
  const segundosTotales = Math.max(0, Math.ceil(segundos));

  let m = Math.floor(segundosTotales / 60);
  const s = segundosTotales % 60;

  let h = Math.floor(m / 60);
  m = m % 60;

  const d = Math.floor(h / 24);
  h = h % 24;

  const isMyBirthday = segundos < 0;

  const chupiguay = {
    dias: d,
    horas: h,
    minutos: m,
    segundos: s,
    isMyBirthday: isMyBirthday,
  };

  return chupiguay;
}

handleTimeout();

function handleTimeout() {
  const s = calculaLosSegundos();
  const valor = conversor(s);

  printar(valor);

  if (valor.isMyBirthday) {

    confetti({
      position: { x: 0, y: 0 },
      count: 1000,
      size: 5,
      velocity: 500,
      fade: false,
    });

    confetti({
      position: { x: window.innerWidth, y: 0 },
      count: 1000,
      size: 5,
      velocity: 500,
      fade: false,
    });
    
    const cancion = new Audio("parchis.mp3");
    cancion.play();

    const mensaje = document.getElementById("mensajeCumple");
    mensaje.classList.add("visible");
    mensaje.setAttribute("aria-hidden", "false");


    return;
  }

  setTimeout(handleTimeout, 1000);
}

function printar(valor) {
  const segundos = document.getElementById("segundos");
  const minutos = document.getElementById("minutos");
  const horas = document.getElementById("horas");
  const dias = document.getElementById("dias");

  segundos.innerText = valor.segundos;
  minutos.innerText = valor.minutos;
  horas.innerText = valor.horas;
  dias.innerText = valor.dias;
}