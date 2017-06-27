//Array of people, there is no need to change this
const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]




/*
    Write your functions below.
*/


// Exercise 5

console.log ("** Beginning of exercise #5 **");

function search(person, ARRAY) {
    for ( i = 0; i < ARRAY.length; i++ ) {
        if ( ARRAY[i].name === person ) {
            var resultTrue = ( person + " was found at position #" + i);
            console.log (resultTrue);
            return;
            }
        }
    var resultFalse = ( person + " was not found");
    console.log (resultFalse);
    }

search("James",PERSONDATA)  // Should log that James was found at position #5
search("Eric",PERSONDATA)   // Should log that Eric was not found.
// *** Just changed the function calls to organize the result on the console.
// *** I understand this doesn't change anything because of hoisting that would call the function regardless of the order.

// Exercise 6

// Create a function that will take in an array of people, and return a new array with the people filtered based on a given score.
// For example, if the function is called with a parameter of 50, it should return an array of all the people with a score greater than 50.

// Note: the goal of this challenge is to advance your understanding of loops and data structures.
// While there are built-in Array methods that you can use to accomplish these tasks, you should be able to finish this challenge by just using loops.

// console.log(filter(PERSONDATA, 50)) // Should display an array of everyone with a score greater than 50
/* Ex: 
[ { name: 'Alex', rank: 3, age: 34, score: 75 },
  { name: 'Isabella', rank: 1, age: 31, score: 100 },
  { name: 'Mia', rank: 5, age: 28, score: 54 },
  { name: 'Michael', rank: 4, age: 19, score: 66 },
  { name: 'Sam', rank: 2, age: 23, score: 80 } ]
*/

console.log ("** Beginning of exercise #6 **");

function filter(randomArray, givenScore) {
    var finalArray = [];
    for ( i = 0; i < randomArray.length; i++ ) {
        if ( randomArray[i].score > givenScore ) {
            finalArray.push(randomArray[i]);
        }
    }
    console.log (finalArray);
}

filter(PERSONDATA,50);

console.log ("** Another solution for #6 using High Order Functions **");

function filterTwo(randomArray, givenScore){
    var finalArrayHOF = randomArray.filter(function(element) {
        return (element.score > givenScore);
    })
    console.log(finalArrayHOF);
}

filterTwo(PERSONDATA,50);


