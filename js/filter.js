$(document).ready(function(){
	var clicked = false;//Needed to trigger GSAP animation
	$("#navbutton").click(function(){
		$(".filter").toggleClass("filtered");
		//Using GSAP to move the text on jumbotron when the mobile menu is clicked
		home = $('.home');
		if(clicked){
			TweenLite.to(home, .6, {marginTop: '50px', ease:Power0.easeNone});
		}else{
			TweenLite.to(home, .6, {marginTop: '250px', ease:Power0.easeNone});
		}
		clicked = !clicked;
	});
});