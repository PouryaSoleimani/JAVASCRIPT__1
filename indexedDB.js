const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const form = document.querySelector('.form')
const btn = document.getElementById('submit___btn')
const toast = document.querySelector('.toast')
const toastText = document.querySelector('.text')
const toastIcon = document.querySelector('.icon')
const ul = document.querySelector('.ul')


//^ CLASS  __________________________________________________________________________________________________________________
class IndexedDbClass {
  constructor() {
    this.db = null;
    this.request = window.indexedDB.open('contacts', 1)
    this.initDB()
    this.eventHandlers();
  }

  initDB() {
    this.request.onerror = () => {
      console.log('DB ERROR')
    }

    this.request.onsuccess = () => {
      this.db = this.request.result;
      console.log('✅ DB SUCCESS =>', this.db);
      this.displayDatas();
    }

    this.request.onupgradeneeded = (e) => {
      this.db = e.target.result // -> REFERING TO THE INDEXDB

      // CREATE DATABASE
      let objectStore = this.db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true, })

      // CREATE DATABASE INDEXES
      objectStore.createIndex('firstName', 'firstName', { unique: false })
      objectStore.createIndex('lastName', 'lastName', { unique: false })
    }
  }

  formSubmitHandler(event) {
    event.preventDefault()

    const firstVal = firstNameInput.value
    const lastVal = lastNameInput.value

    //! ON ERROR
    if (!firstVal || !lastVal) {
      toastIcon.innerHTML = `<i class="ph-fill ph-seal-warning red"></i>`
      toastText.textContent = 'Please Fill Out the Form'
      toast.style.setProperty('right', "20px")
      setTimeout(() => {
        toast.style.setProperty('right', "-400px")
      }, 1500);
      return
    }

    if (!this.db) {
      console.error("DB IS NOT READY YET");
      return;
    }

    //* ON SUCCESS
    if (firstVal || lastVal) {

      let newItem = {
        firstName: firstVal,
        lastName: lastVal
      }

      if (!this.db) {
        console.error("DB IS UNDEFINED ... ")
      }

      let transaction = this.db.transaction(['contacts'], 'readwrite')
      let objectStore = transaction.objectStore('contacts')
      let request = objectStore.add(newItem)

      request.onsuccess = () => {
        firstNameInput.value = ''
        lastNameInput.value = ''
      }

      transaction.oncomplete = () => {
        console.log('✅ TRANSACTION COMPLETED')
        this.displayDatas();
      }

      transaction.onerror = () => {
        console.log('🛑 ERROR ON TRANSACTION')
      }

      // TOAST HANDLER
      toastIcon.innerHTML = `<i class="ph-fill ph-seal-check green"></i>`
      toastText.textContent = 'Form Submitted Successfully.'
      toast.style.setProperty('right', "20px")
      setTimeout(() => {
        toast.style.setProperty('right', "-400px")
      }, 1500);
    }


  }

  eventHandlers() {
    btn.addEventListener('click', (e) => this.formSubmitHandler(e))
    form.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.formSubmitHandler(e)
      }
    })
  }

  displayDatas() {
    if (!this.db) {
      console.error('DB IS UNDEFINED TO DISPLAY DATAS')
      return
    }

    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }

    let objectStore = this.db.transaction('contacts').objectStore('contacts')

    objectStore.openCursor().onsuccess = (e) => {
      let cursor = e.target.result
      if (cursor) {
        let liHtml = `
        <li data-contact-id="${cursor.value.id}">
         ${cursor.value.id}. ${cursor.value.firstName} ${cursor.value.lastName}
        </li>
        `
        ul.innerHTML += liHtml
        cursor.continue()
      } else {
        if (!ul.firstChild) {
          ul.textContent = 'No Contacts To Show ...'
        }
      }
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new IndexedDbClass()
})