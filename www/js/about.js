var About = function(){
	this.mostrar = function(onComplete){
		actual="about";
		$("#about").css("z-index",1);
		$("#about").show();
		//$("#about").transition({x:1024},0);
		//$("#about").transition({x:0},600,'easeOutCirc',onComplete);
	}
}
