function firstNonRepeatedChar(str) {
  // Create an object to store the frequency of each character
  let charCount = {};

  // Iterate through the string to populate the charCount object
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // No non-repeated character found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
