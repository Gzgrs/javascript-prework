function getMoveName(argMoveId){
  if(argMoveId == 1)
  {
    return 'kamień';
  }

  else if (argMoveId == 2)
  {
    return 'papier';
  }

  else if (argMoveId == 3)
  {
    return 'nozyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
   return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier')
  {
    printMessage('Ty wygrywasz!');
  }

  else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyce')
  {
    printMessage('computer wygrywa');
  }

  else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień')
  {
    printMessage('remis')
  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce')
  {
    printMessage('Ty wygrywasz');
  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'papier')
  {
    printMessage('remis');
  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce')
  {
    printMessage('Ty wygrywasz!');
  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień')
  {
    printMessage('computer wygrywa')
  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce')
  {
    printMessage('remis');
  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier')
  {
    printMessage('computer wygrywa');
  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
  {
    printMessage('Ty wygrywasz');
  }

  else if (argPlayerMove == 'nieznany ruch')
  {
    printMessage('Wprowadz 1,2 lub 3.');
  }
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);



printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);


displayResult(computerMove, playerMove)
