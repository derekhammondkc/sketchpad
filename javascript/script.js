var gridNum = 8;
var totalLength = 580;
var square = (totalLength / gridNum) - 2;
var color = 0;
var opacity = 0;

$(document).ready(function () {
	createGrid(gridNum);

	$('.grid').on('mouseenter', function() {
		$(this).addClass("highlighted");
	});

	$('#standard').on('click', function() {
		$('.grid').remove();
		$('button').css("background", "#e0e0e0");
		$('#standard').css("background", "#b0b0b0");

		do {
			gridNum = prompt("How many grids wide?");
			if (gridNum < 2 || gridNum > 64) {
				alert("Grids must be between 2 to 64");
			}
		} while(gridNum < 2 || gridNum > 64);

		createGrid(gridNum);

		$('.grid').on('mouseenter', function() {
			$(this).addClass("highlighted");
		});

	});

	$('#random').on('click', function() {
		$('.grid').remove();
		$('button').css("background", "#e0e0e0");
		$('#random').css("background", "#b0b0b0");
		do {
			gridNum = prompt("How many grids wide?");
			if (gridNum < 2 || gridNum > 64) {
				alert("Grids must be between 2 to 64");
			}
		} while(gridNum < 2 || gridNum > 64);

		createGrid(gridNum);

		$('.grid').on('mouseenter', function() {
			color = Math.random();
			if (color < (1/7)) {
				$(this).css("background", "#d10000");
			}else if (color < (2/7)) {
				$(this).css("background", "#ff6622");
			}else if (color < (3/7)) {
				$(this).css("background", "#ffda21");
			}else if (color < (4/7)) {
				$(this).css("background", "#33dd00");
			}else if (color < (5/7)) {
				$(this).css("background", "#1133cc");
			}else if (color < (6/7)) {
				$(this).css("background", "#220066");
			}else {
				$(this).css("background", "#330044");
			}
		});
	});

	$('#shade').on('click', function() {
		$('.grid').remove();
		$('button').css("background", "#e0e0e0");
		$('#shade').css("background", "#b0b0b0");
		do {
			gridNum = prompt("How many grids wide?");
			if (gridNum < 2 || gridNum > 64) {
				alert("Grids must be between 2 to 64");
			}
		} while(gridNum < 2 || gridNum > 64);

		createGrid(gridNum);

		$('.grid').on('mouseenter', function() {
			$(this).addClass("black");
			$(this).css("opacity", $(this).css("opacity") - 0.1);
		});
	});

});

function createGrid(num) {
	for (var i = 1; i <= num; i++) {
		for (var j = 1; j <= num; j++) {
			$('#container').append('<div  class="grid"></div>');
		}
		$('#container').append('<div class="newRow"></div>');
	}

	square = (totalLength / num) -2;
	$('#container > .grid').css({"width": square,
								"height": square});

}