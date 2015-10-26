var gridNum = 8; // Default grids wide
var totalLength = 500; //Total length of drawing area
var square = (totalLength / gridNum) - 2; // size of each grid, -2 to account for border
var color; // Variable to store the random color that gets picked

$(document).ready(function () {
	// creates the first grid on default values
	createGrid(gridNum);

	// highlights each grid to yellow when mouse over
	$('.grid').on('mouseenter', function() {
		$(this).addClass("highlighted");
	});

	// when user clicks standard button
	$('#standard').on('click', function() {
		// remove all old grids and shades only the clicked button
		$('.grid').remove();
		$('.newRow').remove();
		$('button').css("background", "#e0e0e0");
		$('#standard').css("background", "#b0b0b0");

		// ask user how many grids wides, and validates between
		// 2 and 64 grids
		do {
			gridNum = prompt("How many grids wide (2 to 64)?");
			if (gridNum < 2 || gridNum > 64) {
				alert("Grids must be between 2 to 64");
			}
		} while(gridNum < 2 || gridNum > 64);

		// creates the standard grid base on number of grids users wants
		createGrid(gridNum);

		// highlights each grid to yellow when mouse over
		$('.grid').on('mouseenter', function() {
			$(this).addClass("highlighted");
		});

	});

	// when user clicks random color button
	$('#random').on('click', function() {
		// remove all old grids and shades only the clicked button
		$('.grid').remove();
		$('.newRow').remove();
		$('button').css("background", "#e0e0e0");
		$('#random').css("background", "#b0b0b0");
		
		// ask user how many grids wides, and validates between
		// 2 and 64 grids
		do {
			gridNum = prompt("How many grids wide (2 to 64)?");
			if (gridNum < 2 || gridNum > 64) {
				alert("Grids must be between 2 to 64");
			}
		} while(gridNum < 2 || gridNum > 64);

		// creates the standard grid base on number of grids users wants
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
		$('.newRow').remove();
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