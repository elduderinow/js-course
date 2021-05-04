/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let heroArr = [];
    let heroN = document.getElementsByClassName("name");
    const target = document.getElementById("target");
    const input = document.getElementById("hero-id");
    const button = document.getElementById("run");

    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);

    button.addEventListener("click", function () {
        let inVal = parseInt(input.value);
        let hero = heroArr[inVal - 1];
        let heroName = hero.name;
        target.appendChild(clon);
        heroN[0].innerHTML = heroName;
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
