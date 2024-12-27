function gcd(a, b) {
  // Ensure a and b are non-negative
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(10, 2)); // Output: 2
console.log(gcd(10, 3)); // Output: 1
console.log(gcd(10, 4)); // Output: 2
console.log(gcd(10, 5)); // Output: 5
console.log(gcd(10, 6)); // Output: 2
console.log(gcd(10, 7)); // Output: 1
console.log(gcd(10, 8)); // Output: 2
console.log(gcd(10, 9)); // Output: 1
console.log(gcd(10, 10)); // Output: 10
console.log(gcd(0, 0)); // Output: 0