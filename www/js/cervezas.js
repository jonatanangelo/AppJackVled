

var Cervezas = function(){

	this.lista = ["jackvled","gomes","kantor","ooul"];
	this.ac = 1;



	$("#cervezas .slider").on("swipeleft",function(){
		cervezas.ac++;
		if(cervezas.ac==5) cervezas.ac=1;

		var nuevo = cervezas.ac+1;
		if(nuevo==5) nuevo = 1;



		$("#cervezas .slider .botella.izq").transition({opacity:0},300);
		$("#cervezas .slider .botella.cen").removeClass("cen").addClass("izq");
		$("#cervezas .slider .botella.der").removeClass("der").addClass("cen");

		var divnuevo = $('<div class="botella der" style="opacity:0;background-image: url(img/cervezas/'+cervezas.lista[nuevo-1]+'/cerveza.png)"></div>');
		$("#cervezas .slider").append(divnuevo);
		divnuevo.animate({opacity:1},200);

	});

	$("#cervezas .slider").on("swiperight",function(){
		cervezas.ac--;
		if(cervezas.ac==0) cervezas.ac=4;

		var nuevo = cervezas.ac-1;
		if(nuevo==0) nuevo = 4;



		$("#cervezas .slider .botella.der").transition({opacity:0},300);
		$("#cervezas .slider .botella.cen").removeClass("cen").addClass("der");
		$("#cervezas .slider .botella.izq").removeClass("izq").addClass("cen");

		var divnuevo = $('<div class="botella izq" style="opacity:0;background-image: url(img/cervezas/'+cervezas.lista[nuevo-1]+'/cerveza.png)"></div>');
		$("#cervezas .slider").append(divnuevo);
		divnuevo.animate({opacity:1},200);

	});


	this.mostrar = function(){
		actual = "cervezas";
		$("#cervezas").show();
	}

}