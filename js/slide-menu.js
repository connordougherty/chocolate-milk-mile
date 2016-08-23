var toggle = 0;

$(document).ready(function() {
	$("#milkbox").click(function() {
		if (toggle == 0){
			$("#mobile-menu").animate({height: '265px'});
      toggle = 1;
    } else {
    	$("#mobile-menu").animate({height: '100px'});
      toggle = 0;
    }
	});
});