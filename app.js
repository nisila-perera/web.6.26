let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log("Don't cheat go and play!!!");
let count = 0;

document.getElementById("btn").addEventListener("click", check);

function check() {
    count++;
    let userGuess = parseInt(document.getElementById("txt").value, 10);
    let resultMessage = "";

    if (userGuess == randomNumber) {
        resultMessage = "Congratulations! You win";
    } else if (userGuess > randomNumber) {
        resultMessage = "You idiot can't even guess a number try again :(";
    } else if (userGuess < randomNumber) {
        resultMessage = "You idiot can't even guess a number try again :(";
    }

    if(count < 3){
        document.getElementById("result").innerText = resultMessage;
    } else {
        document.getElementById("result").innerText = "You've reached the maximum number of attempts. Refresh";
    }
}