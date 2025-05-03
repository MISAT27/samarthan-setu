document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission
  
      // Get form field values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Email format check
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Simulate form success
      alert("Thank you for reaching out! We'll get back to you soon.");
  
      // Clear form
      form.reset();
    });
  
    function validateEmail(email) {
      // Simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  