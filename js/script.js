document.addEventListener("DOMContentLoaded", function () {
    function toggleForm() {
        let signupForm = document.getElementById("signupForm");
        let loginForm = document.getElementById("loginForm");

        if (signupForm && loginForm) {
            if (signupForm.style.display === "none") {
                signupForm.style.display = "block";
                loginForm.style.display = "none";
            } else {
                signupForm.style.display = "none";
                loginForm.style.display = "block";
            }
        }
    }

    // Event listener for "Create Account" button
    let createAccountBtn = document.getElementById("createAccountBtn");
    if (createAccountBtn) {
        createAccountBtn.addEventListener("click", function () {
            toggleForm();
        });
    }

    // Signup Form Submission
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("signupName").value.trim();
            let email = document.getElementById("signupEmail").value.trim();
            let password = document.getElementById("signupPassword").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            if (name === "" || email === "" || password === "" || confirmPassword === "") {
                alert("All fields are required.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Store user in localStorage (for testing purposes)
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            localStorage.setItem("userName", name);

            alert("Sign Up Successful! Redirecting to Sign in Page...");
            window.location.href = "index.html"; // Redirect to Login Page
        });
    }

    // Login Form Submission
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value;

            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (email === "" || password === "") {
                alert("Both fields are required.");
                return;
            }

            if (email === storedEmail && password === storedPassword) {
                alert("Login Successful! Redirecting to Available Halls...");
                window.location.href = "halls.html"; // Redirect to Available Halls Page
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    // Redirect to Reset Password page when clicking "Forgot Password?"
    let forgotPasswordLink = document.getElementById("forgotPassword");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = "reset.html"; // Redirect to Reset Password Page
        });
    }

    // Redirect to Login page when clicking "Back to Login"
    let backToLoginBtn = document.getElementById("backToLoginBtn");
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to Login Page
        });
    }

   
    
});
