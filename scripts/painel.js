/*Muda o status do card*/
function changeStatus(componente, response){
	if(response){	
        $(componente).removeClass("mdl-color--light-green-A700");
		$(componente).addClass("mdl-color--red-500 mdl-color-text--red-50");
	}else{
		$(componente).addClass("mdl-color--light-green-A700");
		$(componente).removeClass("mdl-color--red-500 mdl-color-text--red-50");
	}
}

/*Atualiza o status dos cards*/
function atualizaCards(){
	$.getJSON('mq.json', function(data){
        changeStatus('.card',false);
		for(i=0; i < data.length; i++){
            for(j=0; j < data[i].problemas.length; j++){
                var erro = data[i].problemas[j].erro;
                console.log(erro);
                if (erro.search("ATMWEB") > -1 ){
                    changeStatus(".seguranca",true);
                }
                if(erro.search("9201") > -1){
                    changeStatus(".integrado2",true);
                }
                if(erro.search("9204") > -1){
                    changeStatus(".integrado",true);
                }
                if(erro.search("SIMUISO") > -1){
                    changeStatus(".sistemico",true);
                }
            }
		}
	});
}

function atualizaJboss(){
	$.getJSON('jboss.json', function(data){
		for(i=0; i < data.length; i++){
            var server = "#" + data[i].servidor;
            $(server + ' .card-image').removeClass("off"); /*Remove o estilo 'off' de todos os cards*/
            for(j=0; j < data[i].problemas.length; j++){
                var jboss = " ." + data[i].problemas[j].jboss;
                $(server+jboss).addClass("off");
            }
		}
	});
}

function atualizaApache(){
    
	$.getJSON('apache.json', function(data){
        $(".apache").removeClass("off");/*Remove o estilo 'off' de todos os cards*/
        if ( data[0].problemas.length > 0){
            $(".apache").addClass("off");
        }
    });
}

function atualizaBroker(){
	$.getJSON('broker.json', function(data){
		for(i=0; i < data.length; i++){
            var broker = "#" + data[i].broker;
            $(broker).removeClass("mdl-color--red-900 mdl-color-text--red-50");/*Remove o estilo de todos os cards*/
            if (!data[i].ping[0].status){
                $(broker).addClass("mdl-color--red-900 mdl-color-text--red-50");
            }
        }
	});
}

function atualizaVertx(){
	$.getJSON('vertx.json', function(data){
		for(i=0; i < data.length; i++){
            $(".vertx").removeClass("off");
            if (!data[i].ping[0].status){
                $(".vertx").addClass("off");
            }
        }
	});
}

atualizaCards();
atualizaJboss();
atualizaApache();
atualizaBroker();
atualizaVertx();

/*Atualiza a cada 1 minuto*/
setInterval(atualizaCards, 60000);
setInterval(atualizaApache, 60000);
setInterval(atualizaJboss, 60000);
setInterval(atualizaBroker, 60000);
setInterval(atualizaVertx, 60000);