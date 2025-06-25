// ==UserScript==
// @name         XEN Redesgined
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  A re-themed version of XEN
// @author       Marshal
// @match        https://www.kogama.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kogama.com
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.type = 'text/css';

const css = `
  #root-page-mobile {
   background : linear-gradient(260deg,hsl(0, 0%, 8.2%),hsl(0, 0%, 8.2%)) !important;
}

._1RMYS, .css-x84yyj, .css-b0qydj , ._1q4mD ._1sUGu ._1u05O, .css-1rbdj9p, ._3TORb, ._3i_24, .css-1n00yj3, #root-page-mobile #content #content-container #main-content, .css-1clyn5x, #root-page-mobile #content #content-container {
   background-color : transparent !important;
   backdrop-filter: blur(5px);
   border-radius : 20px !important;
}

._1Yt8Y ._2-_Ya{
   top: -5px;
   left : 0px;
}

.css-1udp1s3, .css-zslu1c, .css-k9ok3b, .css-1c1ttle, ._1Yt8Y {
    background: #0000 !important;
    border-radius: 10px !important;
    padding: 15px !important;
    position: relative !important;
    box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    0 2px 10px rgba(0, 0, 0, 0.2) !important;
    color: white !important;
    margin: 10px !important;
}

._13UrL ._23KvS ._33DXe{
   background-image : url("https://www.kogstatic.com/gen_cache/da/7d/da7d17f2-bdc7-4262-a9a0-544eb545091c_600x240.png") !important;
   opacity : 10;
   filter : blur(4px);
}

.css-9la3qa, .css-16fidy5, .css-rqc8s9, .css-qr6c39, a.MuiButton-root, .css-cisn0m, .css-1vyp3ps{
   background: #212121 !important;
   color: #fff !important;
}

.css-9la3qa:hover, .css-16fidy5:hover, .css-rqc8s9:hover, .css-qr6c39:hover, a.MuiButton-root:hover, .css-cisn0m:hover, .css-1vyp3ps:hover {
   background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2)) !important;
   border: 1px solid rgba(255, 255, 255, 0.2) !important;
   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1) !important;
   color: #fff !important;
   text-shadow: 0 0 5px rgba(255, 255, 255, 0.5) !important;
   transition : 1s;
}

._1iWPR .eq7_m._1mOOB, ._35ABf .SB7oy, ._35ABf ._30nde{
   display: none !important;
}

a:hover, .css-1i2fcqj:hover{
  color: #5619b0 !important;
  text-shadow: -0px 0px 10px #441a60;
  transition : 1s !important;
  background : transparent !important;
}

p, div, h1, h2, h3, h4{
   font-family : system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
._13UrL ._23KvS ._25Vmr ._2IqY6 h1{
    display: flex ;
    justify-content: center;
}

._1q4mD ._1sUGu ._2Jlgl a img:hover{
animation: spin 2.5s ease-in;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

._3IcXz, ._2hUvr ._3wV6q{
   position: inherit !important;
}

`;

style.innerHTML = css;

document.head.appendChild(style);

(function () {
    const gifURL = "https://cdn3.emoji.gg/emojis/5988-pixelbongocat.gif";

    function replaceLogo() {
        const logo = document.querySelector('img[alt="KoGaMa"]');
        if (logo) {
            logo.removeAttribute('srcset');

            logo.src = gifURL;
        }
    }

    window.onload = replaceLogo;

    const observer = new MutationObserver(() => {
        replaceLogo();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    window.addEventListener("resize", replaceLogo);
})();
