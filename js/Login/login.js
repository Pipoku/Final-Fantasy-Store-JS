function showRegistrationForm() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('registration-form').style.display = 'block';
}

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var email = document.getElementById('email').value;
  
  // Perform password confirmation check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  
  // Save the username in sessionStorage
  sessionStorage.setItem('username', username);
  
  // Redirect to "/"
  window.location.href = "/";
});
