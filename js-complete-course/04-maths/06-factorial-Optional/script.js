/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let val = document.getElementById("number").value;

        function factorial(num) {
            return (num != 1) ? n * factorial(n - 1) : 1;
        }

        alert( factorial(val) ); // 120

    });

})();
