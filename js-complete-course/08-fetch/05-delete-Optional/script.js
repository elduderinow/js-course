/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //get element input.
    let input = document.getElementById("hero-id");

    //func to get heroes API + delete the requested hero based on index (-1).
    async function getHero(inVal) {

        //get the heroes API.
        let data = await fetch('../../_shared/api.json');
        let main = await data.json();
        main.heroes.splice(inVal-1,1);
        console.log(main);
    }

    //add click event to button and call the gethero function + parse in the input value.
    document.getElementById("run").addEventListener('click', function (){
        let inVal = parseInt(input.value);
        getHero(inVal);
    });

})();
