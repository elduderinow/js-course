/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let display = document.getElementsByClassName("explain")[0];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    let button = document.getElementById("run");
    button.addEventListener("click", DisplayInfo);

    function DisplayInfo() {
        let year = document.getElementById("year").value;

        function Friday13(year) {

            for (let month = 0; month < 12; month++) {

                let d = new Date(year, month, 13);

                if (d.getDay() === 5) {
                    let day = days[d.getDay()];
                    let month = months[d.getMonth()];
                    let year = d.getFullYear();
                    let montnum = d.getDate();

                    display.innerHTML += `${day} ${montnum} ${month} ${year}</br>`;
                }
            }
        }

        Friday13(year);


    }


})();
