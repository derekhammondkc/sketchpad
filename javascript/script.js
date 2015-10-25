var gridNum = 32;
var totalGrid = gridNum * gridNum;
var totalWidth = 600;
var square = (totalWidth / gridNum) - 2;

$(document).ready(function () {
	for (var i = 1; i <= totalGrid; i++) {
		$('#container').append('<div id="' + i + '">' + i + '</div>')
	};
	$('#container > div').css({"width": square,
								"height": square});
})