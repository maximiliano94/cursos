/*function saludo(){
   document.write('hola como  bienvenido ');
}
saludo();    
 */

 /*function suma ( num1,num2){
    suma= num1+num2;

 }

 suma(2,2);*/



 // otro  ejemplo

/* function suma ( num1,num2){
    var num1=num1;
    var num2=num2;
    return num1+num2;
 }
*/




/*function numeroMaximo(valor1,valor2){
       if(valor1>valor2){
          return valor1;
       }
       return valor2;
      

}
numeroMaximo(10,30);
*/


numeroMaximo=function numeroMaximo(valor1,valor2){
   if(valor1>valor2){
      return valor1;
   }
   return valor2;
  

}

document.write('el numero ,mayor es'+numeroMaximo(60,30));

