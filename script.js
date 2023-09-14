var win = 0;
var loss = 0;
var tie = 0;

var options = ["Rock", "Paper", "Scissors"];
var computerInput = 0;
var userInput = 0;


var computerNum = function () {



    var randomIndex = Math.floor(Math.random() * options.length);
    computerInput = options[randomIndex];



    return computerInput;


}


var UserNum = function () {

    userInput = window.prompt("Enter any one among these Rock,Paper, Scissors");

    return userInput;


}

var PlayGame = function () {

    window.alert("Computer choose this:" + " " + computerInput);


    if (userInput == "Rock" && computerInput == "Rock" || userInput == "Paper" && computerInput == "Paper" || userInput == "Scissors" && computerInput == "Scissors") {

        window.alert("There is tie the game");
        tie++;
        window.confirm("Score is:\n" + " " + " \nTie: " + tie + " " + "\nWin: " + win + " " + "\nLoss:" + loss);




    } else if (userInput == "Rock" && computerInput == "Scissors" || userInput == "Scissors" && computerInput == "Paper" || userInput == "Paper" && computerInput == "Rock") {

        window.alert("you win the game");
        win++;
        window.confirm("Score is:" + " " + " Tie: " + tie + " " + "Win: " + win + " " + "Loss:" + loss);

    } else {

        window.alert("you loss the game");
        loss++;
        window.confirm("Score is:" + " " + " Tie: " + tie + " " + "Win: " + win + " " + "Loss:" + loss);

    }
}
computerNum();


UserNum();
PlayGame();

