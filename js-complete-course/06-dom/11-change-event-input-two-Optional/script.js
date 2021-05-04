/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//func to validate if password is equal or longer than 8 characters and if there are two integers included.
//Only had minor difficulty w checking whether the pass contained 2 integers. Found the solution quick.
(function() {
    //get the required element selectors.
    let validity = document.getElementById("validity");
    let inputField = document.getElementById("pass-one");

    //listen voor the input on the input field. The console will log this live with every key changed.

    inputField.addEventListener("input", function (){
        //get the length of the passwords. Normally you would get a string of characters. Not knowing of there are integers included.
        //First try I did a workaround where I tried to split the strings and turn them into integers by using parseint, but it seems that characters also get turned into strings.
        //Then I found on the internet the replace method with the weird characters as parameters used for exactly this kind of stuff.
        //after the it's simple, just compare and change innerHTML.
        password = this.value.replace(/[^0-9]/g,"").length;
        let lengt =  this.value.length;
        if (lengt >= 8 && password >= 2) {
            validity.innerHTML="Ok";
        } else {
            validity.innerHTML="Not Ok";
        }
    });

})();
