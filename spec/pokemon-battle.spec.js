const { expect } = require('chai');
const { Trainer, Pokemon, Battle } = require('../pokemon-battle.js');

describe('Trainer', () => {
  it('Trainer shloud have name', () => {
    const actual = new Trainer('Ash', []);
    const expected = 'Ash';
    expect(actual.name).to.equal(expected);
  });
  it('Trainer shloud have collection', () => {
    const actual = new Trainer('Ash', ['charmander']);
    const expected = ['charmander'];
    expect(actual.collection).to.eql(expected);
  });
  it('Trainer shloud have collection', () => {
    const actual = new Trainer('Ash', ['charmander']);
    const expected = ['charmander'];
    expect(actual.collection).to.eql(expected);
  });
  it('Trainer shloud have catch method', () => {
    const actual = new Trainer('Ash', []);
    expect(actual.catch).to.be.a('function');
  });
  it('Trainer shloud have catch method', () => {
    const actual = new Trainer('Ash', []);
    actual.catch('charmander');
    expect(actual.collection).to.eql(['charmander'])
  });
});

describe('pokemon', () => {
  it('creates new pokemon with name, health, attackDmg, sound, move and type', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    expect(charmeleon.name).to.equal('charmeleon')
    expect(charmeleon.health).to.equal(100)
    expect(charmeleon.attackDmg).to.equal(30)
    expect(charmeleon.sound).to.equal('Chaaaar...MELEON')
    expect(charmeleon.move).to.equal('Blaze')
    expect(charmeleon.type).to.equal('fire')
  });
  it('pokemon has strength and weakness corresponding to type', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const bulbasaur = new Pokemon('bulbasaur', 98, 25, 'Buuulbasaur', 'raizor leaf', 'grass');
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    expect(charmeleon.weakagainst).to.equal('water');
    expect(charmeleon.strongAgainst).to.equal('grass');
    expect(bulbasaur.strongAgainst).to.equal('water');
    expect(bulbasaur.weakagainst).to.equal('fire');
    expect(squirtle.strongAgainst).to.equal('fire');
    expect(squirtle.weakagainst).to.equal('grass');
  });
  it('if passed type is invalid set type to null', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze');
    expect(charmeleon.type).to.equal(null);
  });
  it('Pokemon should has a talk method', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze');
    expect(charmeleon.talk).to.be.a('function');
  });
  it('talk method should return pokemon sound', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze');
    expect(charmeleon.talk()).to.equal('Chaaaar...MELEON');
  });
  it('Pokemon should has a useYourMove method', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze');
    expect(charmeleon.useYourMove).to.be.a('function');
  });
  it('Pokemon should has a useYourMove method', () => {
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze');
    expect(charmeleon.useYourMove()).to.equal('Blaze');
  });
  it('type should be only fire, water or grass', () => {
    const rock = new Pokemon('rock', 20, 1, 'rolling', 'rock throw', 'rock')
    expect(rock.type).to.equal(null);
  });
});

describe('Battle', () => {
  it('new battle instance accepts passed trainer and pokemon', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    expect(battle.trainer1.name).to.equal('Ash');
    expect(battle.trainer2.name).to.equal('Garry');
    expect(battle.pokemon1.name).to.equal('charmeleon');
    expect(battle.pokemon2.name).to.equal('squirtle');
  });
  it('battle has a fight method', () => {
    const testBattle = new Battle()
    expect(testBattle.fight).to.be.a('function');
  });
  it('turn should be the first pokemon', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    expect(battle.turn).to.eql(charmeleon);
  })
  it('fight method should swap pokemons', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    expect(battle.turn).to.eql(charmeleon);
    battle.fight();
    expect(battle.turn).to.eql(squirtle);
  });
  it('fight method returns pokemon move message', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    expect(battle.fight()).to.equal('charmeleon attacked squirtle with Blaze');
  });
  it('attacker reduces other pokemon health', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    battle.fight()
    expect(squirtle.health).to.equal(72.5);
    battle.fight()
    expect(charmeleon.health).to.equal(71.25);
  });
  it('returns message after one pokemon faight', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 50, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 25, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, charmeleon, squirtle);
    expect(battle.fight()).to.equal('charmeleon attacked squirtle with Blaze. squirtle has fainted. charmeleon wins')
  });
  it('if attacker type is strong against defender multiply attack damage', () => {
    const ash = new Trainer('Ash', []);
    const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
    const garry = new Trainer('Garry', []);
    const squirtle = new Pokemon('squirtle', 25, 23, 'SQUIRTLE', 'splash', 'water');
    const battle = new Battle(ash, garry, squirtle, charmeleon);
    battle.fight();
    expect(squirtle.attackDmg).to.equal(28.75);
    expect(charmeleon.health).to.equal(71.25)
  });
});