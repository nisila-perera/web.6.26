let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("You idiot go and play the game don't cheat!");
let count = 0;

document.getElementById("btn").addEventListener("click", check);

function check() {
    count++;
    let userGuess = parseInt(document.getElementById("txt").value, 10);
    let resultMessage = "";

    if (userGuess == randomNumber) {
        resultMessage = "Congratulations! You win";
    } else if (userGuess > randomNumber) {
        resultMessage = "Your guess is too high. Try again";
    } else if (userGuess < randomNumber) {
        resultMessage = "Your guess is too low. Try again";
    }

    if(count < 3){
        document.getElementById("result").innerText = resultMessage;
    } else {
        document.getElementById("result").innerText = "You've reached the maximum number of attempts.";
    }
}