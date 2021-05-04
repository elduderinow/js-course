/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //een simpele functie voor het creeren van een tabel. eerst de 10x de rows genereren, daarna een for loop in de for loop vor het creeeren van de rijen.
    // table border, omdat het anders ontzichtbaar is, ik vermoed dat er ergens in de PHP een standaard dikte en kleur wordt meegegeven.
    let target = document.getElementById("target")
    let table = document.createElement('table')

    table.setAttribute("border", "1")

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')
        for (let i = 0; i < 10; i++) {
            let td = document.createElement('td')
            table.appendChild(tr).appendChild(td);
        }
    }
    // hier pas appenden aan de table, aangezien er maar 1 table is en deze NIET in de for loop moet staan.
    target.appendChild(table);

/*func voor rasters te vullen met multiplication tabel.
Door de kolommen te linken aan een de variabel "elem" en index aan rows bekom je een matrix waar je coordinaten op kan pinnen.
En dan is het gewoon appel met peren vermenigvuldigen. Het zijn twee aparte 'rasters' maar wel beide integers dus met een simpele berekning is het snel ingevuld.

- De for each op de tr, gaat elke TD af en hangt daar een index aan. dus 10*10 = 100.
- De for loop achteraf itereert door de kolommen en hangt daar een waarde aan vast van 1-10.
- daarna verander je de innerHTML dmv door de index van de element te ittereren.
 */
    document.querySelectorAll("tr").forEach((elem, index) => {
        for (let k = 0; k < 10; k++) {
            elem.children[k].innerHTML = `${k + 1} i = ${index+1}`;
            elem.children[k].innerHTML = (k+1)*(index+1);

        }

    });


})();
