document.addEventListener("DOMContentLoaded", function () {
    // Redirect to Reset Password page when clicking "Forgot Password?"
    const forgotPasswordLink = document.getElementById("forgotPassword");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = "reset.html"; // Change this if the reset page has a different name
        });
    }

    // Redirect to Login page when clicking "Back to Sign In"
    const backToSignInBtn = document.getElementById("backToSignIn");
    if (backToSignInBtn) {
        backToSignInBtn.addEventListener("click", function () {
            window.location.href = "index.html"; // Change this if the login page has a different name
        });
    }
});
