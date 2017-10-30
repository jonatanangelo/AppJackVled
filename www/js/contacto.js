var Contacto = function(){
	this.mostrar = function(onComplete){
		actual="contacto";
		$("#contacto").css("z-index",1);
		$("#contacto").show();
		//$("#about").transition({x:1024},0);
		//$("#about").transition({x:0},600,'easeOutCirc',onComplete);
	}
}
