/*
Exercise 2 - Pizza
1. Create an array of pizza toppings
2. Write a function that we can call
3. Function should return a string that describes the pizza, example “A delicious pizza with Cheese and Pepperoni and Garlic and Peppers.”
*/

let pizzaToppings = ["Pineapple", "Pepperoni", "Sausage", "Onions"];

function describePizza(toppings) {
  return "A delicious pizza with " + toppings.join(" and ") + ".";
}

console.log(describePizza(pizzaToppings));