// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
var name = "박재상";
var age = 30;
console.log("이름", name);
console.log("나이", age);

// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.
var isStudent = true;
console.log("학생여부:", isStudent);

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.

// 좋아하는 음식 3가지를 배열에 저장
const favoriteFoods = ["피자", "초밥", "파스타"];
console.log(favoriteFoods[0]); //첫번째 음식 출력

// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.
const person = {
  name: "홍길동", // 이름 저장
  age: 25, // 나이 저장
};
console.log("이름:", person.name); //이름과 나이를 출력
console.log("나이:", person.age);
