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

    let inputField = document.getElementById("pass-one");
    inputField.addEventListener("input", function (){
        let string =  this.value.length;
        console.log(string);
        if (string >= 10) {
            console.log("stop here!");
            this.setAttribute("maxlength","10");
        }
    });

})();
