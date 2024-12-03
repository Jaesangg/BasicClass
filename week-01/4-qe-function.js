// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function addNumbers(num1, num2) {
  return num1 + num2; // 두 숫자의 합을 반환
}
const result = addNumbers(5, 10); // 함수 호출
console.log("두 숫자의 합은:", result); // 결과 출력

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function greet(name) {
  console.log(`안녕하세요, ${name}님!`); // 템플릿 리터럴을 사용하여 인사 메시지 출력
}
greet("박재상"); // 함수 호출

// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3); // Math.max를 사용하여 가장 큰 수를 반환
}
const largestNumber = findMax(10, 25, 7); // 함수 호출
console.log("가장 큰 수는:", largestNumber); // 결과 출력

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "짝수입니다."; // 짝수일 경우
  } else {
    return "홀수입니다."; // 홀수일 경우
  }
}
const result = checkEvenOrOdd(7); // 함수 호출
console.log(result); // 결과 출력

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 배열의 각 요소 출력
  }
}
const fruits = ["사과", "바나나", "포도"];
printArrayElements(fruits); // 함수 호출
