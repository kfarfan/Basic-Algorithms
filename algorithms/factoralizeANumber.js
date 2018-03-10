function factorialize(num) {
  // set total to 1
  var total = 1;
  // create a number that starts at 1, and stops when it is over num
  for(var i = 1; i <= num; i++){
  // every iteration the total will be multiplied by i
    total *= i;
  }
  // return our value
  return total;
}

factorialize(5);
