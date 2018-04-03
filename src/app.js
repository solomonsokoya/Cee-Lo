const di = [1, 2, 3, 4, 5, 6];
const value = [];
let x = 1;
let $player1 = '';
let $player2 = '';


// Eventlistener for sumbit button
const submitClick = $('#submitButton').on('click', (e) => {
  e.preventDefault();

  $player1 = $('#player1').val();
  $player2 = $('#player2').val();

  $('.landingPage').css('display', 'none');
  $('.content').text(`${$player1}'s Roll`);
});


// Since there is only one button, used a counter to give each click different attr
$('button').click(() => {
  if (x === 1) {
    makeDice();
    playGame();
    x++;
  } else if (x === 2 && value.length < 2) {
    for (let n = 1; n <= 3; n++) {
      const $di = $(`.die${n}`);
      $di.addClass(`die${n + 10}`);
      $('img').removeClass(`die${n}`);
    }
    playGame();
    x++;
  } else if (x === 3 && value.length < 2) {
    for (let n = 1; n <= 3; n++) {
      const $img = $(`.img${n}`);
      $img.removeClass(`die${n + 10}`).addClass(`die${n}`);
    }
    playGame();
    x--;
  } else if (value.length === 2) {
    location.reload(true);
  } else if (value[0] === 20) {
    location.reload(true);
  } else if (value[0] == 0) {
    location.reload(true);
  }
});

// Function to move dice to the left by adding classes
function moveDiceToTheLeft() {
  for (let i = 1; i <= 3; i += 1) {
    const $div = $(`.die${i}`);

    $div.addClass(`die${i + 10}`);
  }
}
// Generates a random number
function roll(dice) {
  return dice[Math.floor(Math.random() * dice.length)];
}

// Generate an Array of 3 random numbers
function setDice() {
  const playerRoll = [];
  for (let i = 1; i <= 3; i += 1) {
    const rolling = roll(di);
    playerRoll.push(rolling);
  }

  return (playerRoll);
}

// Function changes the picture of dice when the numbers change
function diePics(diceArray) {
  for (let i = 0; i < 3; i += 1) {
    $(`.img${i + 1}`).attr('src', `images/die${diceArray[i]}.png`);
  }
}

// Game function

function playGame() {
  const temp = setDice();
  console.log(temp);
  diePics(temp);

  if (temp[0] === temp[1] && temp[1] === temp[2]) {
    value.push(1 + temp[0]);
    $('.content').text(`Trip ${temp[0]}`);
  } else if (temp[0] === temp[1] || temp[1] === temp[2] || temp[0] === temp[2]) {
    temp.sort();
    if (temp[0] === temp[1]) {
      value.push(temp[2]);
    } else if (temp[1] === temp[2]) {
      value.push(temp[0]);
    } else {
      value.push(temp[1]);
    }
  } else {
    temp.sort();
    if (temp[0] === 1 && temp[1] === 2 && temp[2] === 3) {
      value.push(0);
    } else if (temp[0] === 4 && temp[1] === 5 && temp[2] === 6) {
      value.push(20);
    } else {
      console.log('roll again');
    }
  }
  console.log(value);

  $('.playerOne').text(value[0]);
  $('.playerTwo').text(value[1]);

  setTimeout(compareValue, 1200);
  back();
}

// Makes the first set of Arrays
function makeDice() {
  for (let i = 1; i <= 3; i += 1) {
    const $div = $(`.dice${i}`);
    $div.append(`<img class = "die${i} img${i}" src ="images/die1.png">`);
  }
}

// Compare Function

function compareValue() {
  if (value.length === 2) {
    if (value[0] > value[1]) {
      $('.content').text(`${$player1} Has Won`);
      $('.button').text('Play Again');
    } else if (value[0] < value[1]) {
      $('.content').text(`${$player2}  Has Won`);
      $('.button').text('Play Again');
    } else {
      $('.content').text('Play Again');
      $('.button').text('Play Again');
    }
  } else if (value.length === 1) {
    if (value[0] === 20) {
      $('.content').text(`${$player1}  Has Won`);
      $('.button').text('Play Again');
    } else if (value[0] === 0) {
      $('.content').text(`${$player2}  Has Won`);
      $('.button').text('Play Again');
    }
  }
}

function back() {
  if (value.length === 1) {
    $('.content').text(`${$player2}'s  Turn`);
  }
}
