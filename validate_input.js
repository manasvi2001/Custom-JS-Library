(function() {
	this.ValidateDot = function() {
		if(arguments[0] && typeof arguments[0] === "object") {
			validateAndSetOptions(arguments[0]);
		} else {
			console.log("Error calling this object");
		}
	}
	// Private Function
	function validateAndSetOptions(options) {
		if(options.hasOwnProperty('id') && options.hasOwnProperty('matchArray') && options.hasOwnProperty('hoverText') && options.hasOwnProperty('matchNumber')) {
			this.dot = document.createElement("div");
			this.dot.className = "red-dot";
			this.dot.id = options['id'].slice(1) + options['matchNumber'];
			$(options['id']).after(this.dot);
			$('#' + this.dot.id).hover(function() {
				$(this).html("<br><div style=\"white-space: nowrap; position: absolute;\">" + options['hoverText'] + "</div>");
				$(this).css('cursor','pointer');
			}, function() {
				$(this).html("");
			});
			$(options['id']).on('input', function() {
				var currVal = $(this).val();
				// console.log("Current value = " + currVal);
				var matchFlag = false;
				if(currVal.length == 0) {
					matchFlag = false;
				}
				var matchArray = options['matchArray'];
				for(var i=0;i<matchArray.length;i++) {
					for(var j=0;j<currVal.length;j++) {
						if(matchArray[i] === currVal[j]) {
							matchFlag = true;
							break;
						}
					}
					if(matchFlag) {
						break;
					}
				}
				if(matchFlag) {
					$(options['id'] + options['matchNumber']).attr('class', 'green-dot');
				} else {
					$(options['id'] + options['matchNumber']).attr('class', 'red-dot');
				}
			});
		} else {
			console.log("Not all Properties are set.");
		}
	}
}());