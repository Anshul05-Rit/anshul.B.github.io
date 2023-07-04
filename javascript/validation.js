document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const admin_id = document.getElementById("admin_id").value;
    const password = document.getElementById("password").value;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneNumberError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Validate name
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format";
      isValid = false;
    }

    // Validate phone number
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
      document.getElementById("phoneNumberError").textContent = "Invalid phone number";
      isValid = false;
    }

    // Validate password
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (isValid) {
      // Perform signup logic here, e.g., submit the form to a server
      alert("Signup successful!");
      document.getElementById("signupForm").reset();
    }
  }