function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const number = 5; // You can change this number to calculate the factorial of a different number
  const result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);