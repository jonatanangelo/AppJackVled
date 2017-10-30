var Edad = function(){
	
	new Boton($("#edad .opciones .bt"),function(bt){
		if(bt.hasClass("no")){
			$("#edad .preg").hide();
			$("#edad .menor").fadeIn(300);
		}else if(bt.hasClass("si")){
			$("#edad").fadeOut(300);
			$("#navbar").show();
			$("#navbar").transition({y:98},0);
			$("#navbar").transition({y:0},400,'easeOutCubic');
			setTimeout(function(){
				portada.mostrar();
			},300);
		}
	})

}