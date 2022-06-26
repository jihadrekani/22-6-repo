/* Handle click */
function clickHandler() {
    let randomColor = generateRandomColor();
  
    /* select an element by ID, and change it's styling */
    document.getElementById(
      'container'
    ).style.backgroundColor = `#${randomColor}`;
  }
  
  /* Generate Random Number hex value */
  function generateRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    return randomColor;
  }
  
  setInterval(clickHandler, 2000);
  