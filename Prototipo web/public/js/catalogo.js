    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAVlso3BWHWKjmtzq0ANnM4NqCYSvum9iM",
      authDomain: "electronicasl-e1ebc.firebaseapp.com",
      //databaseURL: "https://electronicasl-e1ebc-default-rtdb.europe-west1.firebasedatabase.app",
      //databaseURL: "https://prueba-firebase-12174-default-rtdb.firebaseio.com",
      //databaseURL: "https://proquenofunciona-default-rtdb.firebaseio.com/",
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
    var ref = firebase.database().ref("Catalogo");

    //NO BORRAR QUE SE MUERE MUY FUERTE EL CODIGO; NI IDEA DE PORQUE
ref.on("value", function(snapshot) {
    console.log("Exito");
    var data = snapshot.val();
    console.log(data[3]);

    $(function() {
      $.each(data, function(i, item) {
          var $div = $('<div class= "col s3" >').append(
              $('<a href="#">').append(
                $('<div class="card small">').append(
                  $('<div class="center-align">').append(
                    $('<div class="container">').append(
                      $('<img src="'+item.Imagen+'" alt="" class="square responsive-img" style="height: 50%;width: 50%;">').append()
                    ),
                    $('<div style="height: 20%;">').append(
                      $('<p>').text(item.Nombre),
                      $('<p>').text('$'+item.Precio)
                    )
                  )
                )
              )
          );
          $('#catalogo').append($div);
      });
    });


    /*
    <div class= "col s3" >
                <a href="#">
                  <div class="card small">
                    <div class="center-align">
                      <div class="container">
                          <img src="../images/bdatos/msi-optix-g24c4.webp" alt="" class="square responsive-img" style="height: 50%;width: 50%;">
                      </div>
                      <div style="height: 20%;">
                        <p class="">MSI Optix G24C4 23.6 LED FullHD 144Hz Freesync Curva</p>
                        <p>$56.99</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
    */




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
     url: 'https://electronicasl-e1ebc-default-rtdb.europe-west1.firebasedatabase.app/Catalogo/1.json',
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

