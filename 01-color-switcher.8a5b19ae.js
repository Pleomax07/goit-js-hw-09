!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");e.addEventListener("click",(function(){n=setInterval((function(){a.style.cssText="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)),";")}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0})),t.disabled=!0;var n=null}();
//# sourceMappingURL=01-color-switcher.8a5b19ae.js.map
