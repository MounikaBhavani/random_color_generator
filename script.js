document.addEventListener('DOMContentLoaded', function() {
    // Function to generate a random color in hexadecimal format
    function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#'; 
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Event listener for button click
    document.getElementById('generateColorButton').addEventListener('click', function() {
      const body = document.body;
      const randomColor = generateRandomColor();
      body.style.backgroundColor = randomColor;
    });
  });