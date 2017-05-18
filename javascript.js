

      var food = [
        "waffles",
        "tamales",
        "cantaloupe",
        "spaetzle",
        "zucchini",
        "liverwurst"
        ];


        var randomWord = food[Math.floor(Math.random() * food.length)];
        var s;
        var count =0;
        var answerArray = [];

      function gameTime() {

        for (var i=0; i<randomWord.length; i++) {
          answerArray[i] = "_";
        }

    
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;

          }

        function guess() {
          var guess = document.getElementById("guess").value;

          if (guess.length > 0) {

            for (var i=0; i<randomWord.length; i++)
              {
                if (randomWord[i] === guess)
                { answerArray[i] == guess;


                }}}

        };

        count++;
        document.getElementById("answer").innerHTML = answerArray.join(" ");

      



        
        // var guess = prompt("Guess a letter!");

        //   if (guess === null) {
        //     break;
        //   }
        //   else if (guess.length !== 1) {
        //     alert("Please enter a single letter");
        //   }

        //   else {
        //     for(var j=0; j<word.length; j++) {
        //       if (word[j] === guess) {
        //         answerArray[j] = guess;
        //         remainingLetters--;
        //       }
        //     }
        //   }
        // }
        


        //   document.getElementById(answerArray.join(" "));
        //   alert("Good job! The answer was " + word);

        // };
