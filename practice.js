// /*-- calculate human age in dog years --*/
// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7;
//     console.log(ageInDogYears);
//     return ageInDogYears;
// }

// const dogAge = calculateAgeInDogYears(42);

// /*-- log dog by breed or pro cat statement, depending on input --*/
// const bestInShow = (breed) => {
//     if (breed === "meow")
//     return 'I like cats!';
//     else return `My favorite breed is ${breed}.`;
// }
// let myFave = bestInShow("pitbull")
// console.log(myFave);
// myFave = bestInShow("meow")
// console.log(myFave);

// /*-- add multiple numbers based on input --*/
// const add = (c, b, a) => {
//     const sum = (a + b + c);
//     console.log(sum);
//     return sum;
// }
// const grandTotal = add(66, 2345, 862);

// /*-- log direction and speed based on input --*/
// let fw = "forwards";
// let bw = "backwards";
// let ic = "in circles";
// const go = (direction, speed)  => {
//     if (speed >= 75)
//     return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
//     else if (direction && speed)
//     return `The car is moving ${direction} at ${speed} mph.`
// }

// console.log(go(ic, 76));


// /*-- determine whether integer is even or odd --*/
// const pileONumbers = [
//     1, 97,4, 86, 378, 099, 768574, 34, 73, 12345, 0, 156, 155, 437, 837465241, 2, 3, 4, 5, 6, 7, 8, 9, 33
// ]
// const evenOrOdd = (i) => {
//     if (i % 2 == 0)
//     return `Even`
//     else 
//     return `Odd`
// }

// /*-- iterate thru array to determine even or odd values --*/
//     for (const pileONumber of pileONumbers) {
//     evenOrOdd(pileONumber)
//     console.log(evenOrOdd(pileONumber));
//     }





// /*-- double functions: generate string from array of words, while filtering out 'k' words --*/
// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// console.log(words)

// const filterKWords = () => {
//     for (const word of words)
//     if (word.startsWith("k") === false) {
//     console.log(`${word}`)
// }}
// console.log(filterKWords());



/*--- coin flip function: Sven the fisherman --*/

// const svenLuck = (multiplier) => {
//     let morningCatch = Math.random() * multiplier
//     console.log(multiplier)
//     console.log(morningCatch)
//     if (morningCatch >= 1)  // Number between 0 and 2
//     return "Sven hooked a tuna!  :)";
//     else return "Sven came up empty-handed.  :(";
// }

// console.log(svenLuck(0))



// /*-- fast food objects --*/
// const scrambledOrder = {
//     "sandwich": "Ultimate Slammer",
//     "side": "Potato wedges",
//     "drink": "Mr. Pepper",
//     "dessert": "Fudge sundae"
// }
// console.log(scrambledOrder)

// const orderBuilder = (sandwich, side, drink, dessert) => {
//     if (sandwich, side, drink, dessert)
//     return {
//         "sandwich": `${sandwich}`,
//         "side": `${side}`,
//         "drink": `${drink}`,
//         "dessert": `${dessert}`
//     }
// }
// const takeOutBag = orderBuilder("Ultimate Slammer", "Mr. Pepper", "Potato wedges", "Fudge sundae")
// console.log(takeOutBag)


/*--- Higher Order Functions ---*/
// passing in a function as a data object into another function //
/*
    I can make any number bigger, but you need to tell
    me how much bigger by giving me the function you
    want me to invoke on the number

*/
/*--- Step 1: define simple function (multiply number) ---*/
// const twice = number => number * 2
// const square = number => number * number
// const timesFive = number => number * 5
// const cube = number => number * number * number

// /*--- Step 2: define a function that accepts another function as a parameter ---*/

// const bigify = (number, operationFunction) => {
//     const result = operationFunction(number)
//     return result
// }

/*--- note: variable name of function parameter doesn't matter:
----- the code in Step 3 runs with either version of bigify (starting line 136 OR line 143) ---*/
// const bigify = (number, timesFive) => {
//     const result = timesFive(number)
//     return result
// }

/*--- Step 3: assign a variable to the higher-order function, invoke by taking the multiplier function as one of the arguments ---*/
// let number = 7
// const by2 = bigify(number, twice)  // 14
// const by5 = bigify(number, timesFive)  // 35
// const byItself = bigify(number, square)  // 49
// const byItself3X = bigify(number, cube)
// console.log(by2)
// console.log(by5)
// console.log(byItself)

/*--- Step 3, redux: assign a variable to the higher-order function, invoke by taking the multiplier function as one of the arguments ---*/
// let number = 599
// const by2 = bigify(number, twice)  // 14
// const by5 = bigify(number, timesFive)  // 35
// const byItself = bigify(number, square)  // 49
// const byItself3X = bigify(number, cube)
// console.log(by2)
// console.log(by5)
// console.log(byItself)
// console.log(byItself3X)

/* ======= WHAT I DON'T UNDERSTAND: the role "result" plays in the bigify function, lns. 136-137.
---------- best guess: =====*/


/*----- CHORE DAY (Higher Order Functions Redux) ----*/

/*--- Step 1: Define six functions that each define a single parameter whose value should be an object that looks like this:
{
    firstName: "Donald",
    lastName: "McLelland"
}
Each returns a string in the following format (if the object parameter represents Donald McLelland):
"Donald McLelland went to the grocery store" or "Donald McLelland got the engine oil changed"
Use this template: const xxxxx = person => `${} ${} ` ---*/

let person = {
    firstName: "Donald",
    lastName: "McLelland"
}

const makeCoffee = "made coffee"
const takeOutTrash = "took out the trash"
const spotVac =  "spot vacuumed"
const recycleBoxes =  "recycled boxes"
const washCar =  "washed the car"
const mopKitchen =  "mopped the kitchen"


/*--- Step 2: define function that will accept other functions as parameters (like bigify above) ---*/
const dayPlanner = (firstChore, secondChore, thirdChore, day) => {
    return  `${person.firstName} ${person.lastName} ${firstChore}, and ${person.firstName} also ${secondChore}, and ${person.firstName} also  ${thirdChore} ${day}.`
}
// console.log(dayPlanner(washCar, person, "Thursday"))

person = { firstName: "Yolanda", lastName: "Jones" }
let day = "on Tuesday"
const coffeeFirst = dayPlanner(makeCoffee, spotVac, washCar, day);


person = { firstName: "Deesie", lastName: "McCheesy" }
day = "on Thursday"
const trashFirst = dayPlanner(takeOutTrash, mopKitchen, recycleBoxes, day);

person = { firstName: "Red", lastName: "Garland" }
day = "on Monday"
const vacFirst = dayPlanner(spotVac, washCar, recycleBoxes, day);

person = { firstName: "Billy", lastName: "Williams" }
day = "on Sunday"
const boxesFirst = dayPlanner(recycleBoxes, makeCoffee, spotVac, day);

person = { firstName: "Annie", lastName: "Dillard" }
day = "on Saturday"
const carFirst = dayPlanner(washCar, mopKitchen, takeOutTrash, day);

person = { firstName: "Rosie", lastName: "Flores" }
day = "on Friday"
const mopFirst = dayPlanner(mopKitchen, makeCoffee, takeOutTrash, day);

console.log(coffeeFirst)
console.log(trashFirst)
console.log(vacFirst)
console.log(boxesFirst)
console.log(carFirst)
console.log(mopFirst)