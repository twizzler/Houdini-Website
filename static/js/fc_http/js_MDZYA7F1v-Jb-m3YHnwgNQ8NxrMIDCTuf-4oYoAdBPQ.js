var FORMALIZE=(function(f,e,b,g){var d="placeholder" in b.createElement("input");var c="autofocus" in b.createElement("input");var a=!!(f.browser.msie&&parseInt(f.browser.version,10)===6);var h=!!(f.browser.msie&&parseInt(f.browser.version,10)===7);return{go:function(){for(var j in FORMALIZE.init){FORMALIZE.init[j]()}},init:{ie6_skin_inputs:function(){if(!a||!f("input, select, textarea").length){return}var i=/button|submit|reset/;var j=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;f("input").each(function(){var k=f(this);if(this.getAttribute("type").match(i)){k.addClass("ie6-button");if(this.disabled){k.addClass("ie6-button-disabled")}}else{if(this.getAttribute("type").match(j)){k.addClass("ie6-input");if(this.disabled){k.addClass("ie6-input-disabled")}}}});f("textarea, select").each(function(){if(this.disabled){f(this).addClass("ie6-input-disabled")}})},autofocus:function(){if(c||!f(":input[autofocus]").length){return}f(":input[autofocus]:visible:first").focus()},placeholder:function(){if(d||!f(":input[placeholder]").length){return}FORMALIZE.misc.add_placeholder();f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");i.focus(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).blur(function(){FORMALIZE.misc.add_placeholder()});i.closest("form").submit(function(){if(i.val()===j){i.val("").removeClass("placeholder-text")}}).bind("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(d||!f(":input[placeholder]").length){return}f(":input[placeholder]").each(function(){var i=f(this);var j=i.attr("placeholder");if(!i.val()||i.val()===j){i.val(j).addClass("placeholder-text")}})}}}})(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});Drupal.omega=Drupal.omega||{};(function(c){var d;var b;var a=function(e){e=parseInt(e);b=d;d=Drupal.settings.omega.layouts.order.hasOwnProperty(e)?Drupal.settings.omega.layouts.order[e]:"mobile";if(b!=d){c("body").removeClass("responsive-layout-"+b).addClass("responsive-layout-"+d);c.event.trigger("responsivelayout",{from:b,to:d})}};Drupal.omega.getCurrentLayout=function(){return d};Drupal.omega.getPreviousLayout=function(){return b};Drupal.omega.crappyBrowser=function(){return c.browser.msie&&parseInt(c.browser.version,10)<9};Drupal.omega.checkLayout=function(f){if(Drupal.settings.omega.layouts.queries.hasOwnProperty(f)&&Drupal.settings.omega.layouts.queries[f]){var e=Drupal.omega.checkQuery(Drupal.settings.omega.layouts.queries[f]);if(!e&&f==Drupal.settings.omega.layouts.primary){var g=c('<div id="omega-check-query"></div>').prependTo("body");g.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');g.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-check-query { z-index: 100; }</style><![endif]-->');e=parseInt(g.css("z-index"))==100;g.remove()}return e}return false};Drupal.omega.checkQuery=function(f){var g=c('<div id="omega-check-query"></div>').prependTo("body");g.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');g.append('<style media="'+f+'">#omega-check-query { z-index: 100; }</style>');var e=parseInt(g.css("z-index"))==100;g.remove();return e};Drupal.behaviors.omegaMediaQueries={attach:function(e){c("body",e).once("omega-mediaqueries",function(){var g=c.inArray(Drupal.settings.omega.layouts.primary,Drupal.settings.omega.layouts.order);var h=c('<div id="omega-media-query-dummy"></div>').prependTo("body");h.append('<style media="all">#omega-media-query-dummy { position: relative; z-index: -1; }</style>');h.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-media-query-dummy { z-index: '+g+"; }</style><![endif]-->");for(var f in Drupal.settings.omega.layouts.order){h.append('<style media="'+Drupal.settings.omega.layouts.queries[Drupal.settings.omega.layouts.order[f]]+'">#omega-media-query-dummy { z-index: '+f+"; }</style>")}c(window).bind("resize.omegamediaqueries",function(){a(h.css("z-index"))}).load(function(){c(this).trigger("resize.omegamediaqueries")})})}}})(jQuery);if(window.location.hostname.indexOf("clubpenguin.com")>-1){document.domain="clubpenguin.com"}if(typeof CP==="undefined"){CP={}}(function(a){CP.home=function(b){this.options={widths:{}};a.extend(true,this.options,b);this.currentIndex=0;this.numBillboards=0;this.autoRotate=null;this.load()};CP.home.prototype.initBBNav=function(){var b=this;var d="";var e;var c=1;a("#billboards a").each(function(f,g){e=false;if(a(g).hasClass("flash-billboard")){e=true}if(!e||(e&&CP.global.runningVars.hasFlash)){b.numBillboards=(f+1)}d+='<div class="indicator '+(e?"is-flash":"no-flash")+'" '+(f==0?'id="ind-scene"':"")+'><a href="javascript:void(0);" '+(f==0?'class="active"':"")+">"+c+"</a></div>";if(!e||CP.global.runningVars.hasFlash){c++}});if(a("#billboards a").length>1){a("#indicators").html(d);if(a(".indicator").first().hasClass("no-flash")){a("#billboards").show()}}else{a("#billboard-arrows").hide();a("#billboard-welcome").show()}};CP.home.prototype.initPromo=function(){var b=this;var c=jQuery.ajax({type:"GET",url:window.location.protocol+"//"+window.location.host+"/"+CP.global.runningVars.langPath+"json/homepage/promos/"+CP.runningVars.countryCode,data:"",async:true,success:function(d){a.each(d,function(I,E){if(E.homepage_item_toggle&&E.homepage_item_toggle[0].value=="1"){return true}var X=E.nid;var aa=E.promo_box_type[0].value;var F=E.on_now_badge_color[0].value;var C=E.homepage_promo_color[0].value;var D=E.homepage_promo_text[0].value;var H=E.title;var l=((E.homepage_promo_bi_tracking)?E.homepage_promo_bi_tracking[0].value:H);var M=E.homepage_promo_image[0].uri;var s=((E.homepage_promo_image_alt)?E.homepage_promo_image_alt[0].value:l);var K=((E.homepage_promo_video_embed)?E.homepage_promo_video_embed[0].value:false);var p=((E.homepage_promo_legal_text)?E.homepage_promo_legal_text[0].value:"");var W=l.split(" ").join("_");var n=((E.homepage_promo_cp_link)?E.homepage_promo_cp_link[0].url:"");var v=((E.homepage_promo_cp_link)?E.homepage_promo_cp_link[0].title:"");try{var q="";a.each(E.homepage_promo_cp_link[0].attributes.data,function(e,i){q+="data-"+e+'="'+i+'" '})}catch(V){var q=""}var o="";a.each(E.personalize_promo,function(e,i){o+=i.value+" "});var y="";if(aa=="plain_image"){var t=((E.homepage_promo_custom_imag)?E.homepage_promo_custom_imag[0].uri:"");y+='                            <div class="promo-block '+o+'">                                <a href="'+n+'" '+q+' data-ga="'+W+'"><img src="'+t+'" alt="'+s+'" /></a>                            </div>'}else{if(aa=="video_image"){var t=((E.homepage_promo_custom_imag)?E.homepage_promo_custom_imag[0].uri:"");y+='                            <div class="promo-block '+o+'">                                <a class="trigger-video" href="#" id="trigger-'+X+'" data-ga="'+W+'"><img src="'+t+'" alt="'+s+'" /></a>                            </div>'}else{if(aa=="cfc_counter"){var B="0";var w=new Date();var O=(parseInt((w.getMinutes())/15)*15)%60;var r=String(w.getMonth())+String(w.getDate())+String(w.getHours())+String(O);var x=jQuery.ajax({type:"GET",url:window.location.protocol+"//"+window.location.host+"/json/cfc_total/"+r,data:"",async:false,success:function(e){B=e.coins_total}});var J="";for(var Q=0;Q<B.length;Q++){coins_total_span="<span>"+B[Q]+"</span>";J+=coins_total_span}y+='<div class="promo-block cfc_counter '+o+'"><span class="cfc_total">'+J+"</span></div>"}else{if(aa=="itunes"){var U=(K!=""?"trigger-video":"");y+='                            <div class="promo-block purple '+o+'">                                <div class="promo-'+aa+'">                                    <a class="'+U+'" href="'+n+'" id="thumb-'+X+'" '+q+' data-ga="'+W+'">                                        <img src="'+M+'" alt="'+s+'" />                                    </a>                                </div>                                <div class="song-info">                                    <div class="title">'+D+'</div>                                    <a class="download-from-itunes agegated-link" href="'+n+'" '+q+' data-ga="'+W+'">'+Drupal.t("Download on iTunes")+'</a>                                    <div class="legalese">'+Drupal.t("Apple, the Apple logo, and iTunes are trademarks of Apple Inc. registered in the U.S. and other countries.")+"</div>                                </div>                            </div>"}else{if(aa=="audio"&&E.homepage_promo_audio){var z=E.homepage_promo_audio[0].uri;var S=z.split("/").pop();var T=z.replace("https","http");var R="/download/audio/"+S;var P=((E.homepage_promo_audio_title)?E.homepage_promo_audio_title[0].value:"");var u=((E.homepage_promo_audio_sub)?E.homepage_promo_audio_sub[0].value:"");var A=(S.toLowerCase().indexOf(".m4a")>-1?"m4a":"mp3");var L=W+"_download";var N=W+"_play";var j='                            <div id="audio-player-'+X+'" class="audio-player jp-jplayer"></div>                                <div id="jp_container_1" class="jp-audio audio-container">                                <div class="jp-type-single">                                    <div class="jp-gui jp-interface">                                        <div class="title">'+P+'</div>                                        <div class="sub-title">'+u+'</div>                                        <ul class="jp-controls">                                            <li><a href="javascript:;" class="jp-play" tabindex="2" data-ga="'+N+'"><span class="icon"></span><span class="label">'+Drupal.t("Play")+'</span></a></li>                                            <li><a href="javascript:;" class="jp-pause" tabindex="2"><span class="icon"></span><span class="label">'+Drupal.t("Pause")+'</span></a></li>                                            <li><a href="javascript:;" class="jp-stop" tabindex="2"><span class="icon"></span><span class="label">'+Drupal.t("Stop")+'</span></a></li>                                        </ul>                                        <div class="jp-progress">                                            <div class="jp-seek-bar">                                                <div class="jp-play-bar"><div class="jp-scrubber"></div></div>                                            </div>                                        </div>                                        <div class="jp-timers">                                            <span class="jp-current-time current"></span>                                            <span class="jp-duration total"></span>                                        </div>                                    </div>                                </div>                            </div>';y='                            <div class="promo-block promo-block-audio '+C+" "+o+'">                                <div class="promo-audio">                                    <img src="'+M+'" alt="'+s+'" />                                </div>                                <div class="promo-info" data-url="'+T+'" data-uploadtype="'+A+'">                                    '+j+'                                    <div class="download-area">                                        <a href="'+R+'" class="btn-download" '+q+' data-ga="'+L+'"><span>'+Drupal.t("Download FREE Song")+"</span></a>                                    </div>                                </div>                            </div>"}else{var G=(aa=="on_now"?F:"");var k=(aa=="on_now"?'<span class="on_now_label">'+Drupal.t("On Now!")+"</span>":"");var Z=(aa=="video"?"trigger-video":"");var Y=(aa=="video"?"#":n);y+='                            <div class="promo-block '+C+" "+o+'">                                <div class="promo-'+aa+" "+G+'">'+k+'                                    <a class="'+Z+'" href="'+Y+'" id="thumb-'+X+'" '+q+' data-ga="'+W+'">                                        <img src="'+M+'" alt="'+s+'" />                                    </a>                                </div>                                <div class="promo-info">                                    <div class="title">'+D+'</div>                                    <a class="cta '+Z+'" href="'+Y+'" id="trigger-'+X+'" '+q+' data-ga="'+W+'">'+v+'</a>                                    <div class="legal">'+p+"</div>                                </div>                            </div>"}}}}}if(K){y+='<div style="display:none" class="video-embed-code" id="embed-'+X+'"><!--'+K+"--></div>"}a("#promo-blocks").append(y);if(aa=="audio"){b.setupAudioPlayer()}});var h=a(".promo-block").length-2;var f=0;a(".promo-block").each(function(e,j){if(!a(j).hasClass(b.options.UTYPE)&&f<h){a(j).hide();f++}});try{window.agegate.initLinks("#promo-blocks a")}catch(g){}a("#promo-blocks").slideDown()}})};CP.home.prototype.setupAudioPlayer=function(){var h=a(".promo-block-audio .promo-info");var c="#"+h.find(".audio-container").attr("id");var b=h.data("url");var g=h.find(".jp-timers .current");var e=h.find(".jp-timers .total");var d=h.data("uploadtype");var f={m4a:b};if(d=="mp3"){f={mp3:b}}a.jPlayer.timeFormat.padMin=false;h.find(".audio-player").jPlayer({ready:function(i){a(this).jPlayer("setMedia",f)},swfPath:"/sites/all/libraries/jplayer",supplied:d,wmode:"window",solution:"flash,html",keyEnabled:true,ended:function(i){g.hide();e.show()},play:function(i){g.show();e.hide()},pause:function(i){}})};CP.home.prototype.setupAutoRotate=function(){var c=navigator.userAgent.toLowerCase().indexOf("safari/")>-1;var b=this;if(this.numBillboards>1){this.autoRotate=setInterval(function(){if(a("#indicators a").length){b.currentIndex=((b.currentIndex+1)%b.numBillboards);if(c){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",true,true,window);a("#indicators a").get(b.currentIndex).dispatchEvent(d)}else{a("#indicators a").get(b.currentIndex).click()}b.setupAutoRotate()}},10000)}};CP.home.prototype.initListeners=function(){var b=this;a(".trigger-video").live("click",function(){var d=this.id.replace("trigger-","embed-");d=d.replace("thumb-","embed-");temp=a("#"+d).html();a("#modal-content").html(temp.replace("<!--","").replace("-->",""));CP.runningVars.modal.open();return false});a(".indicator").live("click",function(d){clearInterval(b.autoRotate);var f;if(a(this).hasClass("is-flash")){a("#billboards").hide();f=a(".indicator.is-flash").index(this)}else{a("#billboards").show();f=a(".indicator.no-flash").index(this);a("#billboards a").hide();a(a("#billboards a.no-flash").get(f)).show()}a("#indicators a").removeClass("active");a(this).find("a").addClass("active")});a("#arrow-right, #arrow-left").mouseover(function(d){a(this).addClass("active")}).mouseout(function(d){a(this).removeClass("active")});var c=navigator.userAgent.toLowerCase().indexOf("safari/")>-1;a("#arrow-left").live("click",function(f){b.currentIndex=(b.currentIndex-1);if(b.currentIndex<0){b.currentIndex=(b.numBillboards-1)}try{if(c){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",true,true,window);a("#indicators a").get(b.currentIndex).dispatchEvent(d)}else{a("#indicators a").get(b.currentIndex).click()}}catch(f){}});a("#arrow-right").live("click",function(f){b.currentIndex=((b.currentIndex+1)%b.numBillboards);try{if(c){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",true,true,window);a("#indicators a").get(b.currentIndex).dispatchEvent(d)}else{a("#indicators a").get(b.currentIndex).click()}}catch(f){}})};CP.home.prototype.initBB=function(){var c=this;var b=window.location.hash.substr(2);if(b.length<=0){b="none"}if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){b="on_mobile"}var d=jQuery.ajax({type:"GET",url:window.location.protocol+"//"+window.location.host+"/"+CP.global.runningVars.langPath+"json/homepage/billboards/"+CP.runningVars.countryCode+"/"+b,data:"",async:false,success:function(f){a.each(f,function(k,q){if(q.homepage_item_toggle&&q.homepage_item_toggle[0].value=="1"){return true}var m="";var l="no-flash ";a.each(q.personalize_billboard,function(e,r){l+=r.value+" "});var o=((q.homepage_billbard_link[0].url)?q.homepage_billbard_link[0].url:"");var j=q.title.split(" ").join("_");try{var p="";a.each(q.homepage_billbard_link[0].attributes.data,function(e,r){if(r.length>0){p+="data-"+e+'="'+r+'" '}})}catch(n){var p=""}m='<a class="'+l+'" href="'+o+'" '+p+' data-ga="'+j+'">';m+='<img alt="'+q.title+'" src="'+q.homepage_billboard_file_up[0].uri+'">';m+="</a>";a("#billboard-welcome").before(m);a("#billboard-welcome").hide()});var i=a("#billboards a").length;var g=0;a("#billboards a").each(function(e,j){if(!a(j).hasClass(c.options.UTYPE)&&g<i){a(j).remove();g++}if(e>0){a(j).hide()}});c.initBBNav();try{window.agegate.initLinks("#billboards a")}catch(h){}}})};CP.home.prototype.load=function(){this.options.UTYPE=getCookie("cpvisitor")||"new";var b=this;this.initLanguage();this.initModal();this.initOverlay();this.initCountry();this.initBB();this.initPromo();this.setupAutoRotate();this.initListeners();if(!CP.global.runningVars.hasFlash){a(".indicator.is-flash").remove();a("#billboards a.is-flash").remove();a("#billboards").show();try{a(a("#billboards a.no-flash").get(0)).show()}catch(c){}}};CP.home.prototype.initLanguage=function(){var d=window.location.pathname;var c=d.split("/");var b=c[1];if((b!="es")&&(b!="fr")&&(b!="pt")&&(b!="de")&&(b!="ru")){b=""}CP.global.runningVars.langPath=(b==""?b:b+"/")};CP.home.prototype.initModal=function(){a("#modal-overlay").remove();a("#modal-loading").remove();a("#modal-window").remove();CP.runningVars.modal=new CP.utils.Modal({showClose:true,contentCloseDelegate:".modal-close",onOpenComplete:function(){},onCloseComplete:function(){},onCloseStart:function(){},onOpenStart:function(){}})};CP.home.prototype.initCountry=function(){countryCode=getCookie("CP_OVERRIDE_LOCATION")||"lookup";if(countryCode=="lookup"){var b=jQuery.ajax({type:"POST",url:window.location.protocol+"//"+window.location.host+"/geoip/all",data:"{}",async:false,success:function(c){countryCode=c.countryCode;isGated=c.required;cutoffYear=c.cutoffYear}});if(countryCode=="lookup"||countryCode=="--"){countryCode="US"}else{setCookie("cpvisitor-agcoy",cutoffYear,null);setCookie("cpvisitor-agig",isGated,null);setCookie("CP_OVERRIDE_LOCATION",countryCode,14)}}CP.runningVars.countryCode=countryCode};CP.home.prototype.initOverlay=function(){var e=new RegExp("[\\?&]overlay=([^&#]*)").exec(window.location.href);var g=false;if(e){g=decodeURIComponent(e[1]);var i=new RegExp("^https://(stage.)?secured.clubpenguin.com/(pt/|es/|de/|fr/|ru/)?(penguin|membership)/activate(/([a-zA-Z0-9]+)*/?([a-zA-Z0-9]+)*)?","i");var b=g.match(i);if(b){var f=b[1];if(typeof b[1]=="undefined"){f=""}var c=b[2];if(typeof b[2]=="undefined"){c=""}var d="";if(typeof b[5]!="undefined"&&typeof b[6]!="undefined"){d+=b[5]+"/"+b[6]}var h="https://"+f+"secured.clubpenguin.com/"+c+b[3]+"/activate/"+d;window.location.href=h}}}})(window.jQuery);window.jQuery(document).ready(function(){window.home=new CP.home()});function itunesInterstitial(){$("#itunesLink").mousedown()};
/*
     FILE ARCHIVED ON 14:07:30 Jan 15, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:29:51 Aug 22, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 304.715 (3)
  esindex: 0.012
  captures_list: 329.862
  CDXLines.iter: 16.614 (3)
  PetaboxLoader3.datanode: 316.777 (5)
  exclusion.robots: 0.494
  exclusion.robots.policy: 0.473
  RedisCDXSource: 1.895
  PetaboxLoader3.resolve: 97.937 (2)
  load_resource: 179.713
*/