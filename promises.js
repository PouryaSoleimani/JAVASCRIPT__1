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

//

//  console.log(
//       "%c ERROR =>",
//       "background-color:darkred;color:white;padding:2px 4px;border-radius:16px",
//       err,
//     ),
