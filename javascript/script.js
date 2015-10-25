var gridNum = 8;
var totalGrid = gridNum * gridNum;
var totalLength = 580;
var square = (totalLength / gridNum) - 2;

$(document).ready(function () {
	
	for (var i = 1; i <= gridNum; i++) {
		for (var j = 1; j <= gridNum; j++) {
			$('#container').append('<div  class="grid" id="' + j + '"></div>')
		};
		$('#container').append('<div class="newRow"></div>');
	};
	
	$('#container > .grid').css({"width": square,
								"height": square});

	$('#container > div').on('mouseenter', function() {
		$(this).css("background", "yellow");
	});
})