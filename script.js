

 
document.getElementById("enviar").addEventListener("click",function() {
    let peso = document.getElementById("peso").value;
   
    let altura = document.getElementById("altura").value;
   
    let imc = peso / (altura * altura);

    

    document.getElementById('resultado').innerText = 'O resultado é: ' +imc;
  });