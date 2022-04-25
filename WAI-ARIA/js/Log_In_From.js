    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDx61lwIcj8jUGsj54t4OSlkkpgwPnB4Rg",
      authDomain: "prueba-firebase-12174.firebaseapp.com",
      databaseURL: "https://prueba-firebase-12174-default-rtdb.firebaseio.com",
      projectId: "prueba-firebase-12174",
      storageBucket: "prueba-firebase-12174.appspot.com",
      messagingSenderId: "803628052296",
      appId: "1:803628052296:web:52f17f4fc306b257268d7d",
      measurementId: "G-Z36FCD8NLQ"
    };
  

     // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Referencia a la base de datos
    var ref = firebase.database().ref("Usuarios");

    //NO BORRAR QUE SE MUERE MUY FUERTE EL CODIGO; NI IDEA DE PORQUE
ref.on("value", function(snapshot) {
    console.log("Exito");
}, function (error) {
   console.log("Error: " + error.code);
});


$( "#Formulario_Log_In" ).submit(function() {

    function validacionTexto()  {
        var valor = $("#name").val();
        if( valor == null || valor.length == 0 || !/^[A-Z]+$/i.test(valor) ) {
          alert('ERROR: El nombre solo puede contener letras.');
          return false;
        }
        var valor = $("#password").val();
        if( valor == null || valor.length < 4  ) {
          alert('ERROR: Contraseña muy corta');
          return false;
        }
        return true;
      }
      var validate_text = validacionTexto();

      if(validate_text == true){
        var obj ={
            Nombre: "" + $("#name").val(),
            Contraseña: "" + $("#password").val(),
            Email: "" + $("#email").val()
        };
    
        ref.once('value')
            .then(function(dataSnapshot) {
                // handle read data.
                ref.child(dataSnapshot.numChildren()).set(obj);
        });
      } else {
          alert("Datos incorrectos");
      }







  });

$(document).ready(function () {
   var BaseConfig= $.ajax({
     url: 'https://prueba-firebase-12174-default-rtdb.firebaseio.com/Usuarios.json',
     type: "GET",
     data: JSON.stringify(),
     success: function (data) {

    $(function() {
        $.each(data, function(i, item) {
            var $tr = $('<tr>').append(
                $('<td>').text(item.Nombre),
             $('<td>').text(item.Contraseña),
                $('<td>').text(item.Email)
         );
            $('#Tabla_Users').append($tr);
        });
    });
     },
     error: function(error) {
       alert("error: "+error);
     }
   });
 });

