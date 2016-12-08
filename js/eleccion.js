$(".elegir").on("click",function (){
	
	var opcion = $(this).attr("id");
	console.log(opcion);
	var valor2 = mostrar(opcion);
	var valor=aleatorio();
	ganar(valor2,valor);


	

});


var mostrar = function(a){
	switch(a){
	case "piedra": $("#eleccion").html("<img src=piedra.png></img> ");
	
	break;
	case "tijera": $("#eleccion").html("<img src=tijera.png></img> ");
	
	break;
	case "papel": $("#eleccion").html("<img src=papel.png></img> ");
	
	break;

	};
	return a;
};


var aleatorio = function(){

var numero = Math.floor((Math.random() * 10) + 1);
if(numero>6.6){
	$("#random").html("<img src=piedra.png></img> ");
	var mano = "piedra";
}
else{
	if(numero<3.3){
	$("#random").html("<img src=papel.png></img> ");
	var mano = "papel";
	}
	else{
	$("#random").html("<img src=tijera.png></img> ");	
	var mano = "tijera";
	}
}
return mano;

}

var ganar = function(b,c){
	
	if(b==c){
		$("h2").text("Empataste!, intenta de nuevo!");
	}
		else{
		if((b=="piedra"&&c=="tijera")||(b=="tijera"&&c=="papel")||(b=="papel"&&c=="piedra")) {
			$("h2").text("FELICITACIONES, GANASTE! Dame la revancha!");
		}
		else{
			$("h2").text("Perdiste!! MUAJAJA!!, Intenta de nuevo!");
		}
	}

}
