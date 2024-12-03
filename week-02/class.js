class Character {
  constructor(name, lv, hp, atk) {
    this.name = name;
    this.lv = lv;
    this.hp = hp;
    this.atk = atk;
  }

  attack() {
    console.log(`${this.name}가 공격을 시도합니다!`);
  }

  heal() {
    const healAmount = Math.floor(Math.random() * 20) + 1; // 1~20 랜덤 회복
    this.hp += healAmount; // 회복 반영
    console.log(
      `${this.name}의 체력이 ${healAmount}만큼 회복되었습니다. 현재 체력: ${this.hp}`
    );
  }

  levelUp() {
    const hpIncrease = Math.floor(Math.random() * this.hp) + 1; // 1~30 랜덤 체력 증가
    const atkIncrease = Math.floor(Math.random() * this.atk) + 1; // 1~10 랜덤 공격력 증가
    this.hp += hpIncrease;
    this.atk += atkIncrease;
    this.lv += 1;
    console.log(
      `${this.name}이 레벨업 했습니다! 레벨: ${this.lv}, 체력: ${this.hp}, 공격력: ${this.atk}`
    );
  }
}

const character1 = new Character("딜러", 1, 100, 20);
const character2 = new Character("힐러", 1, 80, 5);
const character3 = new Character("멍청이", 1, 10000, 1);

console.log("캐릭터 1:", character1);
console.log("캐릭터 2:", character2);
console.log("캐릭터 3:", character3);
