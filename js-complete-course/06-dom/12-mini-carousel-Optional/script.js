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
    //Was kinda stuck on this one. Looks simple, but the infinity loop got me. Asked tom for advice and he explained me the generator function.
    //Initialy I tried to do it with a for loop, but the downside is that your loop is finite, even if your number is 1000000, then in some cases it will create troubles after a while.
    // So i looked into the generator loop and I find it a very powerful function.
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

    //while true (its always true unless, stated in the while loop otherwise.) it will generate a infinite amount of the elements in the gammery array. But not yet calling it.
    function* generator() {
       while(true) {
           yield* gallery;
        }
    }

    //call the function, but at this point, it will not yet call one element.
    const gen = generator();

    //because the first image is hardcoded in html, we ask the generator for next so we actually begin at the second image. When you call next, then it will pop the next element in the array.
    image[0].setAttribute("src",gen.next().value);

    //click button, get the right html tag and replace the attribute.
    button.addEventListener("click", function (){
        image[0].setAttribute("src",gen.next().value);
    });

})();
