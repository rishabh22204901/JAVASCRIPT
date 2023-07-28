// ## Variables #1

// 1. create "firstName" and "last_name" variables
// 2. assign your values
// 3. create "address" variable and assign "main street"
//    value to it
// 4. re-assign address to "first street" later
// 5. log all values in the console

let firstName = "Rishabh";
let last_name = "Kumar";

let address = "main street";
address = "first street";

console.log(firstName, last_name, address);

let comp = `"john's courses are best"`;
console.log(comp);

// ## Concatenate Strings #2

// 1. create "street" and "country" variables
// 2. assign your values
// 3. create "fullMailingAddress" variable and assign
//    the result of "street + country"
// 4. remember about the space
// 5. log "fullMailingAddress" in the console

let street = "california";
let country = "america";
let fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// ## Numbers #3

// 1. create "score1", "score2", "score3" variables and
//    assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score
// 4. create "plates" variable and assign 20
// 5. create "people" variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
// 9. log message

let score1 = 50;
let score2 = 50;
let score3 = 50;

let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

const plates = 20;
const people = 7;

let remainingPlates = plates - people;
remainingPlates++;

const message = "There are " + remainingPlates + " plates available";

console.log(message);

// ## Arrays #4

// 1. create "fruits" array and store some fruit values
// 2. setup the last item as number (random)
// 3. assign first fruit to the variable
// 4. re-assign last array item to the actual fruit
// 5. log both first fruit variable and entire fruits array

let fruits = ["mango", "apple", "banana", "grapes", "guava", 10];

let firstFruit = fruits[1];
console.log(firstFruit);
console.log(fruits[1]);

// ## Functions #5  ======================

//Declaring the function

function hello() {
  //logic

  console.log("Hello-World");
}

//invoking the function

hello();

//function to greet bob, anna, susy

//declaring the funtion ======

function greet(name) {
  console.log("Hello " + name + " How are you doing?");
}

greet("bob");
greet("anna");
greet("susy");
greet("anna");

// ## Functions challenge ================

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

//========== first-way-to-make-this-function ============

function calculateTotal(subTotal, tax) {
  let value = subTotal + tax;
  return value;
}
console.log(calculateTotal(10, 15));

//========== second-way-to-make-this-function ============

function calculateTotall(subtotal, tax) {
  return subtotal + tax;
}
console.log(calculateTotall(40, 50));

//1st challenge done ==========

//2nd challenge of function start ==========

// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

function calculateResult(subtotal, tax) {
  return subtotal + tax;
}

let order1 = calculateResult(10, 150);
let order2 = calculateResult(30, 90);
let order3 = calculateResult(50, 50);

console.log(order1, order2, order3);

// ## Objects #6

//Objects practice ===========================

const person = {
  name: "Rishabh",
  lastName: "Kumar",
  age: 18,
  education: true,
  married: false,
  sibling: ["priyanshu", "manish", "vikash", "rishu"],
  greeting: function () {
    console.log("Hello, My Name is Rishabh");
  },
};

let age = person.age;
console.log(age);
console.log(person.education);
console.log(person.sibling[3]);
person.greeting();
console.log(person.name);
person.name = "Saurav Ganguli";
console.log(person.name);

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

//========== objects challenge =============

car = {
  make: "dodge",
  modal: 1030,
  year: 2021,
  colors: ["red", "green", "blue", "golden"],
  hybrid: true,
  drive: function () {
    console.log("I am Driving......");
  },
  stop() {
    console.log("I am Stopping......");
  },
};

console.log(car.make);
console.log(car.modal);
console.log(car.colors[3]);
car.drive();
car.stop();

// ## Conditional Statements #7

let value = 5 > 6;
if (value) {
  console.log("Hello-World");
} else {
  console.log("sorry world");
}

let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}

//      =========  !  ==========

const value2 = false;
if (!value2) {
  console.log("its true");
}

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

let person1 = {
  name: "Rishabh",
  age: 20,
  status: "tourist",
};

let person2 = {
  name: "Priyanshu",
  age: 22,
  status: "resident",
};

if (
  (person1.age > 18 && person1.status == "tourist") ||
  (person2.age > 18 && person2.status == "tourist")
) {
  console.log("True");
} else {
  console.log("False");
}

// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// ## Array Methods #9

// Multiple Videos

// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log
