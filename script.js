const fechaEvento = new Date("February 28, 2026 17:00:00").getTime();

const cuenta = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    clearInterval(cuenta);
    document.getElementById("cuentaRegresiva").innerHTML =
      "¡Hoy celebramos al bebé! 👶💙";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("cuentaRegresiva").innerHTML =
    `${dias} días • ${horas} h • ${minutos} min • ${segundos} s`;
}, 1000);
