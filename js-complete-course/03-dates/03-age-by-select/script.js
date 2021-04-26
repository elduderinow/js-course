/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let button = document.getElementById("run");
    button.addEventListener("click", DisplayInfo);

    let cDate = new Date();
    let cYear = cDate.getFullYear()
    let cMon = cDate.getMonth() + 1;
    let cDay = cDate.getDate();

    function DisplayInfo() {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let age = cYear - year;

        if (cMon < month) {
            age -= 1;

        } else if (cMon == month && cDay < day) {

            age -= 1;

        }


        alert(`You are ${age} years old.`);


    }


})();
