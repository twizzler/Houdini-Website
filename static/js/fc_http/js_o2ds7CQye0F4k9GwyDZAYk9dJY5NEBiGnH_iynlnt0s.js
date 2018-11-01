var FORMALIZE=(function(f,e,b,g){var d="placeholder" in b.createElement("input");var c="autofocus" in b.createElement("input");var a=!!(f.browser.msie&&parseInt(f.browser.version,10)===6);var h=!!(f.browser.msie&&parseInt(f.browser.version,10)===7);return{go:function(){for(var j in FORMALIZE.init){FORMALIZE.init[j]()}},init:{ie6_skin_inputs:function(){if(!a||!f("input, select, textarea").length){return}var i=/button|submit|reset/;var j=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;f("input").each(function(){var k=f(this);if(this.getAttribute("type").match(i)){k.addClass("ie6-button");if(this.disabled){k.addClass("ie6-button-disabled")}}else{if(this.getAttribute("type").match(j)){k.addClass("ie6-input");if(this.disabled){k.addClass("ie6-input-disabled")}}}});f("textarea, select").each(function(){if(this.disabled){f(this).addClass("ie6-input-disabled")}})},autofocus:function(){if(c||!f(":input[autofocus]").length){return}f(":input[autofocus]:visible:first").focus()},placeholder:function(){if(d||!f(":input[placeholder]").length){return}FORMALIZE.misc.add_placeholder();f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");i.focus(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).blur(function(){FORMALIZE.misc.add_placeholder()});i.closest("form").submit(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).bind("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(d||!f(":input[placeholder]").length){return}f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");if(!i.val()||i.val()===j){i.val(j).addClass("placeholder-text")}})}}}})(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});
/*
     FILE ARCHIVED ON 22:49:39 Jul 23, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:37:41 Nov 01, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 91.411 (3)
  esindex: 0.006
  captures_list: 121.342
  CDXLines.iter: 14.47 (3)
  PetaboxLoader3.datanode: 87.589 (5)
  exclusion.robots: 0.214
  exclusion.robots.policy: 0.205
  RedisCDXSource: 10.32
  PetaboxLoader3.resolve: 39.731
  load_resource: 118.618
*/
