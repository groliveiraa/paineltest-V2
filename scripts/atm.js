/*
Script da pagina de monitoracao de Atm-Servcom Terminais
Criado por Gustavo Rodrigues
Data: 11-07-2018
*/

/*Le arquivo json a chama metodo para atualizacao dos dados*/
function leJson() {
    $.getJSON('monitservcom.json', function (data) {
        tst = data;
        var display = '';
        for (i = 0; i < data.servcom.length; i++) {


            for (j = 0; j < tst.servcom[i].ambiente.atms.length; j++) {
                display += '<div class="mdl-cell mdl-cell--2-col mdl-shadow--6dp mdl-color--green-800 container4 popupp  ' + tst.servcom[i].ambiente.atms[j].id + '"><p>' + tst.servcom[i].ambiente.atms[j].id + '</p></div>';
            }

            $("#" + data.servcom[i].ambiente.id).html(display);
            display = ' ';
        }
    });
}
leJson();

/*Atualiza semaforos a cada 1min*/
//setInterval(leJson, 6000);

//Search bar
function searchFunction(val) {
    input = document.getElementById('search-expandable2').value;
    $('.' + input).css('border', 'black 7px solid');
}

//forEach e if ternario
$(document).ready(function () {
    $(".popupp").click(function (event) {
        $.getJSON("http://127.0.0.1:5500/monitservcom.json", function (result) {
            var atmsHomolog1;
            var atmsHomolog3;


            atmsHomolog1 = '';
            atmsHomolog3 = '';
            obj.servcom.forEach(
                (servcom) => {
                    servcom.ambiente.atms.forEach(
                        (atms) => { // if ternario 
                            servcom.ambiente.id === 'homolog1' ? atmsHomolog1 += montaComponente(atms.id) : atmsHomolog3 += montaComponente(atms.id);
                        }
                    );

                });

            // montar o componente 
            function montaComponente(val) {
                //var comp = '<div class="mdl-cell mdl-cell--2-col mdl-shadow--6dp mdl-color--green-800 container4 ' + val + '">' + val + '</div><br/>';
                var comp = '<div class="mdl-cell mdl-cell--2-col mdl-shadow--6dp mdl-color--green-800 container4 popupp">' + val + '</div><br/>';
                console.log(comp);
                return comp;
            }
        });
    });
});

$(document).ready(function () {
    $(".popupp").click(function (event) {
        $.getJSON("http://127.0.0.1:5500/monitservcom_homolog1.json", function (result) {
            var codigo = $(event.target).text();
            document.getElementById("popuph1").innerHTML = "";
            for (let index = 0; index < result.ambiente[0].mr[0].cm[1].atm.length; index++) {
                const atm = result.ambiente[0].mr[0].cm[1].atm[index];
                if (atm.id === codigo) {
                    document.getElementById("popuph1").innerHTML = "ATM: " + atm.id + "<br>" + "<br>" + "IP: " + atm.ip + "<br>" + "Status: " + atm.status + "<br>" + "Offering: " + atm.offering + "<br>" + "Switch: " + atm.switch;
                    break;
                }
            }
        });
    });
});

// var homologH1, homologH3;
// $.when(
//     $.getJSON("http://127.0.0.1:5500/monitservcom_homolog1.json", function (testh1) {
//         homologH1 = testh1;
//     }),
//     $.getJSON("http://127.0.0.1:5500/monitservcom_homolog3.json", function (testh3) {
//         homologH3 = testh3;
//     })
// ).then(function () {
//     if (homologH1) {
//         
//     }
//     else {
//         
//     }
//     if (homologH3) {
//         
//     }
//     else {
//         
//     }
// });