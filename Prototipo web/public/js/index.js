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
    let counter = 0;
    $.each(data, function(i, item) {
      var iamgen  = item.Imagen
      var imagenmod = iamgen.replace("../", "")
      var $div = $('<div id="' + item.Nombre + '"class= "col s3">').append(
        $('<a id="' + item.IdProducto + '" class="producto" href="pages/Producto.html">').append(
          $('<div class="card small">').append(
            $('<div class="center-align">').append(
              $('<div class="container">').append(
                $('<img src="' + imagenmod + '" alt="' + item.Nombre + '" class="square responsive-img" style="height: 50%;width: 50%;">').append()
              ),
              $('<div style="height: 20%;">').append(
                $('<p>').text(item.Nombre),
                $('<p>').text('$' + item.Precio)
              )
            )
          )
        )
      );
      $(document).on('click','#' + item.IdProducto,function(){
        var IdProducto = $(this).attr('id');
        sessionStorage.setItem("IdProducto", IdProducto);
      });
      $('#index').append($div);
      if (counter != 3) {
        counter++
      } else {
        return false;
      }
    });
  });
}, function (error) {
   console.log("Error: " + error.code);
});

var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);

$(document).ready(function () {
  //$('.sidenav').sidenav();
});