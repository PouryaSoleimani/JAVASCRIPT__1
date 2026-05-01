//^ CONDITIONS ==============================================================================================================
if (1 === 1) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

// TERNARY OPERATOR ===============================================================================================================

2 == 2 ? console.log('TRUE !') : console.log('FALSE !');

// SWITCH CASE ======================================================================================================================
let number = 5

switch (number) {
  case 5: {
    console.log('NUMBER IS 5')
    break;
  }
  case 4: {
    console.log('NUMBER IS 4')
    break;
  }
  case 3: {
    console.log('NUMEBR IS 3')
    break;
  }

  case 2: {
    console.log('NUMBER IS 2')
    break
  }
  default: {
    console.log('DEFAULT CASE')
    break;
  }
}

let today = new Date().toUTCString()
console.log(today);

let weekDay = today.slice(0, 3).toLowerCase()

switch (weekDay) {
  case 'sat': {
    console.log("SATURDAY");
    break;
  }
  case 'sun': {
    console.log("SUNDAY");
    break;
  }
  case 'mon': {
    console.log("MONDAY");
    break;
  }
  case 'tue': {
    console.log("TUESDAY");
    break;
  }
  case 'wed': {
    console.log("WEDNESDAY");
    break;
  }
  case 'thu': {
    console.log("THURSDAY");
    break;
  }
  case 'fri': {
    console.log("FRIDAY");
    break;
  }

  default: {
    console.log('WEEKDAY IS UNDEFINED')
    break;
  }
}

const myName = 'POURYA'

switch (myName) {
  case "POURYA": {
    console.log("POURYA");
    break;
  }
  case "MAMAD": {
    console.log('MAMAD')
    break;
  }
  case "MOHAMMAD_REZA": {
    console.log('MOHAMMAD REZA');
    break;
  }

  default: {
    console.warn("NAME IS NOT DEFINED");
    break;
  }
}

const age = 18;
const calc = 18;

switch (true) {
  case (age < calc): {
    console.log('AGE IS UNDER 18')
    break;
  }
  case (age === calc): {
    console.log('AGE IS 18')
    break;
  }
  case (age > calc): {
    console.log('MORE THAN 18')
    break;
  }

  default: {
    console.warn('AGE IS NOT VALID')
    break;
  }
}
