/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Exercise to combine two arrays into 1 object. Very interesting!
//Had to look  this  up ofc. found several examples where they  use only 1 array, but at the end found what I needed.
// the  map method will duplicate the  original arrays and place them in an object with the fromEntries method accordingly to their indexes.
// the map method needs two parameters, a string and numbers (index). You can not pass a index without a 'element' string, hence the underscore (apparently the way to go when not using the value)

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    let newObj = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]))

    document.getElementById("run").addEventListener('click', function (){
        console.log(newObj);
    });


})();
