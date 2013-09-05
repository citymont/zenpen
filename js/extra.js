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

	function localstorageToJson() {
		return JSON.stringify(localStorage);
	}

	return {
		init: init
	}

})();