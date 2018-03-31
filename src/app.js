const di = [1, 2, 3, 4, 5, 6];
let value = [];
$('button').click(playGame);
$('button').click(startAni);

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

function diePics(it) {
  if (it[0] === 4) {
    $('#die1').css('background-image:', 'url("../images/die4.png")');

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


function startAni(){

  $('.die1').addClass('animation');

}
// $.keyframe.define({

//   name:'roll',

//   from: {
//     'transform': 'scale(.5) rotate(0deg)'
//   },
//   to: {
//     'transform' : 'scale(1) rotate(3600deg)'
//   }

// });

// $('#die1').playKeyframe({
//     name: 'roll', // name of the keyframe you want to bind to the selected element
//     duration: '10s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
//     timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
//     delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
//     iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
//     direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
//     fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
//     complete: function(){} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
// });

