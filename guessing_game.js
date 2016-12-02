     var finished = false;
     var guesses = 0;
     var user_number;
     var right_number;

     function do_game(){
       right_number = Math.floor(Math.random()*100)+1;
       while(!finished){
             user_number = prompt("I am thinking a number between 1 and 100." + "\n\n" + "What is this number?" );
             finished = check_number(user_number);
             guesses++;
       }
     }
     function check_number(){
       if(isNaN(user_number)){
         alert(user_number + " is not a number, please type in a number!");
         return false;
       }
      if(user_number < 0 || user_number > 100){
        alert(user_number + " is not in the range of 1 to 100!");
        return false;
      }
      if(user_number > right_number){
        alert(user_number + " is too large!");
        return false;
      }
      if(user_number < right_number){
        alert(user_number + " is too small!");
        return false;
      }
        alert(user_number + " is correct! Good job!!!" + "\n\n" + "You guessed totally " + guesses + " times.");
        return true;
    }
