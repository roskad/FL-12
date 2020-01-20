function AwesomeFighter(attacker) {
  let name = attacker.name,
    damage = attacker.damage,
    strength = attacker.strength,
    agility = attacker.agility,
    hp = attacker.hp,
    wins = 0,
    losses = 0;

  this.getName = function () {
    return name;
  }
  Object.defineProperty(this, 'getName', {
    writable: false
  });
  this.getDamage = function () {
    return damage;
  }
  Object.defineProperty(this, 'getDamage', {
    writable: false
  });
  this.getStrength = function () {
    return strength;
  }
  Object.defineProperty(this, 'getStrength', {
    writable: false
  });
  this.getAgility = function () {
    return agility;
  }
  Object.defineProperty(this, 'getAgility', {
    writable: false
  });
  this.getHealth = function () {
    return hp;
  }
  Object.defineProperty(this, 'getHealth', {
    writable: false
  });

  this.attack = function (defender) {
    let attackChance = Math.floor(Math.random() * 100 + 1);
    let hitChance = strength + agility;
    if (hitChance > attackChance) {
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      defender.dealDamage(this.getDamage());
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  this.logCombatHistory = function () {
    return `Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`;
  }
  this.heal = function (addHealth) {
    hp += addHealth;
  }
  this.dealDamage = function (addDamage) {
    hp -= addDamage;

  }
  this.addWin = function () {
    wins++;
  }
  this.addLoss = function () {
    losses++;
  }
}
let teamBlueFighter = new AwesomeFighter({ name: 'Bob', damage: 25, strength: 30, agility: 25, hp: 100 });
let teamRedFighter = new AwesomeFighter({ name: 'Jim', damage: 20, strength: 50, agility: 15, hp: 100 });

function battle(attacker, defender) {
  if (attacker.getHealth() === 0) {
    console.log(`${attacker.getName()} is dead and can't fight`);
    return;
  }
  if (defender.getHealth() === 0) {
    console.log(`${defender.getName()} is dead and can't fight`);
    return;
  }

  while (attacker.getHealth() > 0 && defender.getHealth() > 0) {
    attacker.attack(defender);
    if (defender.getHealth() <= 0) {
      attacker.addWin();
      defender.addLoss();
      console.log(`${attacker.getName()} has won`);
      console.log(attacker.logCombatHistory());
      console.log(defender.logCombatHistory());
      return;
    }
    defender.attack(attacker);
    if (attacker.getHealth() <= 0) {
      defender.addWin();
      attacker.addLoss();
      console.log(`${defender.getName()} has won`);
      console.log(attacker.logCombatHistory());
      console.log(defender.logCombatHistory());
      return;
    }
  }
}

console.log(battle(teamBlueFighter, teamRedFighter));