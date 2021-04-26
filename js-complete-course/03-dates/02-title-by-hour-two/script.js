/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes()

    let time = (hour*100) + minutes;

    let element = document.getElementById('target');

    if (time < 1730) {
        element.innerHTML = "Hello";
    } else {
        element.innerHTML = "Good evening";
    }





})();
