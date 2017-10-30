var Menu = function(){

	new Boton($("#menu .item"),function(bt){
		$("#menu").css("background-color","rgba(0,0,0,1)");
	})

	this.mostrar = function(){
		
		$("#menu").fadeIn(400);
		
	}
	this.ocultar = function(){
		$("#menu").fadeOut(200);
	}
}