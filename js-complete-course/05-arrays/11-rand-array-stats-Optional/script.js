/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    let block = document.getElementsByTagName("td");
    let button = document.getElementById("run");
    button.addEventListener("click", Randomize);

    function Randomize() {

        let newArr = [];
        for (i = 0; i < block.length; i++) {

            let rand = Math.floor(Math.random()*100);
            block[i].innerHTML = rand;
            newArr.push(rand);
        }

         let reduce = newArr.reduce((a,b) => a + b)

        document.getElementById("min").innerHTML = Math.min(...newArr);
        document.getElementById("max").innerHTML = Math.max(...newArr);
        document.getElementById("sum").innerHTML = reduce;
        document.getElementById("average").innerHTML = reduce / block.length;


    }

})();
