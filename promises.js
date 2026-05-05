let isValid = true;

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
      .then((response) =>
        console.log(
          "%c RESPONSE",
          "background-color:darkgreen;color:white;padding:2px 6px 2px 0;text-align:center;border-radius:4px",
          response,
        ),
      )
      .catch((error) =>
        console.log(
          "%c ERROR",
          "background-color:darkred;color:white;padding:2px 6px 2px 0;text-align:center;border-radius:4px",
          error,
        ),
      );
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
