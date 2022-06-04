$(document).ready(function () {
  var Usuarioensesion = sessionStorage.getItem("Usuarioensesion");
  if (Usuarioensesion != null){
    $('#Usuarioensesion').text(Usuarioensesion);
    $('#Usuarioensesionsidenav').text(Usuarioensesion);
  }
});

var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);