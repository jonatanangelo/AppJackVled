var Portada = function(){
	this.flag = true;
	new Boton($("#portada .item"),function(bt){
		if(portada.flag){
			if(bt.hasClass("about")){
				about.mostrar(function(){
					//$("#portada").hide();
				});
				
				portada.ocultar();
			}else if(bt.hasClass("cervezas")){
				cervezas.mostrar();
				portada.ocultar();
			}else if(bt.hasClass("maestro")){
				maestro.mostrar(function(){
					
				});
				portada.ocultar();
			}
		}
	})

	this.mostrar = function(){
		if(portada.flag==true && $("#portada").css("display")=="none" && $("#menu").css("display")=="none"){
			actual="portada";
			portada.flag = false;
			$("#portada").show();
			$("#portada .about").transition({y:-670},0);
			$("#portada .cervezas").transition({y:-670},0);
			$("#portada .maestro").transition({y:-670},0);
			$("#portada .about").transition({y:0},600,'easeOutBack');
			$("#portada .cervezas").transition({y:0,delay:200},600,'easeOutBack');
			$("#portada .maestro").transition({y:0,delay:400},600,'easeOutBack',function(){
				portada.flag = true;
				$(".seccion").hide();
			});
		}
	}
	this.ocultar = function(){
		portada.flag = false;
		$("#portada .about").transition({y:-670,delay:400},600,'easeInBack',function(){
			$("#portada").hide();
			portada.flag=true;
		});
		$("#portada .cervezas").transition({y:-670,delay:200},600,'easeInBack');
		$("#portada .maestro").transition({y:-670,delay:0},600,'easeInBack');
	}
}