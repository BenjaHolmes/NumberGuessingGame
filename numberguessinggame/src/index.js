import "./styles.css";

let guess = 0;
let answer = Math.floor(Math.random() * 11);
let max_guesses = 5;
let num_guesses = 0;
let lives_remaining = 5;

console.log(answer);

function compare() {
  guess = document.getElementById("userGuess").value;
  if (guess > 0) {
    if (guess < 11) {
      if (num_guesses < max_guesses) {
        if (guess == answer) {
          document.getElementById("answerCheck").innerHTML = "Correct!";
          let numChange = document.getElementById(`${guess}`);
          numChange.style.color = "green";
          numChange.style.textDecoration = "bold";
          num_guesses = 5;
        } else {
          document.getElementById("answerCheck").innerHTML =
            "Wrong! Try Again!";
          let numChange = document.getElementById(`${guess}`);
          numChange.style.color = "red";
          numChange.style.textDecoration = "line-through";
          num_guesses++;
          lives_remaining--;
          document.getElementById(
            "livesRem"
          ).innerHTML = `Lives Remaining : ${lives_remaining}`;
        }
      } else {
        alert("The Game is now over, to try again, reset the page.");
      }
    } else {
      alert("Please Only Enter Numbers Between 1 and 10");
    }
  } else {
    alert("Please Only Enter Numbers Between 1 and 10");
  }
}

const submit_button = document.getElementById("submit");

submit_button.addEventListener("click", (e) => {
  compare();
});
