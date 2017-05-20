


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
          



        function playerGuess(letter) {

            var guess = document.getElementById("guess");
            console.log(letterGuessed);
            var push = letterGuessed.push(letter);


            console.log(letterGuessed);

            console.log(push, "IM THE PUSH");
            console.log(guess, "IM THE GUESS");


    

           
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
                var joined = push;

                console.log(joined, "IM THE JOIN");
                document.getElementById("letter").innerHTML = "Letters used: " + push;
                document.getElementById("guesses").innerHTML = "# of guesses: " + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");


                 }  

                 document.addEventListener("keyup", function(event){

                    playerGuess(event.key)
                 })
                

  
     


          
           




      

        
        
    


