// inicializamos el json como una variable para asi no terner que llamarlo mediante una llamada get
let text = '{'+
'"nombre" : "Paco",'+
'"dni" : "9999999P",'+
' "fecha_nacimiento" : 2016,'+
'"num_cuenta" : 5555555,'+
'"active" : true,'+
'"compra" : ['+
    '{'+
        '"nombre" : "ordenador",'+
        '"precio" : 29,'+
        '"descuento" : 5,'+
        '"modo_pago" : "unico"'+
    '},'+
    '{'+
        '"nombre" : "consola",'+
        '"precio" : 100,'+
        '"descuento" : 10,'+
        '"modo_pago" : "plazos"'+
    '},'+
    '{'+
        '"nombre" : "pantalla",'+
        '"precio" : 50,'+
        '"descuento" : 0,'+
        '"modo_pago" : "unico"'+
    '},'+
    '{'+
        '"nombre" : "teclado",'+
        '"precio" : 30,'+
        '"descuento" : 50,'+
        '"modo_pago" : "plazos"'+
    '}'+
    ']'+
'}';
const obj = JSON.parse(text);

 function ejercicio2()
{
    node = document.createTextNode(document.getElementById("text").value);
    document.getElementById("parrafo").appendChild(node);
}
 
 function ejercicio3()
{
    const numerop = document.getElementsByTagName("p").length;
    const numerodiv = document.getElementsByTagName("div").length;
    const numeroli = document.getElementsByTagName("li").length;
    node = document.createTextNode(numerodiv);
    document.getElementById("parrafodiv").appendChild(node);
    node = document.createTextNode(numerop);
    document.getElementById("parrafop").appendChild(node);
    node = document.createTextNode(numeroli);
    document.getElementById("parrafoli").appendChild(node);
}
var suma = 0;
 function ejercicio4()
 {
    
    for (let index = 0; index < obj.compra.length; index++) {
        const element = obj.compra[index];
        suma = suma + (element.precio * element.descuento) / 100;
    }

    node = document.createTextNode("usuario: " + obj.nombre);
    document.getElementById("resultado_compra").appendChild(node);
    for (let index = 0; index < obj.compra.length; index++) {
        const element = obj.compra[index]; 
        node = document.createTextNode( " ,producto: " + element.nombre);
        document.getElementById("resultado_compra").appendChild(node);
        node = document.createTextNode( " ,precio: " + element.precio);
        document.getElementById("resultado_compra").appendChild(node);
        node = document.createTextNode( " ,descuento: " + element.descuento);
        document.getElementById("resultado_compra").appendChild(node);
        node = document.createTextNode( " ,modo de pago: " + element.modo_pago);
        document.getElementById("resultado_compra").appendChild(node);
    }
    node = document.createTextNode(" ,Importe total: " + suma);
    document.getElementById("resultado_compra").appendChild(node);
 }

 function ejercicio5()
 {
    const metodo = document.createTextNode(document.getElementById("metodo_pago").value);
    const d = new Date();
    const dia = d.getDate();;
    if (metodo == "2") {
        dia = dia = (d.getDate() + 10) % 31;
    }
    node = document.createTextNode(suma);
    document.getElementById("v_importe").appendChild(node);
    node = document.createTextNode(dia);
    document.getElementById("fecha").appendChild(node);

 }
 
 