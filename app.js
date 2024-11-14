// app.js (client-side)

document.addEventListener('DOMContentLoaded', () => {
  loadCrops();

  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sending login request to server
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    alert(result.message);
  });
});

// Function to load crop listings
async function loadCrops() {
  const response = await fetch('/api/crops');
  const crops = await response.json();
  const cropList = document.getElementById('crop-list');

  crops.forEach((crop) => {
    const li = document.createElement('li');
    li.textContent = `${crop.name} - ${crop.price} per kg`;
    cropList.appendChild(li);
  });
}