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

        // Creats an empty array (list) to store checked games
        const checkedGames = [];

        // Find all check checkboxes with name "played"
        document.querySelectorAll('input[name="played"]:checked')
                .forEach((checkbox) => {
            // Add each checked game's value to array (list)
            checkedGames.push(checkbox.value);
        });

        //Loging all collected data to the console (for leanring/debugging)
        console.log("Name:", name);
        console.log("Favorite Game:", favoriteGame);
        console.log("Played Games:", checkedGames);
        console.log("Message:", message);

        // Show thank-you message
        thankYouMessage.style.display = "block";

        // resets form
        form.reset();
    });
});
