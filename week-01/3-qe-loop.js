// [반복문 연습 문제]

// 문제 1: 1부터 10까지의 숫자를 출력하세요.
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// 문제 2: 1부터 10까지의 합을 계산하여 출력하세요.
function calculateSum() {
    let sum = 0; // 합계를 저장할 변수
    for (let i = 1; i <= 10; i++) {
        sum += i; // 현재 숫자를 합계에 더하기
    }
    console.log("1부터 10까지의 합은:", sum);
}
calculateSum();

// 문제 3: 구구단 3단을 출력하세요.
    function printMultiplicationTable() {
    const number = 3; // 구구단의 숫자
    for (let i = 1; i <= 9; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
printMultiplicationTable();

// 문제 4: 배열에 저장된 과일들을 하나씩 출력하세요.
var fruits = ['사과', '바나나', '포도'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 문제 5: while문을 사용하여 5부터 1까지 역순으로 출력하세요.
let i = 5; // 시작 값 설정
while (i >= 1) {
    console.log(i); // 현재 값 출력
    i--; // 값 1씩 감소
}