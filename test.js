function reverse(array) {
  console.log(array);
  //looping through half of the array
  for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    let item = array[i]; //saving the original
    array[i] = array[array.length - 1 - i]; // swapping the first for last 
    array[array.length - 1 - i] = item; // swapping the last for the first
  }
  console.log(array)
  return array;
}

let arr = [1, 2, 3, 4, 5, 6, 7]
reverse(arr);