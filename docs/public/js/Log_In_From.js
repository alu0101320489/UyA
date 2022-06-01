// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVlso3BWHWKjmtzq0ANnM4NqCYSvum9iM",
  authDomain: "electronicasl-e1ebc.firebaseapp.com",
  databaseURL: "https://tiendaelectronica-40245-default-rtdb.firebaseio.com",
  projectId: "electronicasl-e1ebc",
  storageBucket: "electronicasl-e1ebc.appspot.com",
  messagingSenderId: "289487752550",
  appId: "1:289487752550:web:8ffb7368e5ec28e607cca7",
  measurementId: "G-2H1XZW47RP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Referencia a la base de datos
var ref = firebase.database().ref("Usuarios");

ref.on("value", function(snapshot) {
  console.log("Exito");
}, function (error) {
  console.log("Error: " + error.code);
});


$( "#Formulario_Log_In" ).submit(function() {
  function validacionTexto()  {
    var valor = $("#name").val();
    if (valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor)) {
      alert('ERROR: El nombre solo puede contener letras.');
      return false;
    }
    var valor = $("#password").val();
    if (valor == null || valor.length < 4) {
      alert('ERROR: Contraseña muy corta');
      return false;
    }
    return true;
  }
  var validate_text = validacionTexto();
  if(validate_text == true) {
    var obj = {
      Nombre: "" + $("#name").val(),
      Contraseña: "" + $("#password").val(),
      Email: "" + $("#email").val()
    };
    // handle read data.
    ref.once('value').then(function(dataSnapshot) {
      ref.child(dataSnapshot.numChildren()).set(obj);
    });
  } else {
    alert("Datos incorrectos");
  }
});

document.getElementById('IniciarSesion').onclick = function() {
  ref.once('value').then(function(dataSnapshot) {
    // handle read data.
    var data = dataSnapshot.val();
    var obj = {
      Nombre: "" + $("#name").val(),
      Contraseña: "" + $("#password").val(),
      Email: "" + $("#email").val()
    };

    $(function() {
      sessionStorage.removeItem("Usuarioensesion");
      $.each(data, function(i, item) {
        if(item.Nombre == obj.Nombre){
          if(item.Email == obj.Email){
            if(item.Contraseña == obj.Contraseña){
              sessionStorage.setItem("Usuarioensesion", item.Nombre);
              window.location.reload();;
            }
          }
        }
      });
      var Usuarioensesion = sessionStorage.getItem("Usuarioensesion");
      if(Usuarioensesion == null){
        alert("ERROR: Usuario incorrecto");
      }
    });
  });
}

var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);