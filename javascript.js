      var food = [
        "waffles",
        "tamales",
        "cantaloupe",
        "spaetzle",
        "zucchini",
        "liverwurst"
        ];

        var randomWord = food[Math.floor(Math.random() * food.length)];
        var count =0;
        var answerArray = [];
        var letterGuessed = [];
        var guessesRemaining = 20;

      function gameTime() {


                for (var i=0; i<randomWord.length; i++) {
                    answerArray[i] = "_";

                }


        document.getElementById("answer").innerHTML = answerArray.join(" ");

        }
          



        function playerGuess(letter) {

            var guess = document.getElementById("guess").value;
     
            letterGuessed.push(letter);

           
                // if (guess.length > 0)


                      for (var i = 0; randomWord.length > i; i++) {

                         if (randomWord[i] === letter) {
                                answerArray[i] = letter;
                       
                            }
                           
                            if (randomWord === answerArray.join("")) { 
                            alert("YOU WON! The correct word was " + randomWord + "!");

                            }

                            if (guessesRemaining === 0) {

                                alert("Whoops, you lose. Try again");
                            }
                    }

                            console.log(food[i]);
                            console.log(answerArray.join(""));
                            console.log(randomWord);

                guessesRemaining--;
                count++;
            
                document.getElementById("letter").innerHTML = "Letters used: " + letterGuessed.join(" ");
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
                document.getElementById("answer").innerHTML = answerArray.join(" ");


                 }  

                 document.addEventListener("keyup", function(event){

                    playerGuess(event.key)
                 })
     


          
           




      

        
        
    


