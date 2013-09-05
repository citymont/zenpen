var extra = (function() {

	var allElements = [];

	function init() { 
		return findElementsEditable();
	}

	function findElementsEditable() {
		
		$('div[contenteditable=true]').each(function() {
			allElements.push('.' + $(this).attr('class'));
		});

		return allElements;
	}

	return {
		init: init
	}

})();