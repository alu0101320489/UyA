// SHOPPING CART PLUS OR MINUS
$('a.qty-minus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);

  $(".col-price p").text(item.Precio);
  var string = item.Precio
  string = string.replace("€", "");
  $(".col-total p").text( string *  $(document).find('input').val() + 2.95);
});

$('a.qty-plus').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value =100;
  }

  $input.val(value);

  $(".col-price p").text(item.Precio);
  var string = item.Precio
  string = string.replace("€", "");
  $(".col-total p").text( string *  $(document).find('input').val() + 2.95 + '€');
});

// RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
$('input').on('blur', function(){
  var input = $(this);
  var value = parseInt($(this).val());

  if (value < 0 || isNaN(value)) {
    input.val(0);
  } else if (value > 100) {
    input.val(100);
  }
});

$(document).ready(function () {
  item = JSON.parse(sessionStorage.getItem("Carrito"));
  $(".col-pro img").attr("src", item.Imagen);
  $(".col-pro p").text(item.Nombre);
  $(".col-price p").text(item.Precio);
  var string = item.Precio
  string = string.replace("€", "");
  $(".col-total p").text( string * $(document).find('input').val() + 2.95 + '€');
});