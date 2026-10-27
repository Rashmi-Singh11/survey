const form = document.getElementById('survey1-form');

// Wait for the user to click submit
form.addEventListener('submit', function(event) {
    // 1. Stop the default HTML submit behavior
    event.preventDefault(); 
    
    // 2. Redirect the browser to your thank you page
    window.location.href = "thankyou.html"; 
});