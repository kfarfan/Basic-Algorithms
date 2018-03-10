function palindrome(str) {
  // turn the string into an array
  var a = str.split('');
  // reverse the string
  a = a.reverse();
  // join the string
  a = a.join('');
  // replace the following characters
  a = a.replace(/[!@#$%^&*,.?:/\-_ ()]/g, '');
  // turn to lower case
  a = a.toLowerCase();
  // set new veriable to replace the characters in the string
  var b = str.replace(/[!@#$%^&*,.?:/\-_ ()]/g, '');
  // turn the case to lower case
  b = b.toLowerCase();
  // if variable a is equal to b, it's a palindrome
  if(a == b){
    return true;
  }else{
    return false;
  }
}

palindrome("eye");
