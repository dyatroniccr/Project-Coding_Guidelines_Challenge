/* Choosing variable names */
function calc(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      total += nums[i];
    }
  }
  return total;
}

const numbersArray = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(calc(numbersArray));
/* Este codigo tiene una funcion que suma todos los numeros positivos 
de un arreglo y los muestra en consola por medio de la variable que devuelve
la funcion*/ 


function sumPositiveNumbers(numbers) {
  let positiveSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
    }
  }
  return positiveSum;
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(sumPositiveNumbers(numbers));


function isOldEnoughToDrive(age) {
  if (age > 16) return "Yes"
  return "No";
}


function numberIsDivisible(num) {
  if (num <= 0) {
    return "Number is not positive";
  }
  if (num % 2 === 0) && if(num % 3 === 0) {
    return "Divisible by 2 and 3";
  } 
  if (num % 2 === 0) {
    return "Divisible by 2";
  }
  if (num % 3 === 0) {
    return "Divisible by 3";
  }   
  return "Not divisible by 2 or 3";
}
