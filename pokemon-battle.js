class Trainer {
  constructor(name, collection) {
    this.name = name;
    this.collection = collection;
  }
  catch(pokemon) {
    this.collection.push(pokemon);
  }
}

class Pokemon {
  constructor(name, health, attackDmg, sound, move, type = null) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDmg;
    this.sound = sound;
    this.move = move;
    this.type = type;
    if (this.type === 'fire') {
      this.strongAgainst = 'grass';
      this.weakagainst = 'water';
    } else if (this.type === 'water') {
      this.strongAgainst = 'fire';
      this.weakagainst = 'grass';
    } else if (this.type === 'grass') {
      this.strongAgainst = 'water';
      this.weakagainst = 'fire';
    } else {
      this.type = null;
    }
  }
  talk() {
    return this.sound;
  }

  useYourMove() {
    return this.move;
  }
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.pokemon1 = pokemon1;
    this.trainer2 = trainer2;
    this.pokemon2 = pokemon2;
    this.turn = pokemon1;
    this.notTurn = pokemon2;
  }
  fight() {
    if (this.turn.strongAgainst === this.notTurn.type) this.turn.attackDmg *= 1.25;
    if (this.turn.weakagainst === this.notTurn.type) this.turn.attackDmg *= 0.75;

    if (this.notTurn.health - this.turn.attackDmg <= 0) {
      this.notTurn.health -= this.turn.attackDmg
      return `${this.turn.name} attacked ${this.notTurn.name} with ${this.turn.move}. ${this.notTurn.name} has fainted. ${this.turn.name} wins`;
    }

    this.notTurn.health -= this.turn.attackDmg

    this.turn === this.pokemon1 ? this.turn = this.pokemon2 : this.turn = this.pokemon1;
    this.notTurn === this.pokemon2 ? this.notTurn = this.pokemon1 : this.notTurn = this.pokemon2;

    return `${this.notTurn.name} attacked ${this.turn.name} with ${this.notTurn.move}. ${this.turn.name} lost ${this.notTurn.attackDmg} health. It only has ${this.turn.health} left`
  }
}







module.exports = { Trainer, Pokemon, Battle }