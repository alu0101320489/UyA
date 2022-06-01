$(document).ready(function () {
  var Usuarioensesion = sessionStorage.getItem("Usuarioensesion");
  if (Usuarioensesion != null){
    $('#Usuarioensesion').text(Usuarioensesion);
  }
});