

var Cervezas = function(){

	var ac = 0;

	var b = $("#cervezas .slider .botella");



	$('#slider').slick({
		centerMode: false,
		centerPadding: '0px',
		swipeToSlide:true,
		slidesToShow: 3,
		arrows: false,
		variableWidth:true
	});

	

	this.mostrar = function(){
		actual = "cervezas";
		$("#cervezas").show();
	}

	this.abrir = function(alias){
		//$("#cervezas").hide();
		
		
		interna.mostrar(alias);
	}

}