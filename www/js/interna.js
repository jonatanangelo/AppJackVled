var Interna = function(){

	this.mostrar = function(alias){
		$("#interna").load("cerveza_"+alias+".html",function(){
			interna.iniciar();
		});

		$("#interna").transition({y:768},0);
		$("#interna").show();
		$("#interna").transition({y:0},400,'easeOutQuart',function(){
			$("#cervezas").hide();
		});


	};

	this.iniciar = function(){

		new Boton($("#interna .menu .item"),function(bt){
			$("#interna .menu .item").removeClass('ac');
			$("#interna .area .sub").hide();
			bt.addClass('ac');
			if(bt.hasClass("dato")){
				$("#interna .area").removeClass("hidebg");
				$("#interna .area").addClass('dato');
				
				$("#dato").fadeIn(300);

			}else{
				$("#interna .area").addClass("hidebg");
			}
			if(bt.hasClass("probar")){
				$("#probar").fadeIn(300);
			}
			if(bt.hasClass("botella")){
				$("#botella").fadeIn(300);
			}
			if(bt.hasClass("maridaje")){
				$("#maridaje").fadeIn(300);
			}
		});

		new Boton($("#botella .tour .lista .item .num"),function(bt){
			var num = bt.html();

			$("#botella .popup").fadeIn(300);
			$("#botella .popup .punto").hide();
			$("#botella .popup .punto").eq(num-1).show();
		});

		new Boton($("#botella .popup .cerrar"),function(bt){
			$("#botella .popup").hide();
		});

	}

}