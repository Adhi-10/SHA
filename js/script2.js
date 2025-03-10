document.addEventListener("DOMContentLoaded", function () {
    console.log("Module 3 (Booking Page) Loaded!");

    let bookingForm = document.getElementById("bookingForm");

    if (!bookingForm) {
        console.error("Booking form not found!");
        return;
    }

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default page reload

        console.log("Submit button clicked!"); // Debugging

        let selectedHall = localStorage.getItem("selectedHall");
        let date = document.getElementById("bookingDate").value;
        let startTime = document.getElementById("startTime").value;
        let endTime = document.getElementById("endTime").value;
        let purpose = document.getElementById("bookingPurpose").value;

        // Fetch additional requirements
        let requirements = [];
        document.querySelectorAll('input[name="requirements"]:checked').forEach((checkbox) => {
            requirements.push(checkbox.value);
        });

        if (!selectedHall || !date || !startTime || !endTime || !purpose) {
            alert("Please fill in all details!");
            return;
        }

        // Store booking data in localStorage (for now, later integrate MongoDB)
        let bookingData = {
            hall: selectedHall,
            date: date,
            startTime: startTime,
            endTime: endTime,
            purpose: purpose,
            requirements: requirements,
            status: "Pending"
        };

        localStorage.setItem("bookingRequest", JSON.stringify(bookingData));

        alert("Booking request submitted successfully!");

        // Redirect to Admin Panel (Module 4)
        window.location.href = "confirmation.html";
    });
});
