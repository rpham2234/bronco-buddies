
var dataOutput = document.getElementById("dataOutput");

// fetch call to '/api'
var displayData = [];

var scheduleHtml = '';

// loop through displayData
//    1. hydrate this HTML with ur data:
scheduleHtml += `<div class="days">
    <h1 id="daysText">monday: </h1>
    <!-- link from javascript algorithm -->
    <h2 id="daysText"> start time: end time -blank assignment- </h2> //build a string of the divs
    <h2 id="daysText"> start time: end time -blank assignment- </h2>
    <h2 id="daysText"> start time: end time -blank assignment- </h2>
    <h2 id="daysText"> start time: end time -blank assignment- </h2>
  </div>`;
//   2. add the HTML you just made to the DOM
dataOutput.innerHTML = scheduleHtml;
