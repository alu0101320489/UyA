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
  console.log("Exito");
  var filterid = sessionStorage.getItem("IdProducto");
  var data = snapshot.val();

  $(function() {
    $.each(data, function(i, item) {
      if(item.IdProducto == filterid){
        console.log(filterid);
        $(".product-price span").text(item.Precio + '€')
        $(".product-description span").text(item.Etiqueta)
        $(".product-description h1").text(item.Nombre)
        $(".product-description p").text(item.Descripcion)
        $(".left-column img").attr("src", item.Imagen)
      }
    });
  });
}, function (error) {
  console.log("Error: " + error.code);
});


$(document).ready(function () {
  $('#comprar').click(function() {
    var compra = {
      "Descripcion": ""+$(".product-description p").text(),
      "Etiqueta": ""+$(".product-description span").text(),
      "IdProducto": "0",
      "Imagen": ""+$(".left-column img").attr("src"),
      "Nombre": ""+$(".product-description h1").text(),
      "Precio": ""+$(".product-price span").text()
    };
    jsarray = compra;
    sessionStorage.setItem("Carrito", JSON.stringify(jsarray));
  });
});