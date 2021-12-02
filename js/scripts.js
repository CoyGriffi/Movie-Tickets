//ticket price
function ticket(movieName, age, showtime) {
  this.movieName = movieName;
  this.age = age;
  this.showtime = showtime;
}



//UI logic
$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
    let Ticketprice = 10;
    let movie = $("#movie").val();
    let age = $("#age").val();
    let showtime = $("#showtime").val();
    let userInput = new ticket (movie, age, showtime);
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
