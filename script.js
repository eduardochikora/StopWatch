let textMinutos = document.getElementById("minutos");
let textSegundos = document.getElementById("segundos");
let textMillisegundos = document.getElementById("millisegundos");
let startButton = document.getElementById("btn-1");
let pauseButton = document.getElementById("btn-2");
let resetButton = document.getElementById("btn-3");
let minutos = 1;
let segundos = 1;
let millisegundos = 1;
let interval;

function startTimer() {

  interval = setInterval(() => {

    textMillisegundos.innerHTML = `<p id="millisegundos">${millisegundos++}</p>`
    if (millisegundos === 100) {
      millisegundos = 0
      textSegundos.innerHTML = `<p id="segundos">${segundos++}<span>s</span></p>`
    }
    if (segundos === 60) {
      segundos = 0
      textMinutos.innerHTML = `<p id="minutos">${minutos++}<span>m</span></p>`
    }

  }, 1)
  pauseButton.style.display = 'block'
  startButton.style.display = 'none'
  resetButton.style.display = 'block'
}

function pauseTimer() {
  clearInterval(interval)
  startButton.style.display = 'block'
  pauseButton.style.display = 'none'
}

function resetTimer() {
  clearInterval(interval)
  millisegundos = 0
  segundos = 1
  minutos = 0
  textMillisegundos.innerHTML = `<p id="millisegundos">00</p>`
  textSegundos.innerHTML = `<p id="segundos">0<span>s</span></p>`
  textMinutos.innerHTML = `<p id="minutos">0<span>m</span></p>`
  startButton.style.display = 'block'
  pauseButton.style.display = 'none'
  resetButton.style.display = 'none'
}
