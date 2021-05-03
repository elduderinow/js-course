/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target")
    let table = document.createElement('table')

    table.setAttribute("border", "1")

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        table.appendChild(tr).appendChild(td);
    }
    target.appendChild(table);

})();
