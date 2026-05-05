let isValid = false;

class PromisesPage {
  constructor() {
    this.init();
  }

  init() {
    this.firstPromise();
  }

  firstPromise() {
    const _promise = new Promise((resolve, reject) => {
      if (isValid) {
        const response = "THIS IS TRUE";
        resolve(response);
      } else {
        const error = "THIS IS FALSE";
        reject(error);
      }
    });

    _promise
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PromisesPage();
});

// DOCS ===========================================================================================

// setTimeout

// callback functions

// callback hell

// PROMISES

// NEW PROMISE

// RESOLVE , REJECT

// .then() / .catch()
