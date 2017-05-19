


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

      function gameTime() {


                for (var i=0; i<randomWord.length; i++) {
                    answerArray[i] = "_";
                }

        document.getElementById("answer").innerHTML = answerArray.join(" ");

        };
          



        function playerGuess() {

            var guess = document.getElementById("guess").value;

                if (guess.length > 0)

                      for (var i = 0; randomWord.length > i; i++) {


                         if (randomWord[i] === guess)

                            {
                                answerArray[i] = guess;
                            }


                           
                            if (randomWord === answerArray.join("")) 
                            { alert("YOU WON! The correct word was " + randomWord + "!");

                            }

                    }

                         console.log(food[i]);
                            console.log(answerArray.join(""));
                            console.log(randomWord);
                            console.log(guess);

                
                count++;
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");
                // document.getElementById("catwin").innerHTML = (img src= "../Hangman_Game/pusheen.jpg");


                 }    
                

  
     


          
           




      

        
        
    


