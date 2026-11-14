/* ======================================================== */
/* 1. Dynamic Elements & Events (Wishlist)                  */
/* ======================================================== */

// Array to store wishlist items temporarily
let myWishlist = [];

// Function to handle adding items to the wishlist and updating the UI
function addToWishlist(productName, buttonElement) {
    
    // Control statement (if/else) to check if item already exists
    if (myWishlist.includes(productName)) {
        // Alert if the product is already in the wishlist
        alert("The item '" + productName + "' is already in your wishlist!");
    } else {
        // Add the product to the array and alert the user
        myWishlist.push(productName);
        alert("The item '" + productName + "' has been added to your wishlist! We will notify you once it drops in the market.");

        // Output the current wishlist to the console for debugging
        console.log("Current Wishlist: ", myWishlist);

        // Update the button styling to show it was added successfully
        buttonElement.textContent = 'Added ✓';
        buttonElement.style.backgroundColor = 'var(--primary-purple)';
        buttonElement.style.color = 'white';
    }
}

// Ensure the HTML is fully loaded before attaching events
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all wishlist buttons in the collection page
    let wishlistButtons = document.querySelectorAll('.wishlist-btn');

    // Loop through all buttons and attach a click event
    for (let i = 0; i < wishlistButtons.length; i++) {
        wishlistButtons[i].addEventListener('click', function() {
            
            // Dynamically get the product name from the <h3> element above the button
            let productName = this.parentElement.querySelector('h3').textContent;
            
            // Call your function and pass the product name and the button itself
            addToWishlist(productName, this);
        });
    }
});