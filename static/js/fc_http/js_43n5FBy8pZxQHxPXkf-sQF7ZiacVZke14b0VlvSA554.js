var FORMALIZE=(function(f,e,b,g){var d="placeholder" in b.createElement("input");var c="autofocus" in b.createElement("input");var a=!!(f.browser.msie&&parseInt(f.browser.version,10)===6);var h=!!(f.browser.msie&&parseInt(f.browser.version,10)===7);return{go:function(){for(var j in FORMALIZE.init){FORMALIZE.init[j]()}},init:{ie6_skin_inputs:function(){if(!a||!f("input, select, textarea").length){return}var i=/button|submit|reset/;var j=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;f("input").each(function(){var k=f(this);if(this.getAttribute("type").match(i)){k.addClass("ie6-button");if(this.disabled){k.addClass("ie6-button-disabled")}}else{if(this.getAttribute("type").match(j)){k.addClass("ie6-input");if(this.disabled){k.addClass("ie6-input-disabled")}}}});f("textarea, select").each(function(){if(this.disabled){f(this).addClass("ie6-input-disabled")}})},autofocus:function(){if(c||!f(":input[autofocus]").length){return}f(":input[autofocus]:visible:first").focus()},placeholder:function(){if(d||!f(":input[placeholder]").length){return}FORMALIZE.misc.add_placeholder();f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");i.focus(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).blur(function(){FORMALIZE.misc.add_placeholder()});i.closest("form").submit(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).bind("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(d||!f(":input[placeholder]").length){return}f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");if(!i.val()||i.val()===j){i.val(j).addClass("placeholder-text")}})}}}})(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});Drupal.omega=Drupal.omega||{};(function(c){var d;var b;var a=function(e){e=parseInt(e);b=d;d=Drupal.settings.omega.layouts.order.hasOwnProperty(e)?Drupal.settings.omega.layouts.order[e]:"mobile";if(b!=d){c("body").removeClass("responsive-layout-"+b).addClass("responsive-layout-"+d);c.event.trigger("responsivelayout",{from:b,to:d})}};Drupal.omega.getCurrentLayout=function(){return d};Drupal.omega.getPreviousLayout=function(){return b};Drupal.omega.crappyBrowser=function(){return c.browser.msie&&parseInt(c.browser.version,10)<9};Drupal.omega.checkLayout=function(f){if(Drupal.settings.omega.layouts.queries.hasOwnProperty(f)&&Drupal.settings.omega.layouts.queries[f]){var e=Drupal.omega.checkQuery(Drupal.settings.omega.layouts.queries[f]);if(!e&&f==Drupal.settings.omega.layouts.primary){var g=c('<div id="omega-check-query"></div>').prependTo("body");g.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');g.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-check-query { z-index: 100; }</style><![endif]-->');e=parseInt(g.css("z-index"))==100;g.remove()}return e}return false};Drupal.omega.checkQuery=function(f){var g=c('<div id="omega-check-query"></div>').prependTo("body");g.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');g.append('<style media="'+f+'">#omega-check-query { z-index: 100; }</style>');var e=parseInt(g.css("z-index"))==100;g.remove();return e};Drupal.behaviors.omegaMediaQueries={attach:function(e){c("body",e).once("omega-mediaqueries",function(){var g=c.inArray(Drupal.settings.omega.layouts.primary,Drupal.settings.omega.layouts.order);var h=c('<div id="omega-media-query-dummy"></div>').prependTo("body");h.append('<style media="all">#omega-media-query-dummy { position: relative; z-index: -1; }</style>');h.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-media-query-dummy { z-index: '+g+"; }</style><![endif]-->");for(var f in Drupal.settings.omega.layouts.order){h.append('<style media="'+Drupal.settings.omega.layouts.queries[Drupal.settings.omega.layouts.order[f]]+'">#omega-media-query-dummy { z-index: '+f+"; }</style>")}c(window).bind("resize.omegamediaqueries",function(){a(h.css("z-index"))}).load(function(){c(this).trigger("resize.omegamediaqueries")})})}}})(jQuery);
/*
     FILE ARCHIVED ON 11:53:36 Jan 13, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:33:31 Aug 22, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 46.53 (3)
  esindex: 0.008
  captures_list: 66.987
  CDXLines.iter: 13.969 (3)
  PetaboxLoader3.datanode: 71.398 (4)
  exclusion.robots: 0.347
  exclusion.robots.policy: 0.333
  RedisCDXSource: 2.229
  PetaboxLoader3.resolve: 63.668
  load_resource: 157.184
*/