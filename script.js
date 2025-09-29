/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.addEventListener("DOMContentLoaded",function(){
document.getElementById("t1-msg").innerHTML = "Hello, World!";

});

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/

let btn = document.getElementById("t2-btn")

btn.addEventListener("click", function () {
document.getElementById("t2-status").innerHTML = "You clicked the button!";
});


/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/

let btn2 = document.getElementById("t3-loadQuote")

btn2.addEventListener("click", function () {

fetch("https://dummyjson.com/quotes/random")
  .then(function (response) {
    if (!response.ok) {                 // not 2xx → treat as an error
      throw new Error("HTTP " + response.status);
    }
    return response.json();             // turn response body into JS object
  })
  .then(function (data) {
    // use the JSON data here
    let msg = data.quote;
    let auth = data.auther;
    document.getElementById("t3-quote").innerHTML = msg;
    document.getElementById("t3-author").innerHTML = auth;
  })
  .catch(function (err) {
    // show a friendly message or handle the error
    console.log("No Quote for today");
    
  });
});
 

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

let btn3 = document.getElementById("t4-loadWx")

btn3.addEventListener("click", function () {

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=a7b4d7be85e33b85a2741755db10e8eb&units=metric")
  .then(function (response) {
    if (!response.ok) {                 // not 2xx → treat as an error
      throw new Error("HTTP " + response.status);
    }
    return response.json();             // turn response body into JS object
  })
  .then(function (data) {
    // use the JSON data here
    let temp = data.main.temp;
    let humidity = data.main.humidity;
    let speed = data.wind.speed
    document.getElementById("t4-temp").innerHTML = temp;
    document.getElementById("t4-hum").innerHTML = humidity;
    document.getElementById("t4-wind").innerHTML = speed;
  })
  .catch(function (err) {
    // show a friendly message or handle the error
    console.log("Error reteving weather data");
    
  });
});
