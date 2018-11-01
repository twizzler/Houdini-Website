/*
	Drupal settings for Fake Penguin Register..
*/
var Drupal = {'Penguin':{}, 'settings':{}};

/* Setting basic functions*/
Drupal.settings.ajax = function (url, datas, callback, method) {
	method = method || 'POST';
	//console.log(method);
	$.ajax({
		'url': url,
		'method': method,
		'data': datas,
		success : function (data){ if (callback) {return callback(data)}},
		error   : function (data){ if (callback) {return callback(null)}}
	});
}
/* Form build id, produced in here ;) */
Drupal.settings.formId = function(){
	form_key = "";
  	for( ; form_key.length < 45; form_key  += Math.random().toString(36).substr(2));
  	form_key = form_key.substr(0, 45);

  	form_build_id = 'form-' + form_key;
  	return form_build_id;
} ()

/* anonToken, handled by CP For security purpose..*/
Drupal.settings.anonToken = function() {
	anonToken = "";
  	for( ; anonToken.length < 45; anonToken  += Math.random().toString(36).substr(2));
  	anonToken = anonToken.substr(0, 45);

  	return anonToken;
}()

/* Fetch Cookies, returns  'null' if doesn't exist*/
Drupal.settings.getCookie = function(name){
	var s = document.cookie.indexOf(name + "=");
	if(s == -1) {
		return null;
	}
	s += name.length + 1;
	var e = document.cookie.indexOf(";", s);
	if(e == -1) {
		e = document.cookie.length;
	}
	return unescape(document.cookie.substring(s, e));
}

/* Set Cookies, name, value, days..*/
Drupal.settings.setCookie = function(name, value, days){
	if (days) {
	    var date = new Date();
	    date.setTime(date.getTime()+(days*24*60*60*1000));
	    var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/; domain=";
}

/* CURRENT OVERRIDE LOCATION, If returns False - It's probably a Hack!*/
Drupal.settings.OverrideLocation = function(data){
	if (data){
		parsed = $.parseJSON(data);
		Drupal.settings.setCookie('OverridenLocation', parsed.countryCode, 60.5);
	} else {
		Drupal.settings.setCookie('OverridenLocation', 'False', 90); //??
	}
}

/* Set and Retun cookies as Drupal.Penguin.Cookies */
Drupal.Penguin.Cookies = function (_) {
	_.setCookie('anon_token', _.anonToken);
	_.setCookie('form_build_id', _.formId);	
	if (!_.getCookie('fakevisitor')){
		_.setCookie('newvisitor', true, 60.5);
		visitor = function() {
			fakeVisitor = "14462002-";
  			for( ; fakeVisitor.length < 12; fakeVisitor  += Math.random().toString().substr(2));
  			fakeVisitor = fakeVisitor.substr(0, 22);

  			return fakeVisitor;
  		}()

		_.setCookie('fakevisitor', visitor, 60.5);
	} else {
		_.setCookie('newvisitor', false, 60.5);
	}
	playspanSWID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
	_.setCookie('playerTRANSVERSAL', playspanSWID);
	_.setCookie('ctoRegion', 'register_fake_');

	if (!_.getCookie('OverridenLocation')){
		_.ajax('http://localhost/geoip/all/', {}, _.OverrideLocation, "GET");
	}

	return {
		anon_token : _.getCookie('anon_token'),
		form_build_id : _.getCookie('form_build_id'),
		newvisitor : _.getCookie('newvisitor').toString() == 'true' ? true:false,
		fakevisitor : _.getCookie('fakevisitor') == null ? false : _.getCookie('fakevisitor'),
		swid : _.getCookie('playerTRANSVERSAL'),
		region : _.getCookie('ctoRegion'),
		locUnk : _.getCookie('OverrideLocation') == 'False' ? true : false
	};

}(Drupal.settings)
