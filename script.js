
    // Loading animation functionality
    document.addEventListener('DOMContentLoaded', function() {
      const loadingScreen = document.getElementById('loading-screen');
      const websiteContent = document.getElementById('website-content');
      const progressBar = document.querySelector('.progress-bar');
      
      // Simulate loading progress
      let progress = 0;
      const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
          progress = 100;
          clearInterval(loadingInterval);
          
          // Hide loading screen and show website content
          setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
              loadingScreen.style.display = 'none';
              websiteContent.style.display = 'block';
            }, 500);
          }, 500);
        }
        progressBar.style.width = progress + '%';
      }, 300);
      
      // Theme switching functionality
      const toggleSwitch = document.getElementById('switch-sleep-awake');
      const body = document.body;
      const themeLabel = document.querySelector('.theme-label');
      
      // Load saved theme preference
      if (localStorage.getItem('theme') === 'night') {
        body.classList.add('night-mode');
        toggleSwitch.checked = true;
        themeLabel.textContent = 'Night Mode';
      }
      
      // Toggle theme when switch is clicked
      toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
          body.classList.add('night-mode');
          localStorage.setItem('theme', 'night');
          themeLabel.textContent = 'Night Mode';
        } else {
          body.classList.remove('night-mode');
          localStorage.setItem('theme', 'day');
          themeLabel.textContent = 'Day Mode';
        }
      });

      // Example JavaScript (Alert on click)
      const buttons = document.querySelectorAll(".btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          alert("Added to cart! (Demo)");
        });
      });
    });
