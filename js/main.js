// Ensure that the user only chooses betweeen 'rock', 'paper' or 'scissors'.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log("Please type either rock, paper or scissors")
    }
  };
  
  // Make the computer choose using math.random.
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Conditions to determine the game winner.
  const determineWinner = (userChoice, computerChoice) => {
    // This determines Tie scenario.
    if (userChoice === computerChoice){
      return "This game is a Tie!!!";
    }
    // If user picks rock.
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
      }
    }
    // If user picks paper.
    if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
      }
    }
    // If user picks scissors.
    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
      }
    }
    // If user picks bomb.
    if (userChoice === 'bomb') {
    if (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors')  {
      return 'You won!';
    } 
    }
  };
  
  // A function to start the game.
  const playGame = () => {
    // The users choice.  
    const userChoice = getUserChoice('rock'); 
    // The computers choice.  
    const computerChoice = getComputerChoice();
    // printing what the user chose. 
    console.log("You threw " + userChoice);
    // printing what the computer chose.
    console.log("The computer threw " + computerChoice);
    // Determining a Winner.
    console.log(determineWinner(userChoice, computerChoice));
    // This will print the results of the game.
    document.getElementById("main").innerHTML = determineWinner(userChoice, computerChoice);
  };

  // Calling the play function.
  playGame();
  
  function myFunction() {
    var x = document.getElementById("rockBtn").value;
    console.log(x);
  }