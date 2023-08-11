function myDigitalClock(){
    var d1 = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = "AM";
    //Write the code here
    //
    //


     // Convert hours to 12-hour format and determine AM/PM
     if (hours >= 12) {
        zone = "PM";
        hours = hours - 12;
    }
    
    // Handle midnight and noon
    if (hours === 0) {
        hours = 12;
    }
    
    // Add leading zero to single-digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    // Create the digital clock display
    var clockDisplay = hours + ":" + minutes + ":" + seconds + " " + zone;
    
    // Update the clock display in the HTML
    document.getElementById("clock").textContent = clockDisplay;
    
    // Update the clock every second
    setTimeout(myDigitalClock, 1000);
}
myDigitalClock();