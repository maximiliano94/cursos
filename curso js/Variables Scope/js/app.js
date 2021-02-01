  
// globales = puedes acceder a ellas  desde cualquer parte del codigo 
//locales = se pueden crear dentro de una funcion, solo se acecede desde su funcion o
// funcion anidada
 
// ejemplo de variable globales
 //var variableGlobal='esta es una variable globlal'
 //alert(variableGlobal);
 /*var mifuncion=function(){
    var variableGlobal='esta es local';
   variableGlobal='esta es variableGlobalMooficada';
    alert(variableGlobal);
   
 }*/

//mifuncion()
//alert(variableGlobal);


// ejemplo de scope variable local
/*var mifuncion=function(){
  var variablelocal='esta es local';
  //variableGlobal='esta es variableGlobalMooficada';
   //alert(variablelocal);

   var funcionLocal=function(){
      var variableLocal='esta es una variable local dentro de una funcion local';
      alert(variableLocal);
   }
   funcionLocal();
}
mifuncion();*/

// nota cuando se remueve la palabra reservada var a la variable 
// pasa ha hacer una variable global ,pero no es recomendable realizarlo


// como ? para que ?
// crear una funcion auto invocada 
/*es para que codigo  este afuera no pueda acceder al codigo que este
adentro (nuestro codigo) sin embargo nuestro codigo  puede acceder
a lo que este afuera de el  */

(function(){
   var mifuncion=function(){
      var variablelocal='esta es local';
      //variableGlobal='esta es variableGlobalMooficada';
       //alert(variablelocal);
    
       var funcionLocal=function(){
          var variableLocal='esta es una variable local dentro de una funcion local';
          alert(variableLocal);
       }
       funcionLocal();
    }
    mifuncion();
}())








