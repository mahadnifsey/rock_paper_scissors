function storeVar(value){
  // User Selection
  let userChoice = value;
  console.log(userChoice);
    
  // Computer Selection
  let choiceStack = ['paper', 'rock', 'scissors'];
  
  let randomNum = Math.floor(Math.random() * 3);
  
  let computerChoice = choiceStack[randomNum];
  
  console.log(document.getElementById('uPick').innerHTML = `Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);
    
  // Selecting a Winner based on selections
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    console.log(document.getElementById('main').innerHTML = "Tie!");
  }else if (
    userChoice === 'paper' && computerChoice === 'rock'){
    console.log(document.getElementById('main').innerHTML = "You win!");
  }else if (userChoice === 'rock' && computerChoice === 'scissors'){
    console.log(document.getElementById('main').innerHTML = "You win!");
  }else if (userChoice === 'scissors' && computerChoice === 'rock'){
    console.log(document.getElementById('main').innerHTML = "You lose!");
  }else if (userChoice === 'rock' && computerChoice === 'paper'){
    console.log(document.getElementById('main').innerHTML = "You lose!");
  }else if (userChoice === 'paper' && computerChoice === 'scissors'){
    console.log(document.getElementById('main').innerHTML = "You lose!");
  }else if (userChoice === 'scissors' || computerChoice === 'paper'){
    console.log(document.getElementById('main').innerHTML = "You lose!");
  }else{
    console.log(document.getElementById('main').innerHTML = "Invalid input, please try again");
  };
};
  
  console.log(determineWinner(userChoice, computerChoice));

  };
  
  // Clearing everything.
  function clearResult() {
    console.log(document.getElementById('uPick').innerHTML ="");
    console.log(document.getElementById('main').innerHTML = "");
  }