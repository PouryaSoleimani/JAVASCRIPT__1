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