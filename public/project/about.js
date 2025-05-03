document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    // Fade-in sections on scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15
      }
    );
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  