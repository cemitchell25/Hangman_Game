


      var food = [
        "waffles",
        "tamales",
        "cantaloupe",
        "spaetzle",
        "zucchini",
        "liverwurst"
        ];


        var count =0;
        var answerArray = [];

      function gameTime() {

         var randomWord = food[Math.floor(Math.random() * food.length)];


        for (var i=0; i<randomWord.length; i++) {
          answerArray[i] = "_";
        }

        document.getElementById("answer").innerHTML = answerArray.join(" ");
          



                function playerGuess() {

                var letter = document.getElementById("letter").value;

                if (letter.length > 0)

                    {   for (var i = 0; randomWord.length > i; i++)

                        { if (randomWord[i] === letter)

                            {
                                answerArray[i] = letter;
                            }

                        }
                
                count++;
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");

                    }}}



      

        
        
    


