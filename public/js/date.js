var currentDate = new Date();
var formattedDate = currentDate.toLocaleDateString('en-US', { 
weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' 
});

// Update the HTML element with id="date" to display the formatted date
document.getElementById("time").innerHTML =formattedDate;