// Palindrome Number

function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversHalf = 0;
  while (x > reversHalf) {
    let digit = x % 10;
    reversHalf = reversHalf * 10 + digit;
    x = Math.floor(x / 10);
  }
  return x === reversHalf || x === Math.floor(reversHalf / 10);
}
console.log(isPalindrome(0));
