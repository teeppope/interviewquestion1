$(document).ready( function(){
	console.log('hey, im running');
	$('input[type="submit"]').on('click', function(){
		event.preventDefault();
		console.log('Im a number');
	}); //on click brackets

}); //Ready Brackets