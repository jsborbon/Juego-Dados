
function cargarDados() {
    listaDado =Array();
    for (let i = 0; i < 6; i++) {
        listaDado[i] = new Image();
        listaDado[i].title = "Dado " + (i + 1);
        listaDado[i].src = "./imgs/dice " + (i + 1)+".png";
    }
    document.getElementsByTagName("section")[0].style.visibility = "hidden";
    document.getElementsByTagName("section")[1].style.visibility = "hidden";
}
function inicializar(){
    cargarDados();
}
function empezarNuevoJuego(){
    document.getElementsByTagName("section")[0].style.visibility = "visible";
    document.getElementsByTagName("section")[1].style.visibility = "visible";

    premio1 = 1;
    premio2 = 1;
    while (premio1==1 || premio2==1 || premio1==premio2){
        if(premio1==1){
            premio1 = parseInt(getRandom());
        }else{
            premio2 = parseInt(getRandom());
        }
    }
    jugadasRestantes = document.getElementsByTagName("input")[0].value;
    document.getElementById("resultado").innerText ="";
    document.getElementById("lanzamiento").innerText ="Tirada: 0";
    document.getElementById("jugadasRestantes").innerText ="Jugadas restantes: "+jugadasRestantes;
    document.getElementById("premio1").innerText ="Primer premio al número : "+premio1;
    document.getElementById("premio2").innerText ="Segundo premio al número : "+premio2;
    contador = 0;
}
function lanzarDados() {
    if (jugadasRestantes > 0) {
        contador++;
        jugadasRestantes--;
        let num1 = parseInt(getRandom());
        let num2 = parseInt(getRandom());

        document.getElementById("dado1").src = listaDado[(num1 - 1)].src;
        document.getElementById("dado1").title = listaDado[(num1 - 1)].title;
        document.getElementById("dado2").src = listaDado[(num2 - 1)].src;
        document.getElementById("dado2").title = listaDado[(num2 - 1)].title;
        document.getElementById("resultado").innerText = "Resultado: " + (num1 + num2);
        document.getElementById("lanzamiento").innerText = "Tirada: " + contador;
        document.getElementById("jugadasRestantes").innerText = "Jugadas restantes: " + jugadasRestantes;
        if((num1+num2) == premio1){
            premio1=0;
            document.getElementById("premio1").innerText ="Primer premio ganado!!";
        }
        if((num1+num2) == premio2){
            premio2=1;
            document.getElementById("premio2").innerText ="Segundo premio ganado!!";
        }
        if(premio1==0 && premio2==1){
            alert("Se han ganado ambos premios!!");
            premio2=0;
        }
    }else{
        alert("Juego Finalizado!");
    }
}
function getRandom() {
    return (Math.random()*6)+1;
}