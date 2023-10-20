// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    // maybe possible to use super ?
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}
// const viking1 = new Viking("Brice", 100, 50);
// const damageReceived = viking1.receiveDamage(20);
// console.log(damageReceived);

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy = [Viking];
  }
  addSaxon(Saxon) {
    this.saxonArmy = [Saxon];
  }
  vikingAttack() {
    // random index from the array
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // random saxon from the array based on the (random) index
    const saxon = this.saxonArmy[randomSaxon];
    const viking = this.vikingArmy[randomViking];
    // saxon receive damage
    const result = saxon.receiveDamage(viking.strength);
    // remove dead saxon
    if (saxon.health <= 0) {
      this.saxonArmy.splice(0, 1);
    }
    return result;
  }
  saxonAttack() {
    // random index from the array
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    // random saxon from the array based on the (random) index
    const saxon = this.saxonArmy[randomSaxon];
    const viking = this.vikingArmy[randomViking];
    // saxon receive damage
    const result = viking.receiveDamage(saxon.strength);
    // remove dead saxon
    if (viking.health <= 0) {
      this.vikingArmy.splice(0, 1);
    }
    return result;
  }
  showStatus() {}
}

// vikingAttack() method
// should be a declared
// should receive 0 arguments
// should make Saxon receiveDamage() equal to the strength of a Viking
// should remove dead saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
