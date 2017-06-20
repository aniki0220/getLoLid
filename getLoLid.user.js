// ==UserScript==
// @name         Get the id
// @version      1.3
// @description  Just give me the fuking ID
// @author       NDM
// @include      https://lol.moa.tw/summoner/show/*

// @exclude      https://lol.moa.tw/summoner/


// @grant        unsafeWindow
// ==/UserScript==
 
(function() {
            console.log(MoaObj.lol.acctId);
            var NDMid = document.createElement("p");
            NDMid.style.fontSize="45px";
            NDMid.innerHTML= "GGC ID: "+MoaObj.lol.acctId;
            document.getElementById("content-body").appendChild(NDMid);
        })();
