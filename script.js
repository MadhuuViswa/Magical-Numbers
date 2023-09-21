//display nav items

const menu= document.querySelector('.menu')
const menuList= document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})



//odd or even number
function Odd_Even(){
    var a;
    a = Number(document.getElementById("input_num").value);
    if(a % 2 == 0){
        alert( a + " is a Even Number");

    }
    else{
        alert( a + " is a Odd Number");
    }   
}


//Prime or Composite
function checkNumber() {
    var number = parseInt(document.getElementById("input").value);
    var isPrime = true;
  
    if (number === 1) {
      isPrime = false;
    } 
    else if (number > 1) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    } 
    else {
      isPrime = false;
    }
  
    var resultElement = document.getElementById("result");
    if (isPrime) {
      resultElement.textContent = number + " is a prime number";
    } 
    else {
      resultElement.textContent = number + " is a composite number";
    } 
}



//Factorial
function calculateFactorial() {
    var number = parseInt(document.getElementById("numberInput").value);
    var factorial = 1;
  
    if (number < 0) {
      document.getElementById("result1").textContent = "Factorial is not defined for negative numbers.";
    } else {
      for (var i = 1; i <= number; i++) {
        factorial *= i;
      }
      document.getElementById("result1").textContent = "The factorial of " + number + " is: " + factorial;
    }
}



//Fibonacci
function calculateFibonacci() {
    var number = parseInt(document.getElementById("number_Input").value);
    var fibonacci = [0, 1];
  
    for (var i = 2; i <= number; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    document.getElementById("result2").textContent = "The Fibonacci sequence up to " + number + " is: " + fibonacci.slice(0, number + 1 ).join(", ");
}


//Palindrome
function checkPalindrome() {
    var word = document.getElementById("wordInput").value;
    var reversedWord = word.split("").reverse().join("");
  
    if (word === reversedWord) {
      document.getElementById("result3").textContent = word + " is a palindrome.";
    } 
    else {
      document.getElementById("result3").textContent = word + " is not a palindrome.";
    }
}