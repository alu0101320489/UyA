$(document).ready(function () {
  var Usuarioensesion = sessionStorage.getItem("Usuarioensesion");
  if (Usuarioensesion != null){
    $('#Usuarioensesion').text(Usuarioensesion);
    $('#Usuarioensesion').attr('aria-label', "Sesion iniciada como " + Usuarioensesion);
    $('#Usuarioensesionsidenav').text(Usuarioensesion);
    $('#Usuarioensesionsidenav').attr('aria-label', "Sesion iniciada como " + Usuarioensesion);
  }
});

var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);