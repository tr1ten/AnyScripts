// ==UserScript==
// @name         Hide Codechef Problem rating
// @namespace    http://tampermonkey.net/
// @version      2024-02-18
// @description  try to take over the world!
// @author       You
// @match        https://www.codechef.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codechef.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
  if(document.querySelector("._difficulty-ratings__box_ttivr_602 ._dark_ttivr_110")) {
      console.log("hiding diff in cc");
      document.querySelector("._difficulty-ratings__box_ttivr_602 ._dark_ttivr_110").style.display="none";
      observer.disconnect();
      // actions to perform after #mySelector is found
  }
}
})();