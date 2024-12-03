// main.js
import Character from "./Character.js"; // Character.js에서 모듈을 가져옴

// 캐릭터 객체 생성
const character1 = new Character("딜러", 1, 100, 20);
const character2 = new Character("힐러", 1, 80, 15);
const character3 = new Character("탱커", 1, 150, 10);

// 캐릭터들 정보 출력
console.log("캐릭터 1:", character1);
console.log("캐릭터 2:", character2);
console.log("캐릭터 3:", character3);

// 캐릭터들이 각자 공격하고 회복하는 동작 수행
character1.attack();
character2.attack();
character3.attack();

character1.heal();
character2.heal();
character3.heal();

// 레벨업 수행
character1.levelUp();
character2.levelUp();
character3.levelUp();
