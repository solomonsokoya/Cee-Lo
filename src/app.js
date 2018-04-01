const di = [1, 2, 3, 4, 5, 6];
let value = [];
$('button').click(makeDice).click(playGame);

function roll(dice) {
  return dice[Math.floor(Math.random() * dice.length)];
}

function setDice() {
  const playerRoll = [];
  for (let i = 1; i <= 3; i += 1) {
    const rolling = roll(di);
    playerRoll.push(rolling);
  }

  return (playerRoll);
}

function diePics(diceArray) {
  for ( let i = 0; i < 3; i+= 1) {
    $(`#die${i+1}`).attr('src', `images/die${diceArray[i]}.png`);
  }
}

function playGame() {
  const temp = setDice();
  console.log(temp);
  diePics(temp);

  if (temp[0] === temp[1] && temp[1] === temp[2]) {
    value.push(1 + temp[0]);
    $('.content').text(`Trip ${temp[0]}`);
  }
  else if (temp[0] === temp[1] || temp[1] === temp[2] || temp[0] === temp[2]) {
    temp.sort();
    if (temp[0] === temp[1]) {
      value.push(temp[2]);
    }
    else if (temp[1] === temp[2]) {
      value.push(temp[0]);
    }
    else {
      value.push(temp[1]);
    }
  }
  else {
    temp.sort();
    if (temp[0] === 1 && temp[1] === 2 && temp[2] === 3) {
      value.push(0);
    }
    else if (temp[0] === 4 && temp[1] === 5 && temp[2] === 6) {
      value.push(20);
    }
    else {
      console.log('roll again');
    }
  }
  console.log(value);

  $('.playerOne').text(value[0]);
  $('.playerTwo').text(value[1]);

setTimeout(compareValue,850);
back();

}

function makeDice(){
  for( let i = 1; i <=3; i+= 1){
    let $div= $(`.dice${i}`);
    $div.append(`<img id = "die${i}" src ="images/die1.png">`);
  }
}
function compareValue(){
  if (value.length === 2) {
    if (value[0] > value[1]) {
      $('.content').text(`P1 Has Won`);
    }
    else if ( value[0] < value[1]){
      $('.content').text(`P2 Has Won`);
    }
    else {
      $('.content').text(`Play Again`);
    }
  }
}

function back(){
  if(value.length === 1) {
    $('.content').text(`P2 Turn`);
  }
}
