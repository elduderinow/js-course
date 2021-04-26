/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function loop() {


    let age = prompt("What is your age");
    let gender = prompt("What is your Gender");
    let town = prompt("And where do you live");

    let salto = confirm(`your age is ${age} Your gender is ${gender} & you live in ${town}`);

    if (salto === false) {
        loop();
    }


})();
