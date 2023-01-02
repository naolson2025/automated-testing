export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // +number is a shortcut for converting a string to a number
    sum += +number;
  }
  return sum;
}
