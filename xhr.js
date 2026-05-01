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

      wrapper.style.setProperty('padding', "24px")
      wrapper.style.setProperty('height', '80px')
      wrapper.style.setProperty('width', '350px')
      wrapper.style.setProperty('opacity', '1')
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

// =====================================================================================================================