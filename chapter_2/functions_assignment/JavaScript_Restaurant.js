//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine')


// For this assignment, all meals will consist of 3 items, a main dish, a side dish, and a drink.
// HINT: look up how to use the setTimeout() function to wait for a period of time.

// WRITE YOUR CODE BELOW
// Order Function Here:

function order(main, side, drink) {
    if (main && side && drink) {
        console.log("That sounds like a great order.")
        cook(main, side, drink);
    } else {
        console.log( "Please order again. This time, order a main dish, a side dish, and a drink.")
    }
}

// Cook Function Here:

// The second function will be the 'cook' function, which again will take in the 3 meal parameters.
// This function will need to look through the restaurant's menu and determine the total time it will take to prepare the 3 items that were ordered.
// Once the total time has been determined, the function should tell the user how much time it will take to prepare the meal, and then wait that amount of time in seconds.
// After that, the 'serve' function will be called with the 3 meal items as arguments.

function cook(main, side, drink) {
    myOrder = generateMenu().filter(function(menuItem) {
        return menuItem.name === main || menuItem.name === side || menuItem.name === drink;
    });
    totalTime = myOrder.reduce(function(timeA, timeB){
        return timeA + timeB.time;
    }, 0);
    console.log("Your order will be ready in " + totalTime + " seconds.");
    setTimeout(function() {
        serve(main, side, drink);
    }, (totalTime * 1000));
}

// Serve Function Here:

// The final 'serve' function will need to take in the 3 meal parameters, and loop through the menu to find out the total price of all 3 menu items.
// The function should log that the meal is ready to serve, and also inform the user what the price of the meal will be.

function serve(main, side, drink) {
    console.log ("Your order is ready!");
    totalPrice = myOrder.reduce(function(priceA, priceB){
        return priceA + priceB.price;
    }, 0);
    console.log ("This is your bill. And you owe me " + totalPrice + " dollars!");
}

// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
