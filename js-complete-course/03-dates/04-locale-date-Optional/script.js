/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let date = new Date();

    let daynum = date.getDay();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let day = days[ date.getDay() ];
    let month = months[ date.getMonth() ];


    document.getElementById("target").innerHTML= `${day} ${daynum} ${month} ${year}, ${hour}h${min}m${sec}s `;


})();
