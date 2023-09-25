'use strict';

       // console.log("I am in the HTML"); 
       alert("Welcome to my page!");

       const dogFan = prompt("Are you a fan of dogs?");
       console.log("User says " + dogFan + " to if they're a fan of dogs.");

       if (dogFan == "Yes"){
        alert ("Good choice. We like you already!")
       } else if (dogFan == "yes"){
        alert ("Good choice. We like you already!")
       } else {
        alert ("Can't agree with you there, but let's move on, shall we?")
       }

       const usersName = prompt("By the way, what's your name?");
       console.log("User says their name is " + usersName);

       const usersDogtype = prompt("Would you say you prefer 1) classic, 2) wiener, or 3) long haired dogs? Please answer with a 1, 2, or 3.");
       console.log("User says their favorite dog type is number " + usersDogtype);

       document.write("Arf! " + usersName + ", welcome to my page!")

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


