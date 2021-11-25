/*function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if (argMoveId == 2){
    return 'papier';
  }
  else if (argMoveId == 3){
    return 'nozyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz')
    return 'Ty wygrywasz'
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
    printMessage('computer wygrywa');

  }

  else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('remis');

  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
    printMessage('Ty wygrywasz');

  }

  else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('remis');

  }


  else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('computer wygrywa');

  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
    printMessage('remis');

  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
    printMessage('computer wygrywa');

  }

  else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz');

  }

}




let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

 /*if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber ==2){
  computerMove = 'papier';
}

else if(randomNumber ==3){
  computerMove = 'nozyce';
}
*/

/*printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

 /*if(playerInput == '1'){
  playerMove = 'kamień';
}

else if (playerInput == '2'){
  playerMove = 'papier';
}

else if (playerInput == '3'){
  playerMove = 'nozyce'
}
*/

/*printMessage('Twoj ruch: ' + playerMove);




if( computerMove == 'kamień' && playerMove == 'papier')
{
  printMessage('Ty wygrywasz!');
}

else if( computerMove == 'kamień' && playerMove == 'nozyce')
{
  printMessage('computer wygrywa');
}

else if ( computerMove == 'kamień' && playerMove == 'kamień')
{
  printMessage('remis');
}

else if (computerMove == 'papier' && playerMove == 'nozyce')
{
  printMessage('Ty wygrywasz');
}

else if (computerMove == 'papier' && playerMove == 'papier')
{
  printMessage('remis');
}

else if (computerMove == 'papier' && playerMove == 'kamień')
{
  printMessage('computer wygrywa');
}

else if (computerMove == 'nozyce' && playerMove == 'nozyce')
{
  printMessage('remis');
}

else if (computerMove == 'nozyce' && playerMove == 'papier')
{
  printMessage('computer wygrywa');
}

else if (computerMove == 'nozyce' && playerMove == 'kamień')
{
  printMessage('Ty wygrywasz');
}
*/









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





let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1)
{
  computerMove = 'kamień';
}

else if(randomNumber ==2)
{
  computerMove = 'papier';
}

else if(randomNumber ==3)
{
  computerMove = 'nozyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1')
{
  playerMove = 'kamień';
}

else if (playerInput == '2')
{
  playerMove = 'papier';
}

else if (playerInput == '3')
{
  playerMove = 'nozyce'
}
*/
printMessage('Twój ruch to: ' + playerMove);





if( computerMove == 'kamień' && playerMove == 'papier')
{
  printMessage('Ty wygrywasz!');
}

else if( computerMove == 'kamień' && playerMove == 'nozyce')
{
  printMessage('computer wygrywa');
}

else if ( computerMove == 'kamień' && playerMove == 'kamień')
{
  printMessage('remis')
}

else if (computerMove == 'papier' && playerMove == 'nozyce')
{
  printMessage('Ty wygrywasz');
}

else if (computerMove == 'papier' && playerMove == 'papier')
{
  printMessage('remis');
}

else if (computerMove == 'papier' && playerMove == 'nozyce')
{
  printMessage('Ty wygrywasz!');
}

else if (computerMove == 'papier' && playerMove == 'kamień')
{
  printMessage('computer wygrywa')
}

else if (computerMove == 'nozyce' && playerMove == 'nozyce')
{
  printMessage('remis');
}

else if (computerMove == 'nozyce' && playerMove == 'papier')
{
  printMessage('computer wygrywa');
}

else if (computerMove == 'nozyce' && playerMove == 'kamień')
{
  printMessage('Ty wygrywasz');
}

else if (playerMove == 'nieznany ruch')
{
  printMessage('Wprowadz 1,2 lub 3.');
}
