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
let player1 = [];
const player2 = [];

function roll(dice) {
  return dice[Math.floor(Math.random() * dice.length)];
}

function setDice(){

  const playerRoll = [];
   for (let i = 1; i <= 3; i+=1){

    const rolling = roll(dice);
    playerRoll.push(rolling)

   }

  return(playerRoll);

}


function whoWon() {

    const dice1 = setDice();



 console.log(dice1)

  if(dice1[0] === dice1[1] && dice1[1] === dice1[2]) {
    value = dice1[0]
    console.log ('trips');
       }
  else if(dice1[0] === dice1[1] || dice1[1] === dice1[2] || dice1[0] === dice1[2]){
      dice1.sort();
      if(dice1[0] === dice1[1]){

       console.log(dice1[2]);
       console.log('point');

        }

      else if (dice1[1] === dice1[2]) {

        console.log(dice1[0]);
        console.log('point1')
      }
      else{

        console.log(dice1[1])
        console.log('point2');
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
