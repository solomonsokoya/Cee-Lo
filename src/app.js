const dice = [1, 2, 3, 4, 5, 6];
let value = [];



$('button').click(whoWon);








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

      value.push(1 + dice1[0]);

       }
  else if(dice1[0] === dice1[1] || dice1[1] === dice1[2] || dice1[0] === dice1[2]){
      dice1.sort();
      if(dice1[0] === dice1[1]){

       value.push(dice1[2]);

        }

      else if (dice1[1] === dice1[2]) {


        value.push(dice1[0]);
      }
      else{



        value.push(dice1[1]);
      }
    }

  else {
       dice1.sort();
    if(dice1[0] === 1 && dice1[1] === 2 && dice1[2] === 3){

      value.push(0);

    }

    else if ( dice1[0] === 4 && dice1[1] === 5 && dice1[2] === 6){

      value.push(20);

    }

    else{

      console.log('roll again')
    }
  }

  $('.playerOne').text(value[0]);
$('.playerTwo').text(value[1]);
}
