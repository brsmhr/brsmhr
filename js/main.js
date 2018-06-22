$(document).ready(function(){

	$('.focuspoint').focusPoint();

	// Setup variables
	$bcgMaster = $('#bcg-01 img');
	$imacSVG = $('#imacSVG');

	// Default SVG offsets
	var svgWidth = $bcgMaster.width(),
		svgHeight = $bcgMaster.height(),
		svgTop = $bcgMaster.css('top'),
		svgLeft = $bcgMaster.css('left');

	// Resize SVG on page load
	resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);

	//On window resize
	$(window).resize(function(){

		setTimeout(function(){

			// Updated SVG offsets
			svgWidth = $bcgMaster.width(),
			svgHeight = $bcgMaster.height(),
			svgTop = $bcgMaster.css('top'),
			svgLeft = $bcgMaster.css('left');

			// Resize SVG on page resize
			resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);

		}, 100);

	});

	function resizeSVG(svgWidth, svgHeight, svgTop, svgLeft){
		$imacSVG
			.height(svgHeight)
			.width(svgWidth)
			.css({left: svgLeft, top: svgTop});
	}

	function enableSkrollr(){
		console.log('we are on desktop');

		// Enable Skroll only for non-touch devices
		if(!Modernizr.touch){
			var s = skrollr.init();
        }

	}

	function disableSkrollr(){
		console.log('we are on mobile');

		// Destroy Skrollr
		var s = skrollr.init();
		s.destroy();
	}

	enquire.register("screen and (min-width: 768px)", {
	    setup : function() {
            disableSkrollr();
        },
        match : function() {
	        enableSkrollr();
	    },  
	    unmatch : function() {
	        disableSkrollr();
	    }
	});

	skrollr.menu.init(s, {
		//How long the animation should take in ms.
	    duration: function(currentTop, targetTop) {
	        //By default, the duration is hardcoded at 500ms.
	        return 1500;

	        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
	        //return Math.abs(currentTop - targetTop) * 10;
	    }
	});

});
