  
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


	$(document).ready(function() {
		// Toggle sidebar and overlay
		$(".menu-icon").click(function() {
			$(".sidebar").toggleClass("active");
			$(".overlay").toggleClass("active");
		});
	
		// Close sidebar when clicking outside
		$(".overlay").click(function() {
			$(".sidebar").removeClass("active");
			$(".overlay").removeClass("active");
		});
	});

		/*====================
		* Preview Edit page funcs
		======================*/

		$(document).ready(function() {
			// Function to open a tab
			function openPage(pageName, el) {
				// Hide the #Home tab (defaultOpen) first
				$("#Home").hide().removeClass("active");
			
				// Hide all tab content
				$(".tabcontent").hide().removeClass("active");
			
				// Remove border from all tab links
				$(".buttoncontent").css("border-bottom", "");
			
				// Show the selected tab content
				$("#" + pageName).show().addClass("active");
			
				// Add border to the clicked tab link
				$(el).find(".buttoncontent").css("border-bottom", "2px solid #fd264f");
			
				// Save the clicked button's ID to localStorage
				localStorage.setItem("lastClickedTab", pageName);
			}
		
			// Event listener for tab links
			$(".tablink").click(function() {
				var pageName = $(this).data("page");
				openPage(pageName, this);
		
				// Close the sidebar (if open)
				$(".sidebar").removeClass("active");
				$(".overlay").removeClass("active");
			});
		
			// Retrieve the last clicked tab from localStorage
			var lastClickedTab = localStorage.getItem("lastClickedTab");
		
			// If a last clicked tab is found, open it; otherwise, open the default tab
			if (lastClickedTab) {
				openPage(lastClickedTab, $(".tablink[data-page='" + lastClickedTab + "']"));
			} else {
				// Open the default tab
				$("#defaultOpen").click();
			}
		});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		return;
	});
	
	
})(jQuery);
