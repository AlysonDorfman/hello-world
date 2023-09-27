'use strict';

       // console.log("I am in the HTML"); 
       alert("Welcome to my page!");

       // I put this in the HTML
              //let usersName = getName();
       let usersDogtype = getUsersDogtype();
       let dogFan = getDogFan();
       

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
              const theirDogtype = prompt("Would you say you prefer 1) classic, 2) wiener, or 3) long haired dogs? Please answer with a 1, 2, or 3.");
              console.log("User says their favorite dog type is number " + theirDogtype);
              return theirDogtype;
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



