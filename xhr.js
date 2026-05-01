const btn = document.getElementById('AJAX__BUTTON')
const text = document.getElementById('AJAX__TEXT')



function injectText() {
  let xhr = new XMLHttpRequest()
  console.log({ btn, text, xhr })
  xhr.open('GET', "test.txt", true)
  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log({ response: this })
      text.innerHTML = this.response
    }
  }
  xhr.send()
}

btn.addEventListener('click', injectText)

// ========================================================================================================================
const usersBtn = document.getElementById('AJAX__USERS__BUTTON')
const wrapper = document.querySelector('.users___wrapper')

function injectUsers() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', "users.json", true)

  xhr.onload = function () {
    if (xhr.status == 200) {
      const res = JSON.parse(this.response)
      let HTML = []

      res.forEach((item) => {
        const html = `<p>${item.id}.${item.name} - ${item.age} Years Old</p>`
        HTML.push(html)
      })
      wrapper.style.cssText = `
      font-weight:bold;
      padding:24px;
      height:160px;
      width:350px;
      opacity:1;
      `;
      setTimeout(() => {
        requestAnimationFrame(() => {
          wrapper.innerHTML = HTML.join('')
        })
      }, 400);
    }
  }

  xhr.send()
}

usersBtn.addEventListener('click', injectUsers)

// ============================================================================================================================

function xhrTest() {
  const xhr = new XMLHttpRequest()
  console.log('xhr =>', xhr)
  xhr.open('GET', "users.json", true)

  xhr.onprogress = function () {
    console.log('PROGRESS')
  }

  xhr.onreadystatechange = function () {
    console.log('READYSTATE =>', this.readyState)
  }

  xhr.send()

}



// ============================================================================================================================

function loadUsers() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', "https://api.github.com/users", true)

  xhr.onload = function () {

    if (this.status !== 200) {
      console.error('⛔ GITHUB GET REQUEST FAILED !')
    }

    if (this.status == 200) {
      let users = JSON.parse(this.response)
      console.log({ users })
    }
  }

  xhr.send()
}


document.addEventListener('DOMContentLoaded', () => {
  xhrTest()
  loadUsers()
})

// ============================================================================================================================
