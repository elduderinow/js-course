/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
        "https://bit.ly/3xHig6r",
    ];
    let image = document.querySelectorAll("figure img");
    let button = document.getElementById("next");


    button.addEventListener("click", function (){
        let source = gallery.pop();
        image[0].setAttribute("src",source);
    });



})();
