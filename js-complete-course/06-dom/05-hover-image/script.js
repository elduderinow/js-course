/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let imgChange = document.querySelectorAll("figure img")[0];
    let imgSrc = imgChange.getAttribute("data-hover");
    let imgOg = imgChange.getAttribute("src");




    imgChange.addEventListener("mouseover", function (){
        imgChange.setAttribute("src",imgSrc);
    });

    imgChange.addEventListener("mouseout", function (){
        imgChange.setAttribute("src",imgOg);
    });

})();
