var extra = (function() {

	var allElements = [];

	function init() { 
		return config(findElementsEditable(), 45);
	}
	
	/* Find element editable and options */
	function findElementsEditable() {

		$('div[contenteditable=true]').each(function() {
			allElements.push('.' + $(this).attr('class'));
			if($(this).data('type') =="oneline") {
				document.querySelector('.' + $(this).attr('class')).onkeypress = onelineKeyPress;
			}
		});
		

		return allElements;
	}

	function onelineKeyPress( event ) {

		if ( event.keyCode === 13 ) {
			event.preventDefault();
		}
	}

	function config(a, b) {
	    return {
	        allElements: a,
	        y: b
	    }
	}

	function localstorageToJson() {
		return JSON.stringify(localStorage);
	}

	return {
		init: init
	}

})();