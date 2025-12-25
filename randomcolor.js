//we make a list (array called in JS) where we place all of the colors and the description we use
//we set for each the name, the symbold and the description
const colors = [
    {
        name: "Black",
        symbol: "images/black_color.png",
        description: "Driven by ambition and sacrifice for power. It uses life as a resource, with mechanics like discard, creature destruction, and reanimation. Creatures include demons and zombies. Think ruthless pragmatism."
    },
    {
        name: "White",
        symbol: "images/white_color.png",
        description: "Emphasizes order, community, and protection. It focuses on healing, defense (e.g., lifelink, vigilance), and board control with small, efficient creatures and enchantments. Think knights, angels, and soldiers."
    },
    {
        name: "Red",
        symbol: "images/red_color.png",
        description: "Fueled by passion, chaos, and speed. It prioritizes direct damage (burn spells), aggression, and fast creatures. Mechanics include haste and temporary power boosts. Think dragons and goblins."
    },
    {
        name: "Green",
        symbol: "images/green_color.png",
        description: "Represents nature, growth, and strength. It focuses on big creatures, mana ramp, and combat tricks. Mechanics include trample and token generation. Think beasts and elves."
    },
    {
        name: "Blue",
        symbol: "images/blue_color.png",
        description: "Centers on intellect, control, and manipulation. It excels at card draw, counterspells, and tempo, using tricks like bouncing or tapping. Creatures are often evasive (e.g., flying). Think wizards and merfolk."
    }
];
// click event for the button
document.getElementById("randomButton").addEventListener("click", function() {
    //genertes a random index of for our array so it picks a color we set in the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    //Updates our HTML, it displays now a color with name, symbol and description
    document.getElementById("randomResult").innerHTML = `
        <img src="${randomColor.symbol}" height="80" width="80" alt="${randomColor.name} symbol">
        <p><strong>${randomColor.name}</strong></p>
        <p>${randomColor.description}</p>
    `;
});
