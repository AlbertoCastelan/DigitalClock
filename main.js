(function () {

    "use strict";
    // Get time and date
    var digitalHour = function () {
        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
    // Get hours, minutes and seconds
        var pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pDayWeek = document.getElementById('DayWeek'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');
        // Create an array containing the days of the week
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;
        // Create an array containing the months
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        pMonth.textContent = months[month];

        pYear.textContent = year;
        // Make a conditional to check AM or PM
        if (hours >= 12) {
            hours = hours - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (hours == 0) {
            hours = 12;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        pHours.textContent = hours;
        pAMPM.textContent = ampm;
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

    };

    digitalHour();
    var interval = setInterval(digitalHour, 1000);

}());
