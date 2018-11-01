/*
		Main Page handlers for Fake Penguin..
*/
Drupal.Page = {
	Create : {
		form : '#penguin-create-form',
		anonTkn : ':input[name=anon_token]',
		color: ':input[name=color]',
		name : '#edit-name',
		pass: '#edit-pass',
		show_pass: '#edit-pass-show',
		mail : '#edit-email',
		terms: '#edit-terms',
		submit: '#edit-submit',
		formBuild: ':input[name=form_build_id]',
		formId: ':input[name=form_id]'
	},
	inputs : {
		name : null,
		pass : null,
		mail : null,
		terms: null
	}
};

let Things;

$(function ($$) {
	form = $$.Create.form;
	$$ = $$.Create;
	_ = Drupal.settings;
	$_ = Drupal.Penguin;
	$.extend($, {
		e: function (child, element) {
			children = $(child + ' ' + element);
			if (children.length > 0){
				return children;
			} else {
				return null;
			}

	}});

	$.e(form, $$.anonTkn).attr('value', $_.Cookies.anon_token);
	$.e(form, $$.formBuild).attr('value', $_.Cookies.form_build_id);

	/* General */
	$("#name-error, #pass-error, #email-error").on("click", function(){
		$(this).fadeOut();
		//$(this).html("");
	})

	/* Handling Events.. */
	$.e(form, $$.name).on("click", function(){
		$(this).removeClass("error");
		$("#name-error").fadeOut();
		$("label[for="+this.id+"]").attr("style", "display:none;");
		$.e(form, ".tip-inner").text($('.form-item-name .description p').text());
		$.e(form, ".tip-box").fadeIn();
		name = [Drupal.Page.Create.form, Drupal.Page.Create.name].join(" ");
		$(name).removeClass("valid");
		$(name).removeClass("error");
	});
	$.e(form, $$.name).blur(function(){
		Drupal.Page.inputs.name = false;
		$(this).addClass("progress-disabled");
		$(this).attr("disabled", "");
		$.e(form, ".tip-box").fadeOut();
		_.ajax("http://localhost:8000/create", {on:"username_click_", value: $(this).val()}, function(data){
			parsed = $.parseJSON(data);
			name = [Drupal.Page.Create.form, Drupal.Page.Create.name].join(" ");
			$(name).removeClass("progress-disabled");
			$(name).removeAttr("disabled");
			if (parsed.error.length > 0){
				$("#name-error").attr("class", "error-msg");
				$("#name-error").html(parsed.error);
				$(name).addClass("error");
				$("#name-error").fadeIn();
			} else if (parsed.success.length > 0){
				$("#name-error").fadeOut();
				$(name).addClass("valid");
				$(name).removeClass("error");
				Drupal.Page.inputs.name = true;
			} else {
				$(name).addClass("error");
				$("#name-error").attr("class", "error-msg");
				$("#name-error").html('Illegal request!');
				$("#name-error").fadeIn();
			}

		})
	});

	$.e(form, $$.pass).on("click", function(){
		$("label[for="+this.id+"]").attr("style", "display:none;");
		$("#pass-error").fadeOut();
		$("label[for="+this.id+"]").attr("style", "display:none;");
		$.e(form, ".tip-inner").text($('.form-item-pass .description p').text());
		$.e(form, ".tip-box").fadeIn();
		pass = [Drupal.Page.Create.form, Drupal.Page.Create.pass].join(" ");
		$(pass).removeClass("valid");
		$(pass).removeClass("error")
	});
	$.e(form, $$.pass).blur(function(){
		Drupal.Page.inputs.pass = false;
		$.e(form, ".tip-box").fadeOut();
		$(this).addClass("progress-disabled");
		$(this).attr("disabled", "");

		_.ajax("http://localhost:8000/create", {on:"password_click_", value: $(this).val()}, function(data){
			parsed = $.parseJSON(data);
			pass = [Drupal.Page.Create.form, Drupal.Page.Create.pass].join(" ");
			$(pass).removeClass("progress-disabled");
			$(pass).removeAttr("disabled");
			if (parsed.error.length > 0){
				$("#pass-error").attr("class", "error-msg");
				$("#pass-error").html(parsed.error);
				$(pass).addClass("error");
				$("#pass-error").fadeIn();
			} else if (parsed.success.length > 0){
				$("#pass-error").fadeOut();
				$("#pass-error").removeClass("error");
				$(pass).addClass("valid");
				$(pass).removeClass("error");
				Drupal.Page.inputs.pass = true;
			} else {
				$(pass).addClass("error");
				$("#pass-error").attr("class", "error-msg");
				$("#pass-error").html('Illegal request!');
				$("#pass-error").fadeIn();
			}
		});

	});

	$.e(form, $$.show_pass).on("click", function(){
		if ($.e(form, $$.pass).attr("type") == "text"){
			$.e(form, $$.pass).attr("type", "password");
			$(".sp-val").removeClass("on");
			$(".sp-val").text("Off");
			$(".sp-val").addClass("off");
		} else {
			$.e(form, $$.pass).attr("type", "text");
			$(".sp-val").removeClass("off");
			$(".sp-val").text("On");
			$(".sp-val").addClass("on");
		}
	});

	$.e(form, $$.mail).on("click", function(){
		$("label[for="+this.id+"]").attr("style", "display:none;");
		$("#email-error").fadeOut();
		$("label[for="+this.id+"]").attr("style", "display:none;");
		$.e(form, ".tip-inner").text($('.form-item-email .description p').text());
		$.e(form, ".tip-box").fadeIn();
		email = [Drupal.Page.Create.form, Drupal.Page.Create.mail].join(" ");
		$(email).removeClass("valid");
		$(email).removeClass("error");
	});
	$.e(form, $$.mail).blur(function(){
		Drupal.Page.inputs.mail = false;
		$.e(form, ".tip-box").fadeOut();
		$(this).addClass("progress-disabled");
		$(this).attr("disabled", "");
		_.ajax("http://localhost:8000/create", {on:"email_click_", value: $(this).val()}, function(data){
			parsed = $.parseJSON(data);
			email = [Drupal.Page.Create.form, Drupal.Page.Create.mail].join(" ");
			$(email).removeClass("progress-disabled");
			$(email).removeAttr("disabled");
			if (parsed.error.length > 0){
				$("#email-error").attr("class", "error-msg");
				$("#email-error").html(parsed.error);
				$(email).addClass("error");
				$("#email-error").fadeIn();
			} else if (parsed.success.length > 0){
				$("#email-error").fadeOut();
				$("#email-error").removeClass("error");
				$(email).addClass("valid");
				$(email).removeClass("error");
				Drupal.Page.inputs.mail = true;
			} else {
				$(email).addClass("error");
				$("#email-error").attr("class", "error-msg");
				$("#email-error").html('Illegal request!');
				$("#email-error").fadeIn();
			}
		});
	});

	$.e(form, $$.terms).on("click", function(){
		if (!$("#edit-terms").is(":checked")){
			$("label[for="+this.id+"]").addClass("checked");
			Drupal.Page.inputs.terms = true;
		} else {
			$("label[for="+this.id+"]").removeClass("checked");
			Drupal.Page.inputs.terms = null;
		}
	});

	$.e(form, $$.color).on("click", function(){
		id = this.id;
		prev_color = $("label[for=edit-color-"+$(":input[name=color][checked=checked]").val()+"]").attr("class").replace("option ",  "").replace(" checked", "").split(" ");
		prev_color[0] = prev_color[0].replace("item", "color")
		$.e(form, $$.color).each(function(){
			$(this).removeAttr("checked");
			$("label[for="+this.id+"]").removeClass("checked");
		})
		$(this).attr("checked", "");
		$("label[for="+id+"]").addClass("checked");
		now_color = $("label[for=edit-color-"+$(this).val()+"]").attr("class").replace("option ",  "").replace(" checked", "").split(" ");
		now_color[0] = now_color[0].replace("item", "color");
		$("#penguin-paper-doll").removeClass(prev_color[0]);
		$("#penguin-paper-doll").removeClass(prev_color[1]);

		$("#penguin-paper-doll").addClass(now_color[1]);
		$("#penguin-paper-doll").addClass(now_color[0]);

	});
	/* Submit button*/
	$.e(form, ":input[type=submit]").on("click", function(e){
		e.preventDefault();
		if (!Things){
			$("#cboxOverlay").fadeIn();
			$("#cboxOverlay").html('<div style="top:45%; left:45%; position: relative;"><img src="https://secured.clubpenguin.com/sites/default/modules/custom/penguin/img/processing-icon.gif" style="opacity: 1;"> </div>');
			True = true;
			$.each(Drupal.Page.inputs, function(i, value){
				True *= value;
			})
			if (True){
				$("input").each(function(){$(this).attr("disabled", "")});
				Things = true;
				$(".preventer").removeAttr("style");
				$($$.submit).attr("disabled", "");
				$($$.submit).addClass("disabled");
				inputs = {
					on : "form_submit__",
					value : {
						form : 'penguin-create-form',
						anonTkn : $.e(form, $$.anonTkn).val(),
						color: $.e(form, $$.color).val(),
						name : $.e(form, $$.name).val(),
						pass: $.e(form, $$.pass).val(),
						show_pass: 'In-declarance',
						mail : $.e(form, $$.mail).val(),
						terms: 'Yeah! Terms are accepted!!',
						submit: $.e(form, $$.submit).val(),
						formBuild: '#xje94mLLo9f4nvkd{' + $.e(form, $$.formBuild).val() + "}-> Terms Delayed Form Build id..",
						formId: '$E9xdFgf94vm+<mailing>->{' + $.e(form, $$.formId).val() + "}?Yes=No!!",
						swid : $_.Cookies.swid,
						recaptcha: grecaptcha.getResponse()
					}
				};
				_.ajax('http://localhost:8000/create', inputs, function(data){
					parsed = $.parseJSON(data);
					if (parsed.error.length > 0){
						msg = parsed.error;
						html = '<div style="top:45%; left:10%; width:1165px; overflow-x: break-line;position: relative; opacity:1;"> <div style="opacity: 1; font-size: 34px;"><b><font face="MyriadWebProBold" color="red">'+msg+'</font></b></div></div>';
						$("#cboxOverlay").html(html);
					} else if (parsed.success.length > 0){
						msg = parsed.success;
						html = '<div style="top:45%; left:30%; position: relative; opacity:1;"> <div style="opacity: 1; font-size: 34px;"><b><font face="MyriadWebProBold" color="green">'+msg+'</font></b></div></div>';
						$("#cboxOverlay").html(html);
					} else {
						msg = 'Illegal Request!!';
						html = '<div style="top:45%; left:30%; position: relative; opacity:1;"> <div style="opacity: 1; font-size: 34px;"><b><font face="MyriadWebProBold" color="green">'+msg+'</font></b></div></div>';
						$("#cboxOverlay").html(html);
					}
				});
			} else {
				// Probably a Hacker or a bot :O..
				alert("STOP HACKING! Refresh and try again 'Truthfully'..");
				Drupal.page.inputs = {
					user: null,
					pass: null,
					mail: null
				}
			}
		}
	});

	setInterval( function(){
		if (!Things){
			True = true;
			$.each(Drupal.Page.inputs, function(i, value){
				True *= value;
			})
			if (True){
				$(".preventer").attr("style", "display: none;");
				$($$.submit).removeAttr("disabled");
				$($$.submit).removeClass("disabled");
			} else {
				$(".preventer").removeAttr("style");
				$($$.submit).attr("disabled", "");
				$($$.submit).addClass("disabled");
			}
		}
	}, 2);

}(Drupal.Page));
