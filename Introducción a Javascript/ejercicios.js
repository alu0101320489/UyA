function ejercicio1()
{ 
    const header = document.createElement("h1");
     node = document.createTextNode("Introducción al árbol DOM");
    header.appendChild(node);

    const element = document.getElementById("div_ejer1");
    element.appendChild(header);

    const parrafo1 = document.createElement("p");
     node = document.createTextNode("El DOM es una interfaz de objeto de un documento HTML, representa de forma estructurada el documento y proporciona interfaces para su manipulación");
    parrafo1.appendChild(node);


    element.appendChild(parrafo1);

    const parrafo2 = document.createElement("p");
     node = document.createTextNode("Puedes consultar información en la ");
    parrafo2.appendChild(node);

    const enlace = document.createElement("a");
    enlace.id = "enlace_Mozilla";
    node = document.createTextNode("Documentación de Mozilla");
    enlace.appendChild(node);
    parrafo2.appendChild(enlace);
 
    element.appendChild(parrafo2);
    document.getElementById("enlace_Mozilla").href = "https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n";

    const parrafo3 = document.createElement("p");
     node = document.createTextNode("Algunos tipos de datos:");
    parrafo3.appendChild(node);


    element.appendChild(parrafo3);

    const lista = document.createElement("ul");
    const elemto_lista = document.createElement("li");
    const elemto_lista2 = document.createElement("li");
    const elemto_lista3 = document.createElement("li");
     node = document.createTextNode("document");
    elemto_lista.appendChild(node);
    lista.appendChild(elemto_lista);
    node = document.createTextNode("element");
    elemto_lista2.appendChild(node);
    lista.appendChild(elemto_lista2);
    node = document.createTextNode("attribute");
    elemto_lista3.appendChild(node);
    lista.appendChild(elemto_lista3);

    element.appendChild(lista);
}
 
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

 function ejercicio4()
 {

 }

 function ejercicio5()
 {
    const importe = "15";
    const metodo = document.createTextNode(document.getElementById("metodo_pago").value);
    const d = new Date();
    const dia = d.getDate();;
    if (metodo == "2") {
        dia = dia = (d.getDate() + 10) % 31;
    }
    node = document.createTextNode(importe);
    document.getElementById("v_importe").appendChild(node);
    node = document.createTextNode(dia);
    document.getElementById("fecha").appendChild(node);

 }


 function ejercicio6()
 {

 }

 function ejercicio7()
 {

 }
 
 function ejercicio8()
 {
   	 
 }
 
 function ejercicio9()
 {

 }
 
function ejercicio10()
 {

 }
 
 
 
 
 
 
 