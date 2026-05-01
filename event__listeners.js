// SELECTORS
const timer = document.querySelector('.timer p')
const _textArea = document.querySelector('#textarea')
const toast = document.querySelector('.toast')
const toastIcon = toast.querySelector('.icon')
const toastText = toast.querySelector('.text')

let intervalId = null;
let isTimeStarted = false;
let times = [0, 0, 0]

function leadingZero(time) { return time < 10 ? `0${time}` : time; }

class EventListenersComponents {
  constructor() {
    this.init();
  }

  init() {
    this.addButtonEventHandler();
    this.handleCapturing();
    this.handleRemoveEventListeners();
    this.handleInputFunctions();
    this.handleTimeStart();
    this.handleTimeStop();
    this.handleCheckText();
  }

  addButtonEventHandler() {
    const btn = document.querySelector("#element");
    const text = document.querySelector(".text");

    btn.addEventListener("click", () => {
      console.log("CLICKED CLICKED");
      text.textContent = "🟨 HELLO FROM JS ";
    });
  }

  handleCapturing() {
    const _div = document.querySelector(".div");
    const _p = document.querySelector(".p");
    _p.addEventListener("click", (e) => {
      e.stopPropagation()
      console.log("P CLICKED");
    });

    _div.addEventListener("click", () => {
      console.log("DIV CLICKED");
    });
  }

  handleRemoveEventListeners() {
    const modal = document.querySelector('.modal')
    const openBtn = document.querySelector(".open__btn")
    const closeBtn = document.querySelector('.close__btn')

    function show(e) {
      e.stopPropagation()
      modal.style.setProperty('opacity', "1")
      modal.style.setProperty('pointer-events', "all")
    }

    function hide() {
      modal.style.setProperty('opacity', "0")
      modal.style.setProperty('pointer-events', "none")
      openBtn.removeEventListener("click", show)
      setTimeout(() => {
        openBtn.addEventListener('click', show)
      }, 100);
    }

    openBtn.addEventListener('click', show)
    closeBtn.addEventListener('click', hide)
  }

  handleInputFunctions() {
    const input = document.querySelector('.input')
    const label = document.querySelector('.form__group label')

    if (input instanceof HTMLInputElement) {
      input.addEventListener('focus', () => {
        requestAnimationFrame(() => {
          input.style.setProperty('background-color', "white")
          label.style.setProperty('top', "-13px")
          label.style.setProperty('color', "white")
          label.style.setProperty('backdrop-filter', "blur(3px)")
        })
      })
      input.addEventListener('blur', () => {
        requestAnimationFrame(() => {
          input.style.setProperty('background-color', "#ababab")
          label.style.setProperty('top', "5px")
          label.style.setProperty('color', "black")
          label.style.setProperty('backdrop-filter', "none")
        })
      })
    }
  }

  handleTypeSpeedTimer() {
    if (!isTimeStarted) return

    function runTimer() {
      let currentTime = leadingZero(times[0]) + " : " + leadingZero(times[1]) + " : " + leadingZero(times[2])
      timer.textContent = currentTime
      times[2]++

      if (times[2] >= 100) {
        times[1] = times[1] + 1
        times[2] = 0
        if (times[1] > 59) {
          times[0] = times[0] + 1
          times[1] = 0
        }
      }

      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(runTimer, 10);
    }

    runTimer()

  }

  handleTimeStart() {
    const textarea = document.querySelector('.textarea')
    textarea.addEventListener('keypress', () => {
      if (!isTimeStarted) {
        isTimeStarted = true
        this.handleTypeSpeedTimer()
      }
    })
  }

  handleTimeStop() {
    const stopBtn = document.querySelector('.stop__btn')
    stopBtn.addEventListener('click', () => {
      isTimeStarted = false
      clearInterval(intervalId);
      intervalId = null;
    })

    const resetBtn = document.querySelector('.reset__btn')
    let currentTime = leadingZero(times[0]) + " : " + leadingZero(times[1]) + " : " + leadingZero(times[2])
    resetBtn.addEventListener('click', () => {
      isTimeStarted = false
      clearInterval(intervalId);
      intervalId = null;
      times = [0, 0, 0];
      timer.textContent = currentTime
      _textArea.value = ''
      _textArea.removeAttribute('disabled')
      _textArea.style.setProperty('outline-color', "#c0bcbc7d")
    })
  }

  handleCheckText() {
    const originText = document.querySelector('.sample').innerHTML.trim().replace("\n", "")
    function checker(userText) {
      const originTextMatch = originText.substring(0, userText.length)

      if (originText == userText) {
        _textArea.style.setProperty('outline-color', "#61e56e90")
        isTimeStarted = false;
        clearInterval(intervalId)
        intervalId = null;
        toast.style.setProperty('right', "20px")
        toast.style.setProperty('outline-color', "#35c44b")
        toastIcon.innerHTML = '✅'
        toastText.innerHTML = 'CORRECT'
        _textArea.setAttribute('disabled', 'true')

        setTimeout(() => { toast.style.setProperty('right', "-300px") }, 2000);
      } else if (userText.length && userText == originTextMatch) {
        _textArea.style.setProperty('outline-color', "#f9cd3ba1")
      } else if (userText.length && userText !== originText) {
        _textArea.style.setProperty('outline-color', "#ff6b6b8a")
        toast.style.setProperty('right', "20px")
        toast.style.setProperty('outline-color', "#c34240")
        toastIcon.innerHTML = '❌'
        toastText.innerHTML = 'INCORRECT'
        setTimeout(() => { toast.style.setProperty('right', "-300px") }, 2000);
      } else {
        _textArea.style.setProperty('outline-color', "#7878787d")
      }

    }

    _textArea.addEventListener('keyup', (e) => {
      checker(e.target.value)
    })
  }
}

//^ DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  new EventListenersComponents();
});

//^ DOCS ==========================================================================================================

// EVENT LISTENERS

// USE CAPTURING => },true)

// REMOVE EVENT LISTENERS

// MOUSE_MOVE EVENT

// STOP PROPAGATION()

// CAPTURING AND BUBBLING

// CLEAR INTERVAL

// MATH.FLOOR

// LEADING ZERO()

// .subString()

// "keyup"

//! CLEAR INTERVAL
// let ID = null
// let I = 0;

// ID = setInterval(() => {
//   I++
//   console.log('I =>', I)

//   if (I == 5) {
//     console.log('⛔ STOP')
//     clearInterval(ID)
//     ID = null;
//   }

// }, 1000);