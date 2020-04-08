/*
Exercise 3 - Capitalize every element
1. Write a short function to capitalize every element of the array.
2. You must use the Array.map function and the String.uppercase function.
*/

let pizzaToppings = ["Pineapple", "Pepperoni", "Sausage", "Onions"];

let capitalToppings = pizzaToppings.map(function (x) {
  return x.toUpperCase();
});

console.log(capitalToppings);