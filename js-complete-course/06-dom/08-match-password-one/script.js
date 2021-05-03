/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let button = document.getElementById("run");
    let passOne = document.getElementById("pass-one");
    let passTwo = document.getElementById("pass-two");
    let field = document.querySelectorAll("input");


    button.addEventListener("click", function () {
        let p1 = passOne.value;
        let p2 = passTwo.value;

        if (p1 != p2) {
            field.forEach((elem)=>{
                elem.style.borderColor="red";
            });
            console.log("its not the same");
        } else {
            console.log("its the same");
        }

    })


})();
