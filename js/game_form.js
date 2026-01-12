/**
 * Valdiation of my form in the gaming website
 */


// Waits until the entier page loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element by its ID
    const form = document.getElementById("gameForm");
    // Get the thank you message when the page loads
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Hide thank-you message at start
    thankYouMessage.style.display = "none";

    // starts when the form ist submitted
    form.addEventListener("submit", (event) => {
        // Prevents the browser from reloading the page
        event.preventDefault(); 

        // Gets the value entered in the "name" input field
        const name = document.getElementById("name").value;
        // Gets the vaule entered in the "favorite Game" input field
        const favoriteGame = document.getElementById("favoriteGame").value;
        // Gets the text from the "tell me about your favorite Game.." textarea
        const message = document.getElementById("message").value;
        // Get my input of the games have been checked
        const checked = document.querySelectorAll('input[name="played"]:checked')

        // Valdiation

        // Checks if the name is at least 2 characters long
        if (name.length < 2) {
            alert("Please enter your name (at least 2 characters).");
        }
        // Checks if favorite game is filled in
        if (favoriteGame.length < 2) {
            alert("Please enter your favorite game.");
        }
        // Checks if at least one checkbox is selected
        if (checked.lenght === 0) {
            alert("Please select at least one game you have played.");
            return;
        }
        // Check if message is long enough
        if (message.length < 10) {
            alert("Please write at least 10 characters in the message.");
        }

        // Show thank-you message
        thankYouMessage.style.display = "block";

        // resets form
        form.reset();
    });
});