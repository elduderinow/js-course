/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let heroArr = [];
    let heroN = document.getElementsByClassName("name");
    let heroAE = document.getElementsByClassName("alter-ego");
    const target = document.getElementById("target");
    const button = document.getElementById("run");

    let temp = document.getElementsByTagName("template")[0];


    button.addEventListener("click", function () {

        for (let i = 0; i < heroArr.length; i++) {
            let clon = temp.content.cloneNode(true);
            target.appendChild(clon);
            heroN[i].innerHTML = heroArr[i].name;
            heroAE[i].innerHTML = heroArr[i].alterEgo;
        }
    });

    getGithubData();

    async function getGithubData() {
        let data = await fetch('../../_shared/api.json');
        let main = await data.json();

        main.heroes.forEach((elem) => {
            heroArr.push(elem);
        })
    }

})();
