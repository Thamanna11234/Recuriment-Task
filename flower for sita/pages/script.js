// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'flower for sita ';

function identifyPlant() {
  const input = document.getElementById('plantImage');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64data = reader.result;
      sendRequest(base64data);
    };
  } else {
    alert('Please select an image!');
  }
}

function sendRequest(imageData) {
  const apiUrl = 'https://plant.id/api/v2'; // Replace with the API endpoint provided by your chosen API provider

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': apiKey,
    },
    body: JSON.stringify({ image: imageData }),
  })
    .then(response => response.json())
    .then(data => {
      displayResult(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayResult(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.description}</p>
    <img src="${data.image}" alt="Plant Image">
  `;
}
