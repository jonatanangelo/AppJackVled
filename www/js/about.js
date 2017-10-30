var About = function(){
	this.mostrar = function(onComplete){
		actual="about";
		$("#about").css("z-index",1);
		$("#about").show();
		//$("#about").transition({x:1024},0);
		//$("#about").transition({x:0},600,'easeOutCirc',onComplete);
	}
	this.parar = function(){
		document.getElementById("video").pause();	
		document.getElementById("video").currentTime = 0;
		$("#about .preview").fadeIn(300);
	}
	new Boton($("#about .preview"),function(bt){
		bt.hide();
		document.getElementById("video").play();
	});

	document.getElementById('video').addEventListener('ended',function(){
		about.parar();
		//alert(1);

	},false);
}
