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
const squirtle = new Pokemon('squirtle', 100, 23, 'SQUIRTLE', 'splash', 'water');
const mewtwo = new Pokemon('mewtwo', 150, 40, 'hello', 'confusion', 'psychic');
const ash = new Trainer('Ash', [charmeleon, bulbasaur]);
const gary = new Trainer('Gary', [squirtle, mewtwo]);

let P1 = null;
let P2 = null;
let T1 = null;
let T2 = null;


/////QUESTIONS//////
let question1 = [
  {
    type: 'list',
    name: 'chooseTrainer',
    message: 'Please choose your trainer...',
    choices: [ash.name, gary.name]
  }
]
let activity = [
  {
    type: 'list',
    name: 'activity',
    message: 'What would you like to do?',
    choices: ['battle', 'catch pokemon']
  }
]
let ashQuestion = [
  {
    type: 'list',
    name: 'choosePokemon',
    message: '',
    choices: [ash.collection[0], ash.collection[1]]
  }
]
let garyQuestion = [
  {
    type: 'list',
    name: 'choosePokemon',
    message: ``,
    choices: [gary.collection[0], gary.collection[1]]
  }
]
let battleOptions = [
  {
    type: 'list',
    name: 'battleOptions',
    message: '',
    choices: ['attack', 'swap pokemon']
  }
]


///////////

console.log('Welcome to Pokemon North!');



inquirer.prompt(question1).then(answers => {
  console.log(`you chose ${answers.chooseTrainer}`)
  if (answers.chooseTrainer === 'Ash') {
    T1 = ash;
    T2 = gary;
  } else {
    T1 = gary;
    T2 = ash;
  }

  function adventure() {
    inquirer.prompt(activity).then(answer => {
      if (answer.activity === 'battle') {

        if (answers.chooseTrainer === 'Ash') {
          inquirer.prompt(ashQuestion).then(answer => {
            for (let i = 0; i < ash.collection.length; i++) {
              if (T1.collection[i].name === answer.choosePokemon) {
                P1 = T1.collection[i];
                P2 = T2.collection[0];
              }
            }
            console.log(`You chose ${answer.choosePokemon}. Your rival chose ${P2.name}. Let's battle!!!`);
            const newBattle = new Battle(T1, T2, P1, P2);

            function battleOption() {
              inquirer.prompt(battleOptions).then(answer => {
                if (answer.battleOptions === 'attack') {
                  console.log(newBattle.fight());
                  console.log(newBattle.fight());
                  if (P2.health > 0 && P1.health > 0) {
                    return battleOption();
                  } else {
                    return adventure();
                  }
                }
              })
            }
            battleOption();



          })
        } else {
          inquirer.prompt(garyQuestion).then(answer => {
            for (let i = 0; i < gary.collection.length; i++) {
              if (gary.collection[i].name === answer.choosePokemon) {
                P1 = gary.collection[i];
                P2 = ash.collection[0];
              }
            }
            console.log(`You chose ${answer.choosePokemon}. Your rival chose ${P2.name}. Let's battle!!!`);
            const newBattle = new Battle(T1, T2, P1, P2)
            inquirer.prompt(battleOptions).then(answer => {
              if (answer.battleOptions === 'attack') {
                console.log('Fight me');
              }
            })
          })
        }
      }
    })
  }
  adventure();





});

