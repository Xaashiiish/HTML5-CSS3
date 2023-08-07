
const closeRules = () => {
    let rules = document.querySelector(".rulespage");
    rules.style.display = "none";
}
const showRules = () => {
    let rules = document.querySelector(".rulespage");
    rules.style.display = "";
}

const handOptions = {
    "rock": "images/Rock.png",
    "paper": "images/Paper.png",
    "scissors": "images/Scissors.png"
}
let SCORE = 0;

const myHand = (picked) => {
    // hide hand page
    let handsPanel = document.querySelector(".hands");
    handsPanel.style.display = "none";
    // show next page
    let contestPanel = document.querySelector(".contest");
    contestPanel.style.display = "flex";
    // show image
    document.getElementById("youPicked").src = handOptions[picked];

    let comPicked = comHand();
    decision(picked, comPicked);
}
const comHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let comPicked = hands[Math.floor(Math.random() * 3)];

    document.getElementById("comPicked").src = handOptions[comPicked];

    return comPicked;

}

const decision = (yourHand, comPicked) => {
    let userIMG = document.getElementById("userPickIMG");
    let comIMG = document.getElementById("comPickIMG");

    if (yourHand == "paper" && comPicked == "scissors") {
        setDecision("YOU LOSE!");
        comIMG.classList.add("winner");
      }
      if (yourHand == "paper" && comPicked == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        userIMG.classList.add("winner");
      }
      if (yourHand == "paper" && comPicked == "paper") {
        setDecision("It's a tie!");
      }
      if (yourHand == "rock" && comPicked == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        userIMG.classList.add("winner");
      }
      if (yourHand == "rock" && comPicked == "paper") {
        setDecision("YOU LOSE!");
        comIMG.classList.add("winner");
      }
      if (yourHand == "rock" && comPicked == "rock") {
        setDecision("It's a tie!");
      }
      if (yourHand == "scissors" && comPicked == "scissors") {
        setDecision("It's a tie!");
      }
      if (yourHand == "scissors" && comPicked == "rock") {
        setDecision("YOU LOSE!");
        comIMG.classList.add("winner");
      }
      if (yourHand == "scissors" && comPicked == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
        userIMG.classList.add("winner");
      }
}

const playMore = () => {
    // reset win animation
    let userIMG = document.getElementById("userPickIMG");
    let comIMG = document.getElementById("comPickIMG");
    userIMG.classList.remove("winner");
    comIMG.classList.remove("winner");

    // hide decide page
    let handsPanel = document.querySelector(".contest");
    handsPanel.style.display = "none";

    // show picking page
    let contestPanel = document.querySelector(".hands");
    contestPanel.style.display = "flex";
}
const setDecision = (decision) => {
    let announce = document.querySelector(".result > h1");
    announce.innerText = decision;
}
const setScore = (reScore) => {
    SCORE = reScore;
    let scoreboard = document.getElementById("score");
    scoreboard.innerText = reScore;
}