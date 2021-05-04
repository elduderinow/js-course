/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let NameInput = document.getElementById("hero-name");
    let AlterInput = document.getElementById("hero-alter-ego");
    let PowerInput = document.getElementById("hero-powers");

    let usrObj = {
            id: undefined,
            name: "undefined",
            alterEgo: "undefined",
            abilities: [
                "undefined"
            ]
        };
    let fetchArr = 0;
    document.getElementById("run").addEventListener('click', function () {
        //get all the values from the input fields after clicking event.
        NameInput = NameInput.value;
        AlterInput = AlterInput.value;
        PowerInput = PowerInput.value;

        //fill in the empty object with the input
        usrObj.id= fetchArr ;
        usrObj.name=`${NameInput}`;
        usrObj.alterEgo=`${AlterInput}`;
        usrObj.abilities=`${PowerInput}`;

    });

    //get the heroes API.
    getHero();
    async function getHero() {
        //get the heroes API.
        let data = await fetch('../../_shared/api.json');
        let main = await data.json();

        //Select the array with the 5 heroes.
        let content = main.heroes;

        //get the amount of arrays so I can parse it to make the sixth item, hence the +1.
        fetchArr = content.length+1;

        //parse the lenght and fill in the new info that's inside the 'usrObj' object.
        content[content.length+1] = usrObj;

        //Log it because for the sake of logging.
        console.log(main);
    }


})();
