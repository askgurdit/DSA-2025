// Function to check if a number is a power of 2
const isPowerOfTwo = (num) => {
    // Explanation: 
    // A number is a power of 2 if it has exactly one bit set to 1 in its binary representation.
    // For example:
    // - 2 in binary: 10
    // - 4 in binary: 100
    // - 8 in binary: 1000
    
    // A power of 2 satisfies this property: 
    // num & (num - 1) === 0
    // Why? For any power of 2:
    // - Subtracting 1 flips all bits after the single '1' in the binary representation.
    // - Example: 8 (1000) - 1 = 7 (0111)
    // - The binary representations of 8 and 7 have no overlapping '1's.
    // - Thus, 8 & 7 = 0.

    // Check if num is positive and satisfies the power of 2 condition
    return num > 0 && (num & (num - 1)) === 0;
};



// Example usage:
console.log(isPowerOfTwo (8)); // Output: true
console.log(isPowerOfTwo (7)); // Output: false

// Example Walkthrough:
// Input: num = 8
// Step 1: num > 0 -> true
// Step 2: Binary of 8 = 1000
//         Binary of 8 - 1 = 0111
// Step 3: 1000 & 0111 = 0000 -> true

// Input: num = 7
// Step 1: num > 0 -> true
// Step 2: Binary of 7 = 0111
//         Binary of 7 - 1 = 0110
// Step 3: 0111 & 0110 = 0110 -> false
