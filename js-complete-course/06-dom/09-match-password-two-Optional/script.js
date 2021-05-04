/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // creating all needed selectors and place them in a variable.
    let button = document.getElementById("run");
    let passOne = document.getElementById("pass-one");
    let passTwo = document.getElementById("pass-two");
    let field = document.querySelectorAll("input");


    // func for activating button.
    button.addEventListener("click", function () {
        //take the password selectors en pass the value AFTER the button is clicked, otherwise there is no value ofc.
        let p1 = passOne.value;
        let p2 = passTwo.value;
        // simple if else statement to compare the passwords, used the === for the exact comparison.
        // If it's not the same add a class 'error' with classlist, this will add an extra class and will not replace it.
        // if there is no class attr, it will create one.
        if (p1 === p2) {
            console.log("its the same");
        } else {
            field.forEach((elem) => {
                elem.classList.add("error");
            });
            console.log("its not the same");
        }

    })

})();
