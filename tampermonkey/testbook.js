// ==UserScript==
// @name         Erase Cookies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://testbook.com/question-answer/in-ethernet-when-manchester-coding-is-used-the-bi--6253ca20ee77985ec8858fb9
// @icon         https://www.google.com/s2/favicons?sz=64&domain=testbook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    // Your code here...
})();