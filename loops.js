//^ LOOPS ====================================================================================================================
const cars = ["BENZ", "BMW", "PORSCHE", "AUDI", "VOLKSWAGEN"];
const car = { brand: "BMW", model: "M3", year: "2025", color: "BLACK", isAvailable: true, };

// FOR LOOP ________________________________________________________________________________________________________________________________
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log(`car ${i + 1} ==>`, element);
}

// FOR IN (OBJECTS) ________________________________________________________________________________________________________________________________
for (const key in car) {
  if (!Object.hasOwn(car, key)) continue;
  const value = car[key];
  console.log("CAR OBJECT VALUES =>", value); // LOGS THE VALUES
  console.log("CAR OBJECT KEYS", key); // LOGS THE KEYS
}

console.log("KEY ", Object.keys(car)); // LOGS ALL KEYS TOGETHER

// FOR OF (ARRAYS) ________________________________________________________________________________________________________________________________
for (const key of cars) {
  console.log("KEY OF CARS ARRAY ->", key); // LOGS THE VALUE OF THE ARRAY SEPARATELY
}

for (const i of cars) {
  console.log('i', i)
}