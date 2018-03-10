function reverseString(str) {
  // turn into an array
  str = str.split('');
  // revrese the array
  str = str.reverse();
  // join the array at into a string without spaces
  str = str.join('');
  return str;
}

reverseString("hello");
