$(document).ready(function(){
	

	//ex 1

	$('.ex1-submit').on('click', function(){
		var input = $('.ex1-input').val(),
			rows = 0,
			pyramid = false;

		if(isNaN(input) || input == '') {
			alert('Please, insert a correct value (integer number)');
		}
		else {
			input = parseInt(input);
			while(input-rows >= 0) {
				rows++;
				input = input-rows;
			}


			console.log(input + ',' + rows);
		}
	});



	//ex 1

	$('.ex2-submit').on('click', function(){
		console.log('ciao');
	});



	//ex 1

	$('.ex3-submit').on('click', function(){
		console.log('ciao');
	});




});