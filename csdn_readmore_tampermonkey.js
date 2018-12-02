// ==UserScript==
// @name         CSND Read More
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ar.M
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var h = document.getElementById('content_views').clientHeight;
    document.getElementById('article_content').style.height = h + 'px';
    document.getElementsByClassName('hide-article-box')[0].style.display = 'none'
})();
