// =============================
// CUENTA REGRESIVA
// =============================
const fechaEvento = new Date("February 28, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.getElementById("cuentaRegresiva").innerText =
      "¡Hoy celebramos al bebé! 👶💙";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("cuentaRegresiva").innerText =
    `${dias} días • ${horas}h • ${minutos}m • ${segundos}s`;
}, 1000);

// =============================
// INGRESAR + MÚSICA
// =============================
const btn = document.getElementById("btnIngresar");
const audio = document.getElementById("audioFondo");

btn.addEventListener("click", () => {
  audio.volume = 0.7;
  audio.play();

  document.getElementById("pantallaInicio").style.display = "none";
  document.getElementById("invitacion").classList.remove("oculto");
});
