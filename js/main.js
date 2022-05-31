var vid1 = document.getElementById("video1");
var vid2 = document.getElementById("video2");

// Play the Video
playVid1 = () => { vid1.play(); };
playVid2 = () => { vid2.play(); };
// Pause the video
playVid3 = () => { vid1.load(); };
playVid4 = () => { vid2.load(); };

function clearResult() {
  console.log(document.getElementById('uPick').innerHTML ="");
  console.log(document.getElementById('main').innerHTML = "");
  document.getElementById("video1").style.display = 'none';
  document.getElementById("video2").style.display = 'none';
  playVid3();
  playVid4();
};

function storeVar(value){
// First Clear the field
clearResult();
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
    document.getElementById("video1").style.display = 'block';
    playVid1();
  }else if (userChoice === 'rock' && computerChoice === 'scissors'){
    console.log(document.getElementById('main').innerHTML = "You win!");
    document.getElementById("video1").style.display = 'block';
    playVid1();
  }else if (userChoice === 'scissors' && computerChoice === 'paper'){
    console.log(document.getElementById('main').innerHTML = "You win!");
    document.getElementById("video1").style.display = 'block';
    playVid1();
  }else{
    console.log(document.getElementById('main').innerHTML = "You lose!");
    document.getElementById("video2").style.display = 'block';
    playVid2();
  };
};

console.log(determineWinner(userChoice, computerChoice));

};
