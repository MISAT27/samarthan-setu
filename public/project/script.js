/* script.js */

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-box", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#94c13d"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#94c13d",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        }
      }
    },
    "retina_detect": true
  });
});




document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY";
    script.onload = () => {
      const location = { lat: 28.6139, lng: 77.2090 }; // New Delhi
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
      });
      new google.maps.Marker({ position: location, map: map });
    };
    document.body.appendChild(script);
  
    document.getElementById("donateBtn").onclick = function (e) {
      e.preventDefault();
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: 50000,
        currency: "INR",
        name: "Samarthan Setu",
        description: "Donation",
        handler: function (response) {
          alert("Thank you for your donation!");
        },
        theme: {
          color: "#3399cc"
        }
      };
      const rzp = new Razorpay(options);
      rzp.open();
    };
  });




  
  