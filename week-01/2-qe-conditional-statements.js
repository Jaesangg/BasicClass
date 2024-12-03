// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}
const input = prompt("숫자를 입력하세요:"); // 사용자 입력받기
const number = parseInt(input, 10); // 문자열을 숫자로 변환
checkEvenOdd(number); // 함수 호출

// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
function getGrade(score) {
  if (score >= 90) {
    console.log("학점: A");
  } else if (score >= 80) {
    console.log("학점: B");
  } else if (score >= 70) {
    console.log("학점: C");
  } else {
    console.log("학점: D");
  }
}
const input = prompt("점수를 입력하세요:"); // 사용자 입력받기
const score = parseInt(input, 10); // 문자열을 숫자로 변환
getGrade(score); // 함수 호출

// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
function checkAge(age) {
  if (age >= 18) {
    console.log("성인입니다.");
  } else {
    console.log("미성년자입니다.");
  }
}
const input = prompt("나이를 입력하세요:"); // 사용자 입력받기
const age = parseInt(input, 10); // 문자열을 숫자로 변환
checkAge(age); // 함수 호출

// 문제 4: switch문을 사용하여 요일을 출력하세요.
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
    default:
      console.log("잘못된 입력입니다. 0에서 6 사이의 숫자를 입력하세요.");
  }
}
const input = prompt("0에서 6 사이의 숫자를 입력하세요:"); // 사용자 입력받기
const dayNumber = parseInt(input, 10); // 문자열을 숫자로 변환
getDayOfWeek(dayNumber); // 함수 호출

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
function findLargerNumber(num1, num2) {
  if (num1 > num2) {
    console.log("더 큰 수는:", num1);
  } else if (num1 < num2) {
    console.log("더 큰 수는:", num2);
  } else {
    console.log("두 수는 같습니다.");
  }
}
const input1 = prompt("첫 번째 숫자를 입력하세요:"); // 첫 번째 숫자 입력받기
const input2 = prompt("두 번째 숫자를 입력하세요:"); // 두 번째 숫자 입력받기
const num1 = parseFloat(input1); // 첫 번째 입력을 숫자로 변환
const num2 = parseFloat(input2); // 두 번째 입력을 숫자로 변환
findLargerNumber(num1, num2); // 함수 호출
