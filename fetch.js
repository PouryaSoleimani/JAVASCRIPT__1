const fetchBTN = document.querySelector('.fetch__wrapper .btn')
const content = document.querySelector('.fetch__content')


// CLASS
class FetchApiClass {
  constructor() { this.init() }

  init() {
    this.fetchApi()
  }

  async fetchApi() {
    fetchBTN.addEventListener('click', async () => {
      content.innerHTML = `<p>LOADING</p>`
      const res = await fetch('test.txt').then(res => res.text())
      setTimeout(() => {
        content.innerHTML = `<p>${res}</p>`
      }, 2000);
    })

  }
}




//  DOM CONTENT LOADED _______________________________________________________________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
  new FetchApiClass()
})  