// ==UserScript==
// @name         Hide Spoj Comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.spoj.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=spoj.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("#problem-tags").style.display = "none";

    // Your code here...
})();