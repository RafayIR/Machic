// getting time till countdown


var countdowndate = new Date("Feb 12,2022 00:00:00").getTime();


var x = setInterval(function () {
    //getting todays date
    var now = new Date().getTime();

    // difference btw two dates
    var distance = countdowndate - now;

    //Time calculation

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    document.getElementById("day-1").innerHTML = days;
    document.getElementById("hour-1").innerHTML = hours;
    document.getElementById("minute-1").innerHTML = minutes;
    document.getElementById("second-1").innerHTML = seconds;

}, 1000);
