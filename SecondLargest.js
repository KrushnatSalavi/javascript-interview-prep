
function findSecondLargest(arr) {
    if (arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    
    for (let num of arr) {
        if (num > largest) {

            // The old largest becomes the second largest
            secondLargest = largest;
            largest = num;

        } else if (num > secondLargest && num !== largest) {
            // If the number is smaller than the largest but bigger than the second largest
            secondLargest = num;
        }
    }

    // If secondLargest never changed from -Infinity, all numbers were identical
    return secondLargest === -Infinity ? null : secondLargest;
}



console.log(findSecondLargest([3, 5, 1, 9, 2, 8])); // Output: 8
console.log(findSecondLargest([10, 10, 5]));        // Output: 5 (handles duplicates)
console.log(findSecondLargest([7, 7, 7]));          // Output: null (no distinct second largest)