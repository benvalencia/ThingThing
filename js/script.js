$(document).ready(function(){
    
    
    setInterval(function(){ 
          
        var slideOne = setTimeout(function (){
             
            $('#review-one').removeClass('hiden' );
            $('#review-two').addClass('hiden' );
            $('#review-three').addClass('hiden');

            $('#span-one').addClass('colorpicker', 300);
            $('#span-two').removeClass('colorpicker');
            $('#span-three').removeClass('colorpicker');
               
        },0);
        var slideTwo = setTimeout(function (){
              
            $('#review-one').addClass('hiden');
            $('#review-two').removeClass('hiden');
            $('#review-three').addClass('hiden');

            $('#span-one').removeClass('colorpicker');
            $('#span-two').addClass('colorpicker', 300);
            $('#span-three').removeClass('colorpicker');
 
        },4000);
        var slideThree = setTimeout(function (){
             
            $('#review-one').addClass('hiden');
            $('#review-two').addClass('hiden');
            $('#review-three').removeClass('hiden');

            $('#span-one').removeClass('colorpicker');
            $('#span-two').removeClass('colorpicker');
            $('#span-three').addClass('colorpicker', 300);
 
        },8000);
            
    }, 12000);
    
    $('#span-one').click(function(){
        $('#review-one').removeClass('hiden' );
        $('#review-two').addClass('hiden' );
        $('#review-three').addClass('hiden');
        
        $('#span-one').addClass('colorpicker', 300);
        $('#span-two').removeClass('colorpicker');
        $('#span-three').removeClass('colorpicker');
        
        console.log( 'Hola');
    });
    $('#span-two').click(function(){
        $('#review-one').addClass('hiden' );
        $('#review-two').removeClass('hiden');
        $('#review-three').addClass('hiden' );
        
        $('#span-one').removeClass('colorpicker');
        $('#span-two').addClass('colorpicker', 300);
        $('#span-three').removeClass('colorpicker');
         
        console.log( 'Hola');
    });
    $('#span-three').click(function(){
        $('#review-one').addClass('hiden');
        $('#review-two').addClass('hiden');
        $('#review-three').removeClass('hiden');
        
        $('#span-one').removeClass('colorpicker');
        $('#span-two').removeClass('colorpicker');
        $('#span-three').addClass('colorpicker', 300);
         
        console.log( 'Hola');
    }); 
 
});
$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});

 