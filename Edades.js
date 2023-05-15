// Onda funcional
// Edad de Jisoo
$(document).ready(function(){
  var nacimiento=moment("1995-01-03");
  var hoy=moment();
  var edad=hoy.diff(nacimiento,"years");
  $("#edadJisoo").text(edad);
});
 
//Edad de Jennie
$(document).ready(function () {
  var nacimiento = moment("1996-01-16");
  var hoy = moment();
  var edad = hoy.diff(nacimiento, "years");
  $("#edadJennie").text(edad);
});

//Edad de Rose
$(document).ready(function () {
  var nacimiento = moment("1996-01-16");
  var hoy = moment();
  var edad = hoy.diff(nacimiento, "years");
  $("#edadRose").text(edad);
});

//Edad de Lisa
$(document).ready(function () {
  var nacimiento = moment("1997-03-27");
  var hoy = moment();
  var edad = hoy.diff(nacimiento, "years");
  $("#edadLisa").text(edad);
});  

