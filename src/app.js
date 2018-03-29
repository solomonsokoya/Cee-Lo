// let game ={

//   players[{

//     name: 'player1',
//     dice: 'dice1',
//     roll:[]

//     },


//     {
//       name: 'player2',
//       dice: 'dice2',
//       roll:[]
//     },

//     let currentPlayer: {},

//     function nextTurn(){

//       for(let i = 0; i < 2 ; i++){
//       game.currentPlayer = game.players[i]

//           }
//     }


// ]


// }


const dice = [1, 2, 3, 4, 5, 6];
const player1 = [];
const player2 = [];

function roll(dice) {
  return dice[Math.floor(Math.random() * dice.length)];
}

function setDice(){

  const playerRoll = [];
   for (let i = 1; i <= 3; i+=1){

    const rolling = roll(dice);
    playerRoll.push(rolling)

   };

  return(playerRoll);

}


function whoWon() {

    const dice1 = setDice();
    let value = '';


 console.log(dice1)

  if(dice1[0] === dice1[1] && dice[1] === dice1[2]) {
    value = dice[0]
    console = 'trips'
       }
  else if(dice1[0] === dice1[1] || dice1[1] === dice1[2] || dice1[0] === dice1[2]){
      dice1.sort();
      if(dice1[0] === dice1[1]){
       value = dice[2];
       console.log(dice[2]);

        }

      else if (dice1[1] === dice[2]) {
        value = dice[0];
        console.log(value);
      }
      else{
        value = dice[1];
        console.log(value);
      }
    }

  else {
       dice1.sort();
    if(dice1[0] === 1 && dice1[1] === 2 && dice1[2] === 3){

      value = 0;
      console.log('you lose');
    }

    else if ( dice1[0] === 4 && dice1[1] === 5 && dice1[2] === 6){

      console.log('you win')
    }

    else{

      console.log('roll again')
    }
  }
}

whoWon()

