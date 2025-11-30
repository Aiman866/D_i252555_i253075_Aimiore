// =======================================================
// Phase 6: Unique Technical Feature (Desk Mood Preview)
// =======================================================

// --- Phase 5 Requirement: Console Log Statement 1 (Used for loading confirmation) ---
console.log("Aimiore project script loaded. Preparing interactivity...");

const previewDisplay = document.getElementById('previewDisplay');
const moodOptions = document.querySelectorAll('.mood-option');

// Ensure the HTML elements exist before adding listeners
if (previewDisplay && moodOptions.length > 0) {
    
    moodOptions.forEach(option => {
        const moodName = option.dataset.mood.toUpperCase();

        // --- Phase 5 Requirement: Console Log Statement 2 (Used for debugging interaction setup) ---
        console.log(`Setting up hover listener for mood: ${moodName}`);

        // Action when mouse enters (hover start)
        option.addEventListener('mouseenter', function() {
            // NOTE: You must create image files in the 'images/' folder with these names!
            const imagePath = `images/preview_${this.dataset.mood}_desk.jpg`; 
            const previewText = document.getElementById('previewText');

            // Modelled implementation: change the background image and text
            previewDisplay.style.backgroundImage = `url('${imagePath}')`;
            previewDisplay.style.backgroundRepeat = 'no-repeat';
            previewDisplay.style.backgroundSize = 'cover';
            previewDisplay.style.height = '300px'; 
            previewText.textContent = `Viewing ${moodName} Desk Setup (Modelled Preview)`;
        });

        // Action when mouse leaves (hover end)
        option.addEventListener('mouseleave', function() {
            // Reset the display
            previewDisplay.style.backgroundImage = 'none';
            document.getElementById('previewText').textContent = 'Hover over a mood below to see a preview!';
        });
    });
}


// =======================================================
// Phase 5: JavaScript Alerts (3 Total)
// =======================================================

// --- Phase 5 Requirement: JavaScript Alert 1 (Used for welcome notification) ---
function showWelcomeAlert() {
    alert("Welcome to Aimiore! Find aesthetic inspiration for your study space.");
}
// Show the alert automatically when the page loads
window.onload = showWelcomeAlert;

// --- Phase 5 Requirement: JavaScript Alert 2 (Placeholder: Confirmation before critical action) ---
function confirmCartRemoval() {
    if (confirm("Are you sure you want to remove this item from your cart?")) {
        // Log the confirmation (Phase 5: Console Log Statement 3)
        console.log("User confirmed item removal."); 
        // Logic to remove item would go here...
        alert("Item successfully removed."); // This serves as the Alert 3 example
    } else {
        console.log("User cancelled item removal.");
    }
}
// You will need to attach this function to a button (like a 'Remove' button) on the cart.html page.