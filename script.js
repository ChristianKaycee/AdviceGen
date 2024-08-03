let quote = document.querySelector(".quotes");
let quote_num = document.querySelector(".advice-num");
let box = document.querySelector(".box");

function fetchAndDisplayQuote() {
  // Making a GET request using fetch
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
      let advice = data.slip.advice; // Extract the advice text from the response
      let advice_num = data.slip.id; // Extract the advice ID from the response
      changeIt(advice, advice_num); // Update the quote
    })
    .catch(error => {
      console.error('Error:', error); // Handle any errors
    });
}

function changeIt(advice, advice_num) {
  quote.innerHTML = advice; // Set the innerHTML of the quote element to the advice
  quote_num.innerHTML = advice_num; // Set the innerHTML of the quote number element to the advice number
}

// Add event listener to the box for the click event
box.addEventListener("click", fetchAndDisplayQuote);
