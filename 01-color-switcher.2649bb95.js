const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){let a=null;a=setInterval((()=>{d.style.cssText=`background-color: #${Math.floor(16777215*Math.random()).toString(16)};`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(timerId),e.disabled=!1,t.disabled=!0})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.2649bb95.js.map
