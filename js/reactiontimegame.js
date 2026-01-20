/**
 * a simple game that tests your reaction by clicking the colored object as fast as possible
 */

//this function gets me a random color 
function getRandomColor() { 
    let letters = "0123456789ABCDEF"; //hex code for random colors
    let color = "#"; //needs to start with a # to since all hex codes start with it 
    for (let i = 0; i < 6; i++) { //picks a random character from "letters" and appends it to the color string 
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; //returns my random color for example "#1A47F5C"
}

let clickedTime, createdTime, reactionTime; //variables to store the timestamps and to calc. with them 

// this function creates and displays a new "box" (our target we need to click on in time)
function makeBox() {
    let time = Math.random() * 3000; //random delay too make it different everytime

    setTimeout(function() { //shows a new "box" after the delay 
        // randomizes shape: Circle or Square
        if (Math.random() > 0.5) {
            document.getElementById("box").style.borderRadius = "100px"; // circle
        } else {
            document.getElementById("box").style.borderRadius = "0"; //sqaure
        }
        //random postion of the "box"
        let top = Math.random() * 300;
        let left = Math.random() * 500;
        // applys the random postions
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.left = left + "px";
        //gives the "box" a random color
        document.getElementById("box").style.backgroundColor = getRandomColor();
        //makes the "box" visiable  
        document.getElementById("box").style.display = "block";

        //records the time (in ms) when the box appears 
        createdTime = Date.now();
    }, time); //delay again
}

// waits till page is fully loaded (HTML)
document.addEventListener("DOMContentLoaded", function() {
    //sets up a click event 
    document.getElementById("box").onclick = function() {
        clickedTime = Date.now(); // gets the time when i click it
        reactionTime = (clickedTime - createdTime) / 1000; // calc. reaction time in sec.
        // displays the reaction time with 2 decimals
        document.getElementById("printReactionTime").innerHTML = 
            "Your Reaction Time is: " + reactionTime.toFixed(2) + " seconds";
        //Hides the "box" again after it has been clicked
        this.style.display = "none";
        makeBox(); // start process again for the next "box"
    };

    makeBox(); // start of the first "box"
});