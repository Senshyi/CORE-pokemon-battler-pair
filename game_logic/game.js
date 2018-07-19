const inquirer = require('inquirer');
const { Trainer, Pokemon, Battle } = require('../pokemon-battle.js');

const charmeleon = new Pokemon('charmeleon', 100, 30, 'Chaaaar...MELEON', 'Blaze', 'fire');
const bulbasaur = new Pokemon('bulbasaur', 98, 25, 'Buuulbasaur', 'raizor leaf', 'grass');
const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
const mewtwo = new Pokemon('mewtwo', 150, 40, 'hello', 'confusion', 'psychic');
const ash = new Trainer('Ash', [charmeleon, bulbasaur]);
const gary = new Trainer('Gary', [squirtle, mewtwo]);

console.log('Welcome to Pokemon North!');

let trainerChoice = null;

let questions = [
  {
    type: 'list',
    name: 'chooseTrainer',
    message: 'Please choose your trainer...',
    choices: [ash.name, gary.name],
  },
  {
    type: 'list',
    name: 'choosePokemon',
    message: `You chose ${this.answers}.`,
    // message: 'Gary wants to battle! Choose your Pokemon...',
    choices: [charmeleon.name, bulbasaur.name]
  }
];



inquirer.prompt(questions).then(answers => {
  console.log(answers);
});