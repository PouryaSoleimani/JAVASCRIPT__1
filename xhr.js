const btn = document.getElementById('AJAX__BUTTON')

const text = document.getElementById('AJAX__TEXT')

function injectText() {
  let xhr = new XMLHttpRequest()
  console.log({ btn, text, xhr })
  xhr.open('GET', "test.txt", true)
  xhr.onload = function () {
    if (xhr.status == 200) {
      text.innerHTML = this.response
    }
  }
  xhr.send()
}

btn.addEventListener('click', injectText)