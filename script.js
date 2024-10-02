// Function to create rain effect
function createRain() {
    const rainContainer = document.getElementById("rain");
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = Math.random() * 100 + "vw"; // Randomize horizontal position
        drop.style.animationDuration = Math.random() * 2 + 1 + "s"; // Randomize speed
        rainContainer.appendChild(drop);
        
        // Remove drop after it finishes falling
        drop.addEventListener('animationend', () => {
            rainContainer.removeChild(drop);
        });
    }
}

// Event listeners for buttons
document.getElementById("noButton").addEventListener("click", function() {
    createRain(); // Continue the rain effect
});

document.getElementById("forgiveButton").addEventListener("click", function() {
    // Create pop-up message
    const popUp = document.createElement("div");
    popUp.className = "pop-up";
    popUp.innerHTML = "I Love You! ❤️";
    document.body.appendChild(popUp);
    popUp.style.display = "block"; // Show the pop-up
});
