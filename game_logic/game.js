const inquirer = require('inquirer');
const { Trainer, Pokemon, Battle } = require('../pokemon-battle.js');

const charmeleon = new Pokemon(
  'charmeleon',
  100,
  30,
  'Chaaaar...MELEON',
  'Blaze',
  'fire'
);
const bulbasaur = new Pokemon(
  'bulbasaur',
  98,
  25,
  'Buuulbasaur',
  'raizor leaf',
  'grass'
);
const squirtle = new Pokemon('squirtle', 95, 23, 'SQUIRTLE', 'splash', 'water');
const mewtwo = new Pokemon('mewtwo', 150, 40, 'hello', 'confusion', 'psychic');
const ash = new Trainer('Ash', [charmeleon, bulbasaur]);
const gary = new Trainer('Gary', [squirtle, mewtwo]);

console.log('Welcome to Pokemon North!');

let trainerChoice = null;

let question1 = [
  {
    type: 'list',
    name: 'chooseTrainer',
    message: 'Please choose your trainer...',
    choices: [ash.name, gary.name]
  }
]
inquirer.prompt(question1).then(answers => {
  trainerChoice = answers.chooseTrainer;
});

// let question2 = [
//   {
//     type: 'list',
//     name: 'choosePokemon',
//     message: `You chose ${trainerChoice}.`,
//     choices: [ash.name, gary.name]
//   }
// ];

// inquirer.prompt(question2).then(answers => {
//   // trainerChoice = answers.chooseTrainer;
//   console.log(answers);
// });

// let question2 = [
//   {
//     type: 'list',
//     name: 'choosePokemon',
//     message: `You chose ${answers.chooseTrainer}.`,
//     // message: 'Gary wants to battle! Choose your Pokemon...',
//   }
//   {
//     type: 'list',
//     name: 'choosePokemon',
//     // message: `You chose ${this.answers}.`,
//     message: 'Gary wants to battle! Choose your Pokemon...',
//     choices: [charmeleon.name, bulbasaur.name]
//   }
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(answers);
// });
