const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const btn = document.getElementById('submit___btn')
const toast = document.querySelector('.toast')
const toastText = document.querySelector('.text')
const toastIcon = document.querySelector('.icon')


window.addEventListener('load', () => {
  let request = window.indexedDB.open('contacts', 1)

  request.onerror = () => {
    console.log('DB ERROR')
  }

  request.onsuccess = () => {
    console.log('DB SUCCESS')
    const db = request.result
    console.log('DB =>', db)
  }

  request.onupgradeneeded = (e) => {
    let db = e.target.result // -> REFERING TO THE INDEXDB

    // CREATE DATABASE
    let objectStore = db.createObjectStore('contacts', {
      keypath: 'id',
      autoIncrement: true,
    })

    // CREATE SCHEMA / CREATE OBJECT STORE
    objectStore.createIndex('firstName', 'firstName', {
      unique: false
    })

    // CREATE SCHEMA / CREATE OBJECT STORE
    objectStore.createIndex('lastName', 'lastName', {
      unique: false
    })

    console.log('✅ DATABASE CREATED SUCCESSFULLY')
  }

})

function formSubmitHandler(e) {
  e.preventDefault()
  const firstVal = firstNameInput.value
  const lastVal = lastNameInput.value

  if (!firstVal || !lastVal) {
    toastIcon.innerHTML = `<i class="ph-fill ph-seal-warning red"></i>`
    toastText.textContent = 'Please Fill Out the Form'
    toast.style.setProperty('right', "20px")
    setTimeout(() => {
      toast.style.setProperty('right', "-400px")
    }, 1500);
    return
  }

  if (firstVal || lastVal) {
    toastIcon.innerHTML = `<i class="ph-fill ph-seal-check green"></i>`
    toastText.textContent = 'Form Submitted Successfully.'
    toast.style.setProperty('right', "20px")
    firstNameInput.value = ""
    lastNameInput.value = ""
    setTimeout(() => {
      toast.style.setProperty('right', "-400px")
    }, 1500);
    console.log({ firstVal, lastVal })
    return
  }


}

btn.addEventListener('click', formSubmitHandler)