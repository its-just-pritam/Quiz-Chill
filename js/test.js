$(document).ready(function(){
		$("#logo-name").fadeIn(1000);

		$("#social-media").fadeIn(1000);

		$(".profile-img img").animate({deg: 360}, {duration: 1200, step: function(now){
	        $(this).css({ transform: "rotate(" + now + "deg)" });
	    	}
	    });

		$(".tm-profile-option").animate({opacity: "1"});

});



var menu = $(".tm-nav li a");

menu.on("click", function(){
	$(this).css({"color": "#34AE54"});
	menu.off("click");
});



var social_icon = $(".social-media-logo img");

social_icon.on("mouseover",function(){
	$(this).animate({opacity: "0.4"});
});

social_icon.on("mouseleave",function(){
	$(this).animate({opacity: "1"});
});

$("#social-media img").on("click",function(){
	$("#social-media-link").find("a").slideToggle(500);
});

$("#social-media-link td a").on("mouseover",function(){
	$(this).css({"color": "#FFFF75"});
});

$("#social-media-link td a").on("mouseleave",function(){
	$(this).css({"color": "#E8F9F8"});
});


function login_validator(){

	if ($("#tm-login").find("#tm-username").val().length==0) {
		alert("Please enter your Username !");
		return false;
	}

	if ($("#tm-login").find("#tm-password").val().length==0) {
		alert("Please enter your Password !");
		return false;
	}

}

function register_validator(){

	if ($("#tm-register").find("#tm-name").val().length==0) {
		alert("Please enter your Name !");
		return false;
	}

	if ($("#tm-register").find("#tm-username").val().length==0) {
		alert("Please enter a valid Username !");
		return false;
	}

	if ($("#tm-register").find("#tm-password").val().length <= 6) {
		alert("Please enter a strong Password, more than 6 characters !");
		return false;
	}

	if ($("#tm-register").find("#tm-password").val().length <= 6) {
		alert("Please enter a strong Password, more than 6 characters !");
		return false;
	}

}


$(".tm-profile-option").on("mouseover",function(){
	$(this).find("i").css({"color": "#F90A35"});
});

$(".tm-profile-option").on("mouseleave",function(){
	$(this).find("i").css({"color": "white"});
});

$(".profile-body-nav ul li").on("click", function(){
	$(this).addClass("active").siblings().removeClass("active");
});

const tabBtn = document.querySelectorAll(".profile-body-nav ul li");

const tab = document.querySelectorAll(".tab");

function tabs(panelIndex) {
	tab.forEach(function(node){
		node.style.display = "none";
	});
	tab[panelIndex].style.display = "block";
}
tabs(0);

$(".tm-profile-option").on("click", function(){
	tabs(1);
	$(".profile-body-nav ul li").eq(1).addClass("active").siblings().removeClass("active");
});

$(".avatar-options").on("click",function(){
	$(".profile-img img").attr("src", $(this).attr("src"));
	$("#avatar-input").attr("value",$(this).attr("src"));
/*	$("#settings-avatars form input").css({"display": "block"});*/
});

$("#settings-avatars form input").on("click",function(){
	alert("You shall be automatically logged out with saved changes. Re-login to view changes!");
});


