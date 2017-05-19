


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
        /**
        @var answerTargetEl this will be our p tag we inject our dashes and update our words El is short for element btw :)
        */
        var answerTargetEl;
      function gameTime() {

        console.log(' IM THE RANDOM WORD!', randomWord);
                for (var i=0; i<randomWord.length; i++) {
                answerArray.push("_");
                }

        answerTargetEl = document.getElementById("answer").innerHTML = answerArray.join(" ");

        };




        function playerGuess(letter) {
          console.log(' PLAYER GUESS FIRE!');

                  for (var i = 0; randomWord.length > i; i++) {
                      if (randomWord.charAt(i) === letter) {
                        // console.log('IM THE answerArray[i]', randomWord.charAt(i), letter );
                                answerArray[i] = letter;
                                // answerTargetEl.innerHTML  = answerArray.join("");
                            }

                            // console.log(letter.length);
                            console.log(randomWord);
                            console.log(letter);
                            let answer = answerArray.join('');
                            console.log("Answer Array", answer);
                            if (answer === randomWord) {
                            alert("YOU WON!");

                            }

                    }


                count++;
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");


                    }
                    
          document.addEventListener('keyup', function(event) {
              playerGuess(event.key);
          })
