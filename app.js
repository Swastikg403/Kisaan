// app.js

// Function to show specific sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('.dashboard');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Dummy data for crop listings
const crops = [
  { name: 'Wheat', price: '20', quantity: '100 kg' },
  { name: 'Rice', price: '15', quantity: '200 kg' },
  { name: 'Tomatoes', price: '10', quantity: '150 kg' },
];

// Function to populate Farmers Dashboard with crop listings
function addCropListing() {
  const cropListDiv = document.getElementById('crop-listings');
  cropListDiv.innerHTML = '<h4>My Crop Listings</h4>';
  crops.forEach(crop => {
    const cropItem = document.createElement('div');
    cropItem.innerHTML = `<p>${crop.name} - ${crop.price} per kg - ${crop.quantity}</p>`;
    cropListDiv.appendChild(cropItem);
  });
}

// Populate Buyers Dashboard with available crops
function loadAvailableCrops() {
  const availableCropsDiv = document.getElementById('available-crops');
  crops.forEach(crop => {
    const cropItem = document.createElement('div');
    cropItem.innerHTML = `<p>${crop.name} - ${crop.price} per kg - ${crop.quantity}</p>`;
    availableCropsDiv.appendChild(cropItem);
  });
}

// Initialize available crops on page load
window.onload = () => {
  loadAvailableCrops();
};