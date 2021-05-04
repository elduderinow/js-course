/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    //loop through each element in the computer object. If there are multiple objects, they get put in an array (I think).
    //had no trouble with this exercise.
    computers.forEach((elem)=>{

        //simple if else statement, used undefined so I don't overwrite anything that's already there.
        if (elem.available === undefined) {
            elem.available = defaultProps.available;
        } if (elem.os === undefined) {
            elem.os = defaultProps.os;
        } if (elem.user === undefined) {
            elem.user = defaultProps.user;
        }
    });

    //log it here.
    document.getElementById("run").addEventListener('click', function (){
        computers.forEach((elem)=>{
            console.log(elem);
            console.log(elem.id);
            console.log(elem.available);
            console.log(elem.user);
            console.log(elem.os);
        });
    })


})();
