

/*$(document).ready(function animationLoop(){

    $('.circle1').animate(
        {height: '380px', width: '380px'},
        300,
    );
    $('.circle1').animate({height: '300px', width: '300px'}, 600);

    $('.circle2').animate(
        {height: '280px', width: '280px'},
        350,
    );
    $('.circle2').animate({height: '200px', width: '200px'}, 550);

    $('.circle3').animate(
        {height: '170px', width: '170px', boxShadow: '0px 7px 5px 2px rgba(0,0,0,0.19)'},
        400,
        function(){
            animationLoop()
        }
    );
    $('.circle3').animate({height: '100px', width: '100px', boxShadow: '0px 7px 5px 2px rgba(0,0,0,0.19)'}, 500);

        
});*/

$(document).ready(function animationLoop(){

    $('.circle1').animate(
        {height: '380px', width: '380px', boxShadow: '0px 7px 20px 10px rgba(0,0,0,0.1)'},
        300,
        'swing'
    );
    $('.circle1').animate({height: '300px', width: '300px', boxShadow: '0px 2px 5px 2px rgba(0,0,0,0.30)'}, 600);



    $('.circle2').animate(
        {height: '280px', width: '280px', boxShadow: '0px 7px 20px 10px rgba(0,0,0,0.1)'},
        400,
        'swing'
    );
    $('.circle2').animate({height: '200px', width: '200px', boxShadow: '0px 2px 5px 2px rgba(0,0,0,0.30)'}, 500);



    $('.circle3').animate(
        {height: '150px', width: '150px', boxShadow: '0px 7px 20px 10px rgba(0,0,0,0.1)', fontSize: '22px'},
        650,
        'swing',
        function(){
            animationLoop()
        }
    );
    $('.circle3').animate({height: '100px', width: '100px', boxShadow: '0px 2px 5px 2px rgba(0,0,0,0.30)', fontSize: '14px'}, 250);

   
});


