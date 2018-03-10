function findLongestWord(str) {
  // set variable to 0 to compare later
  var count = 0;
  // turn the string into separate arrays
  var newStr = str.split(' ');
  // loop through the array
  for(var i = 0; i < newStr.length; i++){
  // if count is less than the index.length, count will be equal to that number
    if(count < newStr[i].length){
  // count now equals the lenght of that index
  // if count is greater than count will not change
      count = newStr[i].length;
    }
  }
  // return the number
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
