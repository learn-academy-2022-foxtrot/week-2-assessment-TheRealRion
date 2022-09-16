// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
console.log(cohort.split(""))

// a) Your answer: {"F", "o", "x", "t", "r","o", "t", " ", "2", "0", "2", "2"}
// b) Verify and explain: Logged as expected! :) .splot is a method that is envoked on a string to take each character and put it into an array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The function greeter is missing the word return on line 19. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: This function uses the .map method to envoke the built in method that takes each number in the array and multiplies it by two, returning a new array with the new numbers 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: This function uses the .filter method to envoke the built in method that filters the array by using modulo (%) to look for odd numbers (numbers that are not (!==) evenly divisable by two (remainder 0)) then logs those numbers in a new array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}

console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: This will log the value that is at the zero index of the language key in myCodingSkills variable 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Foxtrot", year: 2022
// b) Verify and explain: A class of Learn was created with a single input paramiter of name with the defalt values of "Foxtrot" for cohort and 2022 for year. A new variable of learnStudent was added to the class of Learn with the peramiter of the name "George". This then created the output of a new object of student: "George", cohort: "Foxtrot", year: 2022
