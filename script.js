
//What I do animated

$(document).ready(function() {
    
   $('.consulting').waypoint(function(direction) {
       $('.consulting').addClass('animated fadeInLeft');
   }, {
       offset: '40%'
   });
    
    
   $('.metric').waypoint(function(direction) {
       $('.metric').addClass('animated fadeInRight');
   }, {
       offset: '40%'
   });
    
    
});

//Name looping forever & ever

var text = 'Hi, I am Dusan. Nice to meet you!';

var chars = text.split('');
var container = document.getElementById("container");

var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "";
    }
}, 150);


//Tools I use animated fully responsive

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});