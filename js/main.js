  
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS

=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {
		const triggerEl = document.querySelector('#myTab a[href="#profile"]');
		Tab.getInstance(triggerEl).show(); // Select tab by name

		const triggerFirstTabEl = document.querySelector('#myTab li:first-child a');
		Tab.getInstance(triggerFirstTabEl).show(); // Select first tab
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		return;
	});
	
	
})(jQuery);
