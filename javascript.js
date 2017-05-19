


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

      function gameTime() {


                for (var i=0; i<randomWord.length; i++) {
                    answerArray[i] = "_";
                }

        document.getElementById("answer").innerHTML = answerArray.join(" ");

        }
          



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

                
                count++;
                document.getElementById("letter").innerHTML = "Letters used: " + letterGuessed.join(guess);
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");


                 }  
                

  
     


          
           




      

        
        
    


