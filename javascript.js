


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

            var letter = document.getElementById("letter").value;

                if (letter.length > 0)

                    {   for (var i = 0; randomWord.length > i; i++)

                        { if (randomWord[i] === letter)

                            {
                                answerArray[i] = letter;
                            }

                            console.log(answerArray);
                            console.log(letter.length);
                            console.log(randomWord);
                            console.log(letter);

                            if (answerArray === randomWord) {
                            alert("YOU WON!");

                            }

                    }

                
                count++;
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");


                    }}

  


          
           




      

        
        
    


