import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

rl.question('First Number: ', (firstInput) => {
  const num1 = Number(firstInput);
  
  rl.question('Second Number: ', (secondInput) => {
    const num2 = Number(secondInput);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      let result = sum(num1, num2);
      result += multiply(1, 2);
      showResult(result);
    } else {
      console.log("Não é possível executar com estes valores.");
    }
    
    rl.close();
  });
});
