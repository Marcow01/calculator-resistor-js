var primeiraFaixa = document.getElementById("primeiraFaixa");
var segundaFaixa = document.getElementById("segundaFaixa");
var terceiraFaixa = document.getElementById("terceiraFaixa");
var multiplicadorFaixa = document.getElementById("multiplicadorFaixa");
var toleranciaFaixa = document.getElementById("toleranciaFaixa");
var tela = document.getElementById("tela");
var toleranciaTela = document.getElementById("toleranciaTela");
var seletor = document.getElementById("seletor");

function atualizar(){
  draw();
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    var corPrimeiraFaixa  = "#e1e5f2";
    var corSegundaFaixa  = "#e1e5f2";
    var corTerceiraFaixa  = "#e1e5f2";
    var corMultiplicador = "#e1e5f2";
    var corTolerancia  = "#e1e5f2";

    if (primeiraFaixa.value == 0){
      corPrimeiraFaixa = "#000814"
    }

    if (primeiraFaixa.value == 1){
      corPrimeiraFaixa = "#99582a"
    }

    if (primeiraFaixa.value == 2){
      corPrimeiraFaixa = "#d90429"
    }

    if (primeiraFaixa.value == 3){
      corPrimeiraFaixa = "#ca6702"
    }

    if (primeiraFaixa.value == 4){
      corPrimeiraFaixa = "#fcbf49"
    }

    if (primeiraFaixa.value == 5){
      corPrimeiraFaixa = "#90be6d"
    }

    if (primeiraFaixa.value == 6){
      corPrimeiraFaixa = "#22577a"
    }

    if (primeiraFaixa.value == 7){
      corPrimeiraFaixa = "#7209b7"
    }
    
    if (primeiraFaixa.value == 8){
      corPrimeiraFaixa = "#d9d9d9"
    }

    if (primeiraFaixa.value == 9){
      corPrimeiraFaixa = "#ffffff"
    }

//

    if (segundaFaixa.value == 0){
      corSegundaFaixa = "#000814"
    }

    if (segundaFaixa.value == 1){
      corSegundaFaixa = "#99582a"
    }

    if (segundaFaixa.value == 2){
      corSegundaFaixa = "#d90429"
    }

    if (segundaFaixa.value == 3){
      corSegundaFaixa = "#ca6702"
    }

    if (segundaFaixa.value == 4){
      corSegundaFaixa = "#fcbf49"
    }

    if (segundaFaixa.value == 5){
      corSegundaFaixa = "#90be6d"
    }

    if (segundaFaixa.value == 6){
      corSegundaFaixa = "#22577a"
    }

    if (segundaFaixa.value == 7){
      corSegundaFaixa = "#7209b7"
    }
    
    if (segundaFaixa.value == 8){
      corSegundaFaixa = "#d9d9d9"
    }

    if (segundaFaixa.value == 9){
      corSegundaFaixa = "#ffffff"
    }

    //

    
    if (terceiraFaixa.value == 0){
      corTerceiraFaixa = "#000814"
    }

    if (terceiraFaixa.value == 1){
      corTerceiraFaixa = "#99582a"
    }

    if (terceiraFaixa.value == 2){
      corTerceiraFaixa = "#d90429"
    }

    if (terceiraFaixa.value == 3){
      corTerceiraFaixa = "#ca6702"
    }

    if (terceiraFaixa.value == 4){
      corTerceiraFaixa = "#fcbf49"
    }

    if (terceiraFaixa.value == 5){
      corTerceiraFaixa = "#90be6d"
    }

    if (terceiraFaixa.value == 6){
      corTerceiraFaixa = "#22577a"
    }

    if (terceiraFaixa.value == 7){
      corTerceiraFaixa = "#7209b7"
    }
    
    if (terceiraFaixa.value == 8){
      corTerceiraFaixa = "#d9d9d9"
    }

    if (terceiraFaixa.value == 9){
      corTerceiraFaixa = "#ffffff"
    }

    //

    if (multiplicadorFaixa.value == 1){
      corMultiplicador = "#000814"
    }

    if (multiplicadorFaixa.value == 10){
      corMultiplicador = "#99582a"
    }

    if (multiplicadorFaixa.value == 100){
      corMultiplicador = "#d90429"
    }

    if (multiplicadorFaixa.value == 1000){
      corMultiplicador = "#ca6702"
    }

    if (multiplicadorFaixa.value == 10000){
      corMultiplicador = "#fcbf49"
    }

    if (multiplicadorFaixa.value == 100000){
      corMultiplicador = "#90be6d"
    }

    if (multiplicadorFaixa.value == 1000000){
      corMultiplicador = "#22577a"
    }

    if (multiplicadorFaixa.value == 10000000){
      corMultiplicador = "#7209b7"
    }
    
    if (multiplicadorFaixa.value == (-10)){
      corMultiplicador = "#D4AF37"
    }

    if (multiplicadorFaixa.value == (-100)){
      corMultiplicador = "#C0C0C0"
    }

    //

    if(toleranciaFaixa.value == "±1%"){
      corTolerancia = "#99582a" //marrom
    }

    if(toleranciaFaixa.value == "±2%"){ //vermelho
      corTolerancia = "#d90429"
    }

    if(toleranciaFaixa.value == "±5%"){ //ouro
      corTolerancia = "#D4AF37"
    }

    if(toleranciaFaixa.value == "±10%"){ //prata
      corTolerancia = "#C0C0C0"
    }

    if(toleranciaFaixa.value == "±20%"){ //ausencia
      corTolerancia = "#99582a"
    }

    var resultado = (parseInt(primeiraFaixa.value + segundaFaixa.value + terceiraFaixa.value)*(multiplicadorFaixa.value));
    tela.innerText = resultado;
    toleranciaTela.innerText = toleranciaFaixa.value;

    if(seletor.value == 1){
      terceiraFaixa.style.display = 'inline';

      corTerceiraFaixa = corTerceiraFaixa;
      
    }

    if(seletor.value == 2){
      terceiraFaixa.style.display = 'none';
      
      corTerceiraFaixa = '#e1e5f2';
    }
    
  ctx.beginPath();
  ctx.fillStyle = '#e1e5f2';
  ctx.roundRect(10, 25, 175, 175, [10]);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#e1e5f2';
  ctx.roundRect(180, 40, 300, 140, [10]);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#e1e5f2';
  ctx.roundRect(450, 25, 175, 175, [10]);
  ctx.fill();

    //primeira faixa
    ctx.fillStyle = corPrimeiraFaixa;
    ctx.fillRect(87, 25, 25, 175);

    //segunda faixa
    ctx.fillStyle = corSegundaFaixa;
    ctx.fillRect(210, 40, 25, 140);

    //terceira faixa
    ctx.fillStyle = corTerceiraFaixa;
    ctx.fillRect(260, 40, 25, 140);

    //multiplicador
    ctx.fillStyle = corMultiplicador;
    ctx.fillRect(400, 40, 25, 140);

    //tolerância
    ctx.fillStyle = corTolerancia;
    ctx.fillRect(525, 25, 25, 175);
  }
}