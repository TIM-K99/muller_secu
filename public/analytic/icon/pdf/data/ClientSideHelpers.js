function ChangeLanguage(a){window.location=a}var resizeTimeoutId;function window_resize(a){window.clearTimeout(resizeTimeoutId);resizeTimeoutId=window.setTimeout("SetWidths();",10)}function SetWidths(){var a=document.getElementById("titleButtonLeftDiv");if(!a){var a=document.getElementById("titleButtonLeftDivNotice")}var d=document.getElementById("titleTextDiv");var j=document.getElementById("titleTextSpan");var c=document.getElementById("titleButtonRightDiv");if(!c){var c=document.getElementById("titleButtonRightDivNotice")}var b=document.getElementById("titleBarDiv");var h=document.getElementById("seperator");var f=0;if(a&&d&&c&&b){f=b.offsetWidth-a.offsetWidth-c.offsetWidth-1;d.style.width=f+"px";if(j&&layoutInfo){if(j.getClientRects().length>1){j.parentNode.style.paddingTop=layoutInfo.titlePadTwoLine}else{j.parentNode.style.paddingTop=layoutInfo.titlePadOneLine}}}var g=document.getElementsByTagName("span");for(var e=0;e<g.length;e++){if(g[e].className=="resizeIfNeeded"){if(g[e].getClientRects().length>1){g[e].parentNode.style.paddingTop=".3em";if(g[e].getClientRects().length>2){g[e].parentNode.style.height="3.5em"}else{g[e].parentNode.style.height="2.5em"}}else{g[e].parentNode.style.height="1.5em";g[e].parentNode.style.paddingTop=".7em"}}}setLogo();if(window.moveToTop){window.moveToTop()}}function findPosY(b){var a=0;if(b.offsetParent){while(1){a+=b.offsetTop;if(!b.offsetParent){break}b=b.offsetParent}}else{if(b.y){a+=b.y}}return a}var notScrolledYet=true;function scrollToObject(a){if(notScrolledYet){scrollTo(0,findPosY(a)-10);notScrolledYet=false}}window.onresize=window_resize;window.onload=window_resize;window.onbeforeunload=function(){};function setLogo(){var e=document.getElementById("logoWithSignOff");var i=document.getElementById("logoWithSignoffDiv");var d=document.getElementById("logobar");var b=document.getElementById("signOffForSignoffDiv");var g=document.getElementById("seperator");if(d&&e&&i&&b&&g){var c=0;var a=0;var c=b.offsetWidth;var f=Math.floor((d.offsetWidth-c)*0.9);g.style.width=c+"px";i.style.width=f+"px";a=Math.max(i.offsetHeight,b.offsetHeight);var h=Math.max(Math.floor((a-10)*0.45),0);g.style.height=a+"px";b.style.paddingTop=h+"px";a=a+10;d.style.height=a+"px"}else{preLoggerFunc()}}function once(c,b){var a;return function(){if(c){a=c.apply(b||this,arguments);c=null}return a}}var preLoggerFunc=once(function(){document.body.className+="preLogger"});function numeralsDecimalPointAndCommasOnly(b){b=(b)?b:event;var a=(b.charCode)?b.charCode:((b.keyCode)?b.keyCode:((b.which)?b.which:0));if(b.shiftKey==1){return false}if(a>31&&(a<48||(a>57&&a<96)||a>105)&&(a!=110)&&(a!=46)&&(a!=44)&&(a!=188)&&(a!=190)){return false}return true}function numeralsAndSlashOnly(b){b=(b)?b:event;var a=(b.charCode)?b.charCode:((b.keyCode)?b.keyCode:((b.which)?b.which:0));if(b.shiftKey==1){return false}if(a>=47&&a<=57){return true}return false}var clickPending=false;function DisableLoanDetailClick(){if(clickPending){return false}else{if(document.readyState=="complete"){clickPending=true}return clickPending}};