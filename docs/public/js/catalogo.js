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
var ref = firebase.database().ref("Catalogo");

ref.on("value", function(snapshot) {
  var data = snapshot.val();

  $(function() {
    $.each(data, function(i, item) {
      var $div = $('<div id="' + item.Nombre + '"class= "col s3">').append(
        $('<a id="' + item.IdProducto + '" class="producto" href="Producto.html">').append(
          $('<div class="card small">').append(
            $('<div class="center-align">').append(
              $('<div class="container">').append(
                $('<img src="' + item.Imagen + '" alt="' + item.Nombre + '" class="square responsive-img img_catalogo">').append()
              ),
              $('<div class="texto_catalogo">').append(
                $('<p>').text(item.Nombre),
                $('<p>').text(item.Precio + '€')
              )
            )
          )
        )
      );
      $(document).on('click','#'+ item.IdProducto,function() {
        var IdProducto = $(this).attr('id');
        sessionStorage.setItem("IdProducto", IdProducto);
      });
      $('#catalogo').append($div);
    });
  });
}, function (error) {
  console.log("Error: " + error.code);
});

$("#Filtro").click(function () {
  var BaseConfig = $.ajax({
    url: 'https://tiendaelectronica-40245-default-rtdb.firebaseio.com/Catalogo.json',
    type: "GET",
    data: JSON.stringify(),
    success: function (data) {
      $(function() {
        var prod = [];
        let checkboxes = document.querySelectorAll('input[name="filtro"]:checked');
        $.each(data, function(i, item) {
          checkboxes.forEach((checkbox) => {
            if(checkbox.value == "on") {
              if(item.Etiqueta == checkbox.id) {
                prod.push(item.IdProducto);
              }
            };
          });
        });
        var find = false;
        $.each(data, function(i, item) {
          $.each(prod, function(j, p) {
            if(p == item.IdProducto) {
              find = true;
              return false;
            }
          });
          if (!find) {
            document.getElementById(item.Nombre).style.display = "none";
          } else {
            document.getElementById(item.Nombre).style.display = "block";
          }
          find = false;
        });
      });
    },
    error: function(error) {
      alert("error: " + error);
    }
  });
});
