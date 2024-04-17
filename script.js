document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const username = document.getElementById('username').value;
    
    // Create object to store in local storage
    const userData = {
        fullName: fullName,
        email: email,
        mobile: mobile,
        username: username
    };
    
    // Check if local storage already has data
    let usersData = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add new user data to existing data
    usersData.push(userData);
    
    // Store data in local storage
    localStorage.setItem('users', JSON.stringify(usersData));
    
    // Clear form inputs
    document.getElementById('registrationForm').reset();


    window.location.href = 'Dashbord.html';
});

// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get form values
//     var fullName = document.getElementById('fullName').value;
//     var email = document.getElementById('email').value;
//     var mobileNo = document.getElementById('mobileNo').value;
//     var username = document.getElementById('username').value;
    
//     // Create object to store data
//     var userData = {
//       fullName: fullName,
//       email: email,
//       mobileNo: mobileNo,
//       username: username
//     };
    
//     // Save data to local storage
//     localStorage.setItem('userData', JSON.stringify(userData));
    
//     // Redirect to dashboard page
//     window.location.href = 'Dashbord.html';
//   });

  




// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     // Get form values
//     var fullName = document.getElementById("fullName").value;
//     var email = document.getElementById("email").value;
//     var mobile = document.getElementById("mobile").value;
//     var username = document.getElementById("username").value;
//     // Create user object
//     var user = {
//       fullName: fullName,
//       email: email,
//       mobile: mobile,
//       username: username
//     };
//     // Save user object to local storage
//     localStorage.setItem(username, JSON.stringify(user));
//     alert("Registration successful!");
//     // Clear form fields
//     document.getElementById("registrationForm").reset();
//   });