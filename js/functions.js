$(document).ready(function(){

	console.log("tengo yeikueri!");

   $("#nosotros").click(function(){
      console.log("nosotros");

      $("html, body").animate({ scrollTop: $("#franjaazul").offset().top }, {marginTop: "75px"}, {paddingTop: "75px"}, 600 );
   });

/*
   $("#ventajas").click(function(){
      $("html, body").animate({ scrollTop: $("#franjaazul").offset().bottom }, {marginTop: "260px"}, 600);
   });
*/

   $("#contacto").click(function(){
      console.log("contactos");
      
      $("html, body").animate({ scrollTop: $("#franjacontact").offset().top }, {marginTop: "75px"}, {paddingTop: "75px"},  600);
   });



   /*
   $("#MyList li:nth-child(2)").click(function(){
      $("html, body").animate({ scrollTop: 300 }, 600);
   });
   $("#MyList li:nth-child(3)").click(function(){
      $("html, body").animate({ scrollTop: 500 }, 600);
   });
   $("#MyList li:nth-child(4)").click(function(){
      $("html, body").animate({ scrollTop: 900 }, 600);
   });
   */
});