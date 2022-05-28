// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVlso3BWHWKjmtzq0ANnM4NqCYSvum9iM",
    authDomain: "electronicasl-e1ebc.firebaseapp.com",
    databaseURL: "https://electronicasl-e1ebc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "electronicasl-e1ebc",
    storageBucket: "electronicasl-e1ebc.appspot.com",
    messagingSenderId: "289487752550",
    appId: "1:289487752550:web:8ffb7368e5ec28e607cca7",
    measurementId: "G-2H1XZW47RP"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref("Catalogo");

ref.on("value", function(snapshot) {
    console.log("Exito");
}, function (error) {
   console.log("Error: " + error.code);
});

  $(document).ready(function () {
     var BaseConfig= $.ajax({
       url: 'https://electronicasl-e1ebc-default-rtdb.europe-west1.firebasedatabase.app/Catalogo.json',
       type: "GET",
       data: JSON.stringify(),
       success: function (data) {
  
      $(function() {
          $.each(data, function(i, item) {
              var div = $('<div class= "col s3">').append(
                  $('<td>').text(item.Nombre),
               $('<td>').text(item.Contraseña),
                  $('<td>').text(item.Email)
           );
              $('#catalogo').append($tr);
          });
      });
       },
       error: function(error) {
         alert("error: "+error);
       }
     });
   });


   /*
   <div class= "col s3">
                <a href="#">
                  <div class="card small">
                    <div class="center-align">
                      <div class="container">
                          <img src="../images/bdatos/hp-pavilion-gaming.webp" alt="" class="square responsive-img" style="height: 50%;width: 50%;">
                      </div>
                      <div>
                        <p class="">HP Pavilion Gaming TG01-1107ns Intel Core i7-10700F/16GB/1TB+512GB SSD/RTX 3060Ti</p>
                        <p>$56.99</p>
                      </div>
                    </div>
                  </div>
                </a>
    </div>
   */