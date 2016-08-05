$(document).ready(function() {

	$(".show-more").click(function () {
		$(this).hide();
		$(".more-settings").slideToggle();
		return false;
	});

	$(".reset-form").click(function () {
		$(".search-form")[0].reset();
		if($(".more-settings").css("display") == "none"){

		}else{
			$(".more-settings").slideToggle();
			$(".show-more").show();
		}
		return false;
	});

	$(window).scroll(function(){
		if($(window).width() > 1200) {
			if ($(this).scrollTop() > 60) {
				$(".search-block").addClass("fixed").fadeIn('fast');
			} else {
				$(".search-block").removeClass("fixed").fadeIn('fast');
			}
		}
	});

	$(window).resize(function(){
			if($(window).width() < 1200) {
				$(".search-block").removeClass("fixed").fadeIn('fast');
			}
		});
	
});