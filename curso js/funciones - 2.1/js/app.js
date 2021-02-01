/*numeroMaximo=function numeroMaximo(valor1,valor2){
   if(valor1>valor2){
      return valor1;
   }
   return valor2;
  

}

document.write('el numero ,mayor es'+numeroMaximo(60,30));
*/

 


window.onload = function () {


   console.log("hola")
   document.getElementById("sumar").addEventListener("click", (e) => suma())

}


function suma() {
   const numero1 = document.getElementById("numero1").value;
   const numero2 = document.getElementById("numero2").value;

   const resultado = parseInt(numero1) + parseInt(numero2);

   alert("La suma es: " + resultado)
}
  





