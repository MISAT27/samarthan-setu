document.getElementById("community-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const community = document.getElementById("community").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !community || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate form submission (you can send to backend here)
    console.log("User Info:", { name, email, community, message });
  
    document.getElementById("community-form").reset();
    document.getElementById("success-message").classList.remove("hidden");
  });
  