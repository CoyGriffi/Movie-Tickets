//ticket price
function ticket(movieName, age, showtime) {
  this.movieName = movieName;
  this.age = age;
  this.showtime = showtime;



//UI logic
$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
    let Ticketprice = 10;
    let userInput = new ticket (($("#showtime").val()), ($("#age").val()), ($("#movie").val()));

    if (userInput.movieName === "Die Hard") {
      Ticketprice += 5;
    } 
    if (userInput.age === "Senior") {
      Ticketprice -= 2;
    }
    if (userInput.showtime === "17" || userInput.showtime === "20") {
      Ticketprice += 5;
    }
    alert(Ticketprice);
  });
});