/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    for (let number = 0; number < 4; number++) {

        let button = document.getElementsByTagName("button")[number];
        button.addEventListener("click", ChangeColor);

        function ChangeColor() {
            let colorInput = button.id;
            document.body.style.backgroundColor = colorInput;
        }

    }


})();
