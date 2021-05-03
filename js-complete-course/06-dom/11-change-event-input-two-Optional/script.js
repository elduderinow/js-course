/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let validity = document.getElementById("validity");
    let inputField = document.getElementById("pass-one");
    inputField.addEventListener("input", function (){
        password = this.value.replace(/[^0-9]/g,"").length;
        let lengt =  this.value.length;
        if (lengt >= 8 && password >= 2) {
            validity.innerHTML="Ok";
        } else {
            validity.innerHTML="Not Ok";
        }
    });

})();
