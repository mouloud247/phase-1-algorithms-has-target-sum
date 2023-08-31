function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterates through the input array
       iterates through the input array starting from the element with index 'i+1'
          check if the sum equals to target and return true
  if no equality found return false
      
*/

/*
  Add written explanation of your solution here
  iterates through all pairs of elements in the array and checks if their sum equals the target 
  value. If a pair is found that satisfies this condition, the function returns true. 
  If no such pair is found after checking all pairs, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 9, 5, 4, 7], 9));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 4, 8, 3], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
