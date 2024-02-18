// ==UserScript==
// @name         Hide yt title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==
function hide(d){
    const el = d.querySelector(".ytp-title-text");
    console.log("hide the title of video",el);

    el.style.display="none";
    console.log("succesfully hide the title of video",el);
}
(function() {
'use strict';
console.log("running scropt for hide yt");
document.onload = ()=> hide(document);
// Your code here...
})();