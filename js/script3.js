// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript Loaded!"); // Debugging message

    // Get the "Back to Halls" button
    const backToHallsBtn = document.getElementById("backToHallsBtn");

    // Check if button exists before adding event listener
    if (backToHallsBtn) {
        console.log("Back to Halls button found!");

        backToHallsBtn.addEventListener("click", function () {
            console.log("Button clicked! Redirecting to halls.html...");

            // Redirect to the halls page
            window.location.href = "halls.html"; // Ensure halls.html exists
        });
    } else {
        console.error("Back to Halls button NOT found!");
    }

    // Retrieve booking details from localStorage (or API if needed)
    const bookingDetails = JSON.parse(localStorage.getItem("latestBooking"));

    if (bookingDetails) {
        console.log("Booking details found:", bookingDetails);

        document.getElementById("hallName").innerText = bookingDetails.hall || "N/A";
        document.getElementById("bookingDate").innerText = bookingDetails.date || "N/A";
        document.getElementById("bookingTime").innerText = bookingDetails.time || "N/A";
    } else {
        console.warn("No booking details found in localStorage!");
    }
});
