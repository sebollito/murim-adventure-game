/*
Murim Adventure Game
This game will be a text-base murim adventure game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change based on their decisions.
*/
const readline = require("readline-sync");

// 1.  Create a variable for player health (starting at 100)
let playerHealth = 100;
// 2.  Create a variable for player gold (choose a starting amount around 20)
let playerGold = 20;
// 3.  Create a variable for current location (starting at "village")
let currentLocation = "village";
// 4.  Create a variable called gameRunning set to true
let gameRunning = true;
// 5. Create a variable for player name
let playerName = "";
// 6. Create a variable for inventory
let inventory = [];
// Create variables for player stats
let maxHealth = 100;
let level = 1;
let experience = 0;
let strength = 5;
let agility = 5;
let intelligence = 5;
let luck = 5;

// Get player name using readline-sync
playerName = readline.question("What is your name, wanderer? ").trim();
while (!playerName) {
	playerName = readline.question("Name cannot be empty. Please enter your name: ").trim();
}

console.log(`Greetings, ${playerName}!`);

// Display the game title
console.log("Welcome to the Murim Adventure Game!");
// Add a welcome message
console.log("Prepare yourself for an epic journey into the world of MURIM!");

// Display welcome message and starting stats
console.log("\n--- Starting Stats ---");
console.log(`Health: ${playerHealth}/${maxHealth}`);
console.log(`Gold: ${playerGold}`);
console.log(`Location: ${currentLocation}`);
console.log(`Level: ${level} (EXP: ${experience})`);
console.log(`Stats - STR: ${strength}, AGI: ${agility}, INT: ${intelligence}, LUCK: ${luck}`);
console.log(`Inventory: ${inventory.length ? inventory.join(", ") : "Empty"}`);
console.log("----------------------\n");

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Main game loop
// while (gameRunning) {
// 	// Game logic goes here
// }
