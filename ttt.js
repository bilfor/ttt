const gameBoard = (() => {
  const gameGrid = document.querySelector('#gameGrid');

  const space0 = document.querySelector('#space1');
  const space1 = document.querySelector('#space2');
  const space2 = document.querySelector('#space3');
  const space3 = document.querySelector('#space4');
  const space4 = document.querySelector('#space5');
  const space5 = document.querySelector('#space6');
  const space6 = document.querySelector('#space7');
  const space7 = document.querySelector('#space8');
  const space8 = document.querySelector('#space9');

  const gameArray = [,,,,,,,,,];
  const emptySpaces = () => gameArray.length - gameArray.filter(String).length; 
  
  return {gameArray, emptySpaces};
})();  

const Player = (name, shape) => {
  const move = (destination) => {
    gameBoard.gameArray[destination] = shape;
    console.log(destination);
    switch(destination) {
      case '0': space0.append(shape); break;
      case '1': space1.append(shape); break;
      case '2': space2.append(shape); break;
      case '3': space3.append(shape); break;
      case '4': space4.append(shape); break;
      case '5': space5.append(shape); break;
      case '6': space6.append(shape); break;
      case '7': space7.append(shape); break;
      case '8': space8.append(shape); break;
      case '9': space9.append(shape); break;
      default: console.log('lol'); break;
    }
    
    if(gameControl.winCheck(gameBoard.gameArray, 'x')) 
      { 
        console.log("lets gooo");
        gameGrid.append('jeff wins!');
      }

    if(gameControl.winCheck(gameBoard.gameArray, 'o')) 
      {
        console.log("lets gooo");
        gameGrid.append('ghislane wins!');
      }
  }

  return { name, shape, move };
}

const gameControl = (() => {
  const winCheck = (board, piece) => {
    if (board[0] == piece && board [1] == piece && board[2] == piece) return 1;
    if (board[3] == piece && board [4] == piece && board[5] == piece) return 1;
    if (board[6] == piece && board [7] == piece && board[8] == piece) return 1;
    if (board[0] == piece && board [3] == piece && board[6] == piece) return 1;
    if (board[1] == piece && board [4] == piece && board[7] == piece) return 1;
    if (board[2] == piece && board [5] == piece && board[8] == piece) return 1;
    if (board[0] == piece && board [4] == piece && board[8] == piece) return 1;
    if (board[2] == piece && board [4] == piece && board[6] == piece) return 1;
    return 0;
  }
  return {winCheck};
})();

const pageControl = (() => {
  let playSpace;
  gameGrid.addEventListener("click", function(event) {
    playSpace = event.originalTarget.id; 
    playSpace = playSpace.charAt(playSpace.length-1);
    console.log(playSpace);
    if(turn % 2 == 0) {
      jeff.move(playSpace);
    }  else {
         ghislane.move(playSpace);
       } 
    turn++;
  }); 
return {playSpace};
})(); 

const jeff = Player('jeff','x');
const ghislane = Player('ghislane','o');
let turn = 0;
