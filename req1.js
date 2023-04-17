const list = ["a", 10, "b", "hola", 122, 15];

// Get an array containing just the letters
const letters = list.filter((element) => typeof element === "string");
console.log(letters); // ["a", "b", "hola"]

// Get an array containing just the numbers
const numbers = list.filter((element) => typeof element === "number");
console.log(numbers); // [10, 122, 15]

// Get the highest number from the array above
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // 122
