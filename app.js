'use strict';
    
       function getName(){
              const theirName = prompt("By the way, what's your name?");
              console.log("User says their name is " + theirName);
              return theirName;
       }

       function greetUserInDoc(){
              document.write("Arf! " + usersName + ", welcome to my page!")
       }

       function getDogFan(){
              const theirDogFan = prompt("Are you a fan of dogs?");
              console.log("User says " + theirDogFan + " to if they're a fan of dogs.");
              if (theirDogFan == "Yes"){
                     alert ("Good choice. We like you already!")
                     } else if (theirDogFan == "yes"){
                     alert ("Good choice. We like you already!")
                     } else if (theirDogFan == "yep"){
                     alert ("Good choice. We like you already!")
                     } else {
                     alert ("Can't agree with you there, but let's move on, shall we?")
                     }
              return theirDogFan;
       }

       function getUsersDogtype(){
              let theirDogtype;
              do {
                     theirDogtype = prompt("Would you say you prefer 1) classic, 2) wiener, or 3) long haired dogs? Please answer with a 1, 2, or 3.");
              if (theirDogtype !== "1" && theirDogtype !== "2" && theirDogtype !== "3") {
                     alert ("Grrrr! Wait a minute, that wasn't one of the choices! Please enter a 1, 2, or 3, for your favorite type of dog. ◡̈");
              }
              } while (theirDogtype !== "1" && theirDogtype !== "2" && theirDogtype !== "3");
             
              console.log("User says their favorite dog type is number " + theirDogtype);
              return theirDogtype;
       }

       function writeDogtypeMessageOne(){
              if (usersDogtype == "1"){
                     document.write("Hey, " + usersName + ", I'm going to have to agree with you on your favorite dog type! Us classic guys gotta stick together!");
                 } 
                 return 
       }

       function writeDogtypeMessageTwo(){
              if (usersDogtype == "2"){
                     document.write("Hey, " + usersName + ", I'm going to have to agree with you on your favorite dog type! Us little guys gotta stick together!");
                 }  
                 return 
       }

       function writeDogtypeMessageThree(){
              if (usersDogtype == "3"){
                     document.write("Hey, " + usersName + ", I'm going to have to agree with you on your favorite dog type! Us shaggy guys gotta stick together!");
                 } 
                 return 
       }

       function writeJoke(){
              if (usersName == "Kassie"){
                     document.write("Wait! " + usersName + ", how did your photo get on my page!?!");
                 } else if (usersName == "Adam"){
                     document.write("Wait! " + usersName + ", how did your photo get on my page!?!");
                 } else if (usersName == "Cameron"){
                     document.write("Wait " + usersName + ", how did your photo get on my page!?!");
                 } else if (usersName == "Cameron Walden"){
                     document.write("Wait " + usersName + ", how did your photo get on my page!?!");
                 } else if (usersName == "Adam Owada"){
                     document.write("Wait " + usersName + ", how did your photo get on my page!?!");
                 } 
       }

       

     


       // if (this is true) {execute this code}

       if (usersName == "Kassie"){
        document.write(" Hiya teach!");
       } else if (usersName == "Adam"){
        document.write(" YOU DA BOMB!");
       } else if (usersName == "Cameron"){
        document.write(" YOU DA BOMB!");
       } else if (usersName == "Cameron Walden"){
        document.write(" YOU DA BOMB!");
       } else if (usersName == "Adam Owada"){
        document.write(" YOU DA BOMB!");
       } else {
        alert("Fantastic, we're glad to have you here!");
       }

       // FUNCTIONS!!!

       // function addTwoNumbers(num1, num2) {
       //       let sum = num1 + num2;
       //       console.log("Sum is: " + sum);
       //       return sum;
       

       // let myNumber = addTwoNumbers();

       // // invoking it, or calling it
       // addTwoNumbers(1,2);
       // addTwoNumbers(34,34); 



