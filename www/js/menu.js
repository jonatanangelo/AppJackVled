var Menu = function(){

	new Boton($("#menu .item"),function(bt){
		$("#menu").css("background-color","rgba(0,0,0,1)");
		setTimeout(function(){
			$(".seccion").hide();
			if(bt.hasClass("about")){
				about.mostrar();
			}
			if(bt.hasClass("cervezas")){
				cervezas.mostrar();
			}
			if(bt.hasClass("maestro")){
				maestro.mostrar();
			}
			if(bt.hasClass("contacto")){
				contacto.mostrar();
			}
			$("#portada").hide();
			$("#menu").transition({y:768,delay:300},500,function(){
				$("#menu").hide();
				$("#menu").css("background-color","rgba(0,0,0,0.9)");
			});
			$("#navbar .btmenu").removeClass("open");
		},300);
		
	})

	this.mostrar = function(){
		$("#menu").transition({y:768},0);
		$("#menu").show();
		$("#menu").transition({y:0},500,function(){
			$("#menu").css("background-color","rgba(0,0,0,0.9)");
		})
		
	}
	this.ocultar = function(){
		$("#menu").transition({y:768,delay:0},500,function(){
			$("#menu").hide();
		});
	}
}