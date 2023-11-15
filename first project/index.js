function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
    
    while (start < end) {
      if (word[start] !== word[end]) {
        return false;
      }
      
      start++;
      end--;
    }
    
    return true;
  }
  
  // Example usage
  console.log(isPalindrome("gag")); // Output: true
  console.log(isPalindrome("kayak")); // Output: true
  console.log(isPalindrome("php")); // Output: true
  console.log(isPalindrome("radar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false