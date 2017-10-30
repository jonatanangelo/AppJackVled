

var Cervezas = function(){

	var ac = 0;

	var b = $("#cervezas .slider .botella");

	b.eq(0).css("z-index",20);
	b.eq(1).css("z-index",10);
	b.eq(3).css("z-index",10);

	b.eq(3).transition({x:-290,scale:0.9},0);
	b.eq(1).transition({x:290,scale:0.9},0);

	$("#cervezas .slider").on("swipeleft",function(){
		b.eq(ac).transition({x:-290,scale:0.9},300);
		var sig = ac+1;
		if(sig==4) sig=0;
		//console.log("principal"+sig);
		b.eq(sig).transition({x:0,scale:1},300);
		var ant = ac-1;
		if(ant==-1) ant=3;
		//console.log("se va"+ant);
		b.eq(ant).transition({opacity:0},300);
		var nuevo = ac+2;
		if(nuevo==4) nuevo=0;
		if(nuevo==5) nuevo=1;
		//console.log("derecha"+nuevo);
		b.eq(nuevo).transition({x:290,scale:0.9},0);
		b.eq(nuevo).transition({opacity:1},600);

		
		ac++;

		if(ac==4) ac=0;


		//console.log(ac);

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