// 필요한 모듈을 불러옵니다.
const readlineSync = require("readline-sync");

// 프로그램 시작
function main() {
  while (true) {
    console.log("\n선택하세요:");
    console.log("1. 사칙연산 계산기");
    console.log("2. 구구단 출력기 (2~9단)");
    const choice = readlineSync.question("원하는 기능의 번호를 입력하세요: ");

    if (choice === "1") {
      calculator();
    } else if (choice === "2") {
      printMultiplicationTables();
    } else {
      console.log("1, 2 중에 입력하세요!");
    }
  }
}

// 사칙연산 계산기 함수
function calculator() {
  const num1 = parseFloat(readlineSync.question("첫 번째 숫자를 입력하세요: "));
  const operator = readlineSync.question("연산자를 입력하세요 (+, -, *, /): ");
  const num2 = parseFloat(readlineSync.question("두 번째 숫자를 입력하세요: "));

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "0으로 나눌 수 없습니다.";
      break;
    default:
      result = "잘못된 연산자입니다.";
  }

  console.log(`결과: ${result}`);
}

// 구구단 출력 함수
function printMultiplicationTables() {
  console.log("\n구구단 출력 (2단부터 9단까지)");
  for (let i = 2; i <= 9; i++) {
    console.log(`\n${i}단`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

// 메인 함수 실행
main();
