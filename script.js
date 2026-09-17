// Function equivalent to handleClick
function handleClick() {
  alert("Button was clicked!");
}

// Select button element and attach click event listener
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', handleClick);
