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
      var filterid = sessionStorage.getItem("IdProducto");
      var data = snapshot.val();
      //console.log(data[3]);
  
      $(function() {
        $.each(data, function(i, item) {
            if(item.IdProducto == filterid){
                console.log(filterid);
                //console.log(item);
                $(".product-price span").text("$"+item.Precio)
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
    var favoritemovie = sessionStorage.getItem("favoriteMovie");
    //console.log(favoritemovie);

});