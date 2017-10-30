var production = false;

var actual="edad";

var menu,
    edad,
    portada,
    about,
    maestro,
    cervezas;

var app = {
    // Application Constructor
    initialize: function() {
        if(production) document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        else $(document).ready(iniciar);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        iniciar();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

app.initialize();


function iniciar(){
   edad = new Edad();
   menu = new Menu();
   portada = new Portada();
   about = new About();
   maestro = new Maestro();
   cervezas = new Cervezas();


   new Boton($("#navbar .btmenu"),function(bt){
        if(bt.hasClass("open")){
            bt.removeClass("open");
            menu.ocultar();
            $("#circulo").transition({ scale: 1},400,'easeOutCubic',function(){
                 //menu.mostrar();
            });
        }else{
            $("#circulo").transition({ scale: 27},800,'easeOutCirc',function(){
                 
            });
            menu.mostrar();
            bt.addClass("open");

        }
   });

    new Boton($("#navbar .logo"),function(bt){
        portada.mostrar();
    })

}


var Boton = function(dom,callback){

   
   
        dom.bind({
            "touchstart":function(){
                $(this).addClass("over");
            },
            "touchend":function(){
                $(this).removeClass("over");
                //callback($(this));
            },
            "click":function(){
                callback($(this));
            }
        });

};

