/*$(document).ready(function(){
  $('.sidenav').sidenav();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  })
});*/
var elem = document.querySelector('.carousel');
var instance = M.Carousel.init(elem,{
    indicators: true,
    duration: 800,
});

setInterval(()=>{
  console.log(instance.pressed);
  if(!instance.pressed){
    instance.next();
  }
},8000)