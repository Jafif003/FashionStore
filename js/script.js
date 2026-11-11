
/* ========================================== */
/* 1. Dynamic Elements & Events (Wishlist)    */
/* ========================================== */

// Array to store wishlist items temporarily
let myWishlist = [];

// Function to handle adding items to the wishlist
function addToWishlist(productName) {
    
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
    }
}