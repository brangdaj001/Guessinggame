let doTheThing = function () {

    //loops have 3 parts : control variable, control boolean expression , control increment/decrement/update
    // Control variable - controls when the loop executes
    //control boolean  expression - using the control variable which should at some point evaluate to false
    //control update - assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false


    let restart = "Yes";
    while (restart === "Yes") {

        //Computer pic number
        let computerNumbers = Math.floor((Math.random() * 10) + 1);
        alert(computerNumbers);

        let playersGuess = parseInt(prompt("guess number between 1-10"), 10);
        while (playersGuess !== computerNumbers) {
        }
        if (playersGuess > computerNumbers) {
            playersGuess = prompt("To high, Guess again");
        } else
            playersGuess = prompt("to low,guess again");
    }
        //If higher alert to high and then get players next guess - repeat
        //if lower alert to low and then get players next guess - repeat
        //if equal - alert you win then ask to restart
        // if yes- repeat from beginning
        //if no - no
        alert("You guessed it!!");
        restart = prompt(" Would you like to play again? Type yes or no (case sensitive)");
    };


let doTheOtherThing = function(){
    //save program with a do-while loop
    let restart;

    do{
        let computerNumbers = Math.floor((Math.random() * 10) + 1);
        do {
            playersGuess = parseInt(prompt("guess number between 1-10"), 10);
            if (playersGuess > computerNumbers) {
                playersGuess = prompt("To high, Guess again");
            } else
                playersGuess = prompt("to low,guess again");

        }while
        restart = prompt(" Would you like to play again? Type yes or no (case sensitive)");

    }while(playersGuess !== computerNumbers);
    alert("You guessed it!!");
    restart = prompt(" Would you like to play again? Type yes or no (case sensitive)");
    }while(restart === "Yes");
};


    //alert to get players guess
    //compare guess to number




