document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu-4').classList.toggle('active');
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: [0.5] // Trigger when section is 50% visible
    };
  
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const backgroundColor = getComputedStyle(entry.target).backgroundColor;
          const paths = document.querySelectorAll("#mySvg .second-color"); // Select elements with the class "second-color"
          
          paths.forEach(path => {
            path.style.transition = "fill 0.5s ease"; // Smooth transition for fill color
            path.setAttribute("fill", backgroundColor);
          });
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  