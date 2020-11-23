// ==UserScript==
// @id             Hide Snow
// @name           Hide Snow
// @version        1.0
// @author         Shadows Adi
// @include        https://leaguecs.ro/forum/index.php?/
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @homepageURL    https://github.com/ShadowsAdi/SnowHide
// ==/UserScript==
setInterval(function() {
    $('.snow0').remove();
}, 1000);
