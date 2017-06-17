// ==UserScript==
// @name         Get the id
// @version      1.0
// @description  Skip wating AD page in IGG games download link
// @author       NDM
// @include      https://lol.moa.tw/summoner/show/*

// @exclude      http://igg-games.com/
// @exclude      http://igg-games.com/*/*

// @grant        unsafeWindow
// ==/UserScript==
 
(function() {
            console.log(MoaObj.lol.acctId);
            var NDMid = document.createElement("p");
            NDMid.style.fontSize="40px";
            NDMid.innerHTML= "±b¸¹ID: "+MoaObj.lol.acctId;
            document.getElementById("content-body").appendChild(NDMid);
        })();