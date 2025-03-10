document.addEventListener("DOMContentLoaded", function () {
    console.log("Module 2 JavaScript Loaded!"); // Debugging Step

    // Select all "Book Now" buttons
    let bookNowButtons = document.querySelectorAll(".book-btn");

    if (bookNowButtons.length === 0) {
        console.error("No 'Book Now' buttons found! Check your HTML.");
    } else {
        bookNowButtons.forEach(button => {
            button.addEventListener("click", function () {
                let hallName = this.getAttribute("data-hall");
                console.log("Booking Hall:", hallName);

                if (hallName) {
                    localStorage.setItem("selectedHall", hallName); // Store selected hall
                    window.location.href = "booking.html"; // Redirect to Module 3
                } else {
                    alert("Error: Hall name not found!");
                }
            });
        });
    }

    // Logout Button
    let logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            console.log("Logging out...");
            localStorage.clear();
            alert("Logged out successfully!");
            window.location.href = "index.html"; // Redirect to Module 1
        });
    } else {
        console.error("Logout button not found! Check your HTML.");
    }
});
