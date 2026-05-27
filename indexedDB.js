const firstNameInput = document.getElementById('firstname')
const lastNameInput = document.getElementById('lastname')
const btn = document.getElementById('submit___btn')
const toast = document.querySelector('.toast')
const toastText = document.querySelector('.text')
const toastIcon = document.querySelector('.icon')
let db;

// INDEXED DB
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
    db = e.target.result // -> REFERING TO THE INDEXDB

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

// FORM SUBMITHANDLER
function formSubmitHandler(e) {
  e.preventDefault()

  const firstVal = firstNameInput.value
  const lastVal = lastNameInput.value

  // ON ERROR
  if (!firstVal || !lastVal) {
    toastIcon.innerHTML = `<i class="ph-fill ph-seal-warning red"></i>`
    toastText.textContent = 'Please Fill Out the Form'
    toast.style.setProperty('right', "20px")
    setTimeout(() => {
      toast.style.setProperty('right', "-400px")
    }, 1500);
    return
  }

  // ON SUCCESS
  if (firstVal || lastVal) {
    let newItem = {
      firstName: firstVal,
      lastName: lastVal
    }
    console.log('db =>', db)

    let transaction = db.transaction(['contacts'], 'readwrite')

    let objectStore = transaction.objectStore('contacts')

    let request = objectStore.add(newItem)

    request.onsuccess = () => {
      firstNameInput.value = ''
      lastNameInput.value = ''
    }

    transaction.oncomplete = () => {
      console.log('✅ TRANSACTION COMPLETED')
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
    console.log({ firstVal, lastVal })
  }


}

btn.addEventListener('click', formSubmitHandler)