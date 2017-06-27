// Exercise 1

const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2

console.log ("** Beginning of exercise #1 **");

for ( i = 0; i < arr1.length; i++ ) {
    if ( arr1[i] % 2 === 0 ) {
        console.log (arr1[i]);
    }
}


// Exercise 2

console.log ("** Beginning of exercise #2 **");

for ( i = 0, largest = 0; i < arr2.length; i++ ) {
    if ( arr2[i] > largest ) {
        largest = arr2[i];
    }
}
console.log (largest);


// Exercise 3

console.log ("** Beginning of exercise #3 **");

function exerciseThree (number) {
    for ( i = 1; i <= number; i++ ) {
        for ( j = 0; j < i; j++) {
            console.log (i);
        }
    }
}

exerciseThree(3);


// Exercise 4

console.log ("** Beginning of exercise #4 **");

function exerciseFour (number) {
    for ( i = 1; i <= number; i++ ) {
        var repeatedNumber = "";
        for ( j = 0; j < i; j++) {
            repeatedNumber += i;
        }
        console.log (repeatedNumber);
    }
}

exerciseFour(4);
