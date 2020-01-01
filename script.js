/* ANIMATION */

$(document).ready(function() {
    
    
   
   $('.consulting').waypoint(function(direction) {
       $('.consulting').addClass('animated fadeInLeft');
   }, {
       offset: '50%'
   });
    
    
   $('.metrics').waypoint(function(direction) {
       $('.metrics').addClass('animated fadeInRight');
   }, {
       offset: '50%'
   });
    
    
       $('.profile').waypoint(function(direction) {
       $('.profile').addClass('animated pulse');
   }, {
       offset: '80%'
   });
    

});