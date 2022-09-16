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
// describe("funcname", () => {
//     it("", () => {
//       expect(input).toEqual(output)
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
        expect(isItDivisableBy3(object1.number)).toEqual("15 is divisible by three")
        expect(isItDivisableBy3(object2.number)).toEqual("0 is divisible by three")
        expect(isItDivisableBy3(object1.number)).toEqual("-7 is not divisible by three")
    })
  })

  //Test Suites: 1 failed, 1 total GOOD FAIL! YAY!

// b) Create the function that makes the test pass.
//PsudoCode:
  //1. creat a function called isItDivisableBy3 - one peramiter (number)
  //2. use if statement to create conditional to check if input is divisable by 3 (modulo- % 3 === 0)
    //3. if dividable by 3, return "input is divisable by three"
  //4. use else if to capture numbers not divisable by three (modulo - !== 0)
    //5. if not divisable by 3, return "input is NOT divisable by three"

  const isItDivisableBy3 = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisable by three` 
    } else if (object.number % 3 !==0) {
        return `${object.number} is not divisable by three`
    } else {
        return 'Error'
    }
  }



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
