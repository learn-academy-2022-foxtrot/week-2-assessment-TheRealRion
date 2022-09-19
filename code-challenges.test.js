// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

//Template  Red --> Green --> Refactor : 
// describe("funcName", () => {
//     it("", () => {
//       expect(funcName(input)).toEqual(output)
//     })
//   })

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("isItDivisableBy3", () => {
    it("that takes a object as an argument and decides if the number inside it is evenly divisible by three or not." , () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(isItDivisableBy3(object1)).toEqual("15 is divisible by three")
        expect(isItDivisableBy3(object2)).toEqual("0 is divisible by three")
        expect(isItDivisableBy3(object3)).toEqual("-7 is not divisible by three")
    })
  })

  //Test Suites: 1 failed, 1 total 

// b) Create the function that makes the test pass.
//PsudoCode:
  //1. creat a function called isItDivisableBy3 - one peramiter (number)
  //2. use if statement to create conditional to check if input is divisable by 3 (modulo- % 3 === 0)
    //3. if dividable by 3, return "input is divisable by three"
  //4. use else if to capture numbers not divisable by three (modulo - !== 0)
    //5. if not divisable by 3, return "input is NOT divisable by three"

  const isItDivisableBy3 = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three` 
    } else if (object.number % 3 !==0) {
        return `${object.number} is not divisible by three`
    } else {
        return 'Error'
    }
  }

  // Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeThis", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    expect(capitalizeThis(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizeThis(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

//Test Suites: 1 failed, 1 total

// b) Create the function that makes the test pass.

//PsudoCode:
  //1. creat a function called capitalizeThis- one peramiter: array 
  //2. iterate through array using HOF .map() 
    //3. at each index, take first character and capitalize (.charAt(o).toUpperCase)

  const capitalizeThis = (array) => {
    return array.map((string) => {
        return string[0].toUpperCase() + string.substring(1)
    })
  }


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.


describe("vowelFinder", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
            const vowelTester1 = "learn"
            // Expected output: 1
            const vowelTester2 = "academy"
            // Expected output: 0
            const vowelTester3 = "challenges"
            // Expected output: 2
        expect(vowelFinder(vowelTester1)).toEqual(1)
        expect(vowelFinder(vowelTester2)).toEqual(0)
        expect(vowelFinder(vowelTester3)).toEqual(2)
    })
  })

//   ReferenceError: vowelFinder is not defined
//   Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// b) Create the function that makes the test pass.
//PsudoCode:
  //1. create function vowelFinder
  //2.  establish vowels to find (a, e, i , o ,u)
  //3.  log index value

  const vowelFinder = (string) => {
    for (i=0 ; i < string.length ; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "o" || string[i] === "u")
            return i 
    } 
  }

//   Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
