let isPlaying = confirm('Do you want to play a game?');
let minCasNum = 0;
let maxCasNum = 8;
let casNumber;
let attempt = 0;
let prize = 0;
let possiblePrize = 100;
let isWon = false;
let isContinue = false;
let prizeReduce = 2;

if (isPlaying === false) {
  alert('You did not become a billionaire, but can.');
} else {
  while (isPlaying === true) {
    casNumber = Math.floor(Math.random() * (maxCasNum - minCasNum + 1)) + minCasNum;
    for (let i = 3; i >= attempt; i--) {
      console.log(i);
      console.log(casNumber);
      if (i === 2) {
        possiblePrize = possiblePrize / prizeReduce;
      }
      if (i === 1) {
        possiblePrize = possiblePrize / prizeReduce;
      }
      if (i < 1) {
        alert('Thank you for your participation. Your prize is: ' + prize);
        if (confirm('Do you want to play again?') === false) {
          isPlaying = false;
          break;
        } else {
          prize = 0;
          attempt = 0;
          possiblePrize = 100;
          i = 3;
        }
      }
      let userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to 8
Attempts left: `+ i + `
Total prize: ` + prize + `
Possible prize on current attempt: `+ possiblePrize));
      if (i === 3 && userNumber === casNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      } else if (i === 2 && userNumber === casNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      } else if (i === 1 && userNumber === casNumber) {
        alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
        isWon = true;
        break;
      }
    }
    if (isWon === true) {
      if (confirm('Do you want to continue?') === true) {
        maxCasNum = maxCasNum + 4;
        casNumber = Math.floor(Math.random() * (maxCasNum - minCasNum + 1)) + minCasNum;
        possiblePrize = possiblePrize * 2;
        for (let i = 3; i >= attempt; i--) {
          console.log('2round ' + i);
          console.log('2round ' + casNumber);
          if (i === 2) {
            possiblePrize = possiblePrize / prizeReduce;
          }
          if (i === 1) {
            possiblePrize = possiblePrize / prizeReduce;
          }
          if (i < 1) {
            alert('Thank you for your participation. Your prize is: ' + prize);
            if (confirm('Do you want to play again?') === false) {
              isPlaying = false;
              break;
            } else {
              prize = 0;
              attempt = 0;
              possiblePrize = 100;
              i = 3;
            }
          }
          let userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to 12
Attempts left: `+ i + `
Total prize: ` + prize + `
Possible prize on current attempt: `+ possiblePrize));

          if (i === 3 && userNumber === casNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            isPlaying = false
            break;
          } else if (i === 2 && userNumber === casNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            isPlaying = false
            break;
          } else if (i === 1 && userNumber === casNumber) {
            alert('Congratulation, you won! Your prize is: ' + (prize = possiblePrize) + '$.');
            isWon = true;
            isPlaying = false
            break;
          }
        }
      } else {
        alert('Thank you for your participation. Your prize is: ' + prize);
        if (confirm('Do you want to play again?') === false) {
          isPlaying = false;
          break;
        } else {
          prize = 0;
          attempt = 0;
          possiblePrize = 100;
        }
      }
    }
  }
}