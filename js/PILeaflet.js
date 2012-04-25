/**
 * @author walalatamac
 */

$( '#leaflet' ).live( 'pageinit',function(event){	

	$(window).scroll(function () {

		if(	!$("h3#block1").hasClass("ui-collapsible-heading-collapsed") &&

			$(window).scrollTop() > $("h3#block1").parent().position().top &&
			$(window).scrollTop() < $("h3#block1").parent().position().top+$("h3#block1").parent().innerHeight() )

		{

			var str = $("h3#block1 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
  			$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});	

  		}		

  		else if ( !$("h3#block2").hasClass("ui-collapsible-heading-collapsed") &&
		
				$(window).scrollTop() > $("h3#block2").parent().position().top &&
				$(window).scrollTop() < $("h3#block2").parent().position().top+$("h3#block2").parent().innerHeight() )
	  	
	  	{

	  		var str = $("h3#block2 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
  			$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});

		} 		
		
		else if ( !$("h3#block3").hasClass("ui-collapsible-heading-collapsed") &&
		
				$(window).scrollTop() > $("h3#block3").parent().position().top &&
				$(window).scrollTop() < $("h3#block3").parent().position().top+$("h3#block3").parent().innerHeight() )
	  
	  	{
	  	
	  		var str = $("h3#block3 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
		
		} 		
	  	
	  	else if ( !$("h3#block4").hasClass("ui-collapsible-heading-collapsed") &&

				$(window).scrollTop() > $("h3#block4").parent().position().top &&
				$(window).scrollTop() < $("h3#block4").parent().position().top+$("h3#block4").parent().innerHeight() )
	  	
	  	{
	  	
	  		var str = $("h3#block4 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
		
		}	
	  	
	  	else if ( !$("h3#block5").hasClass("ui-collapsible-heading-collapsed") &&
		
				$(window).scrollTop() > $("h3#block5").parent().position().top &&
				$(window).scrollTop() < $("h3#block5").parent().position().top+$("h3#block5").parent().innerHeight() )
	  	
	  	{
	  	
	  		var str = $("h3#block5 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
		
		}		
	  	
	  	else if ( !$("h3#block6").hasClass("ui-collapsible-heading-collapsed") &&
		
				$(window).scrollTop() > $("h3#block6").parent().position().top &&
				$(window).scrollTop() < $("h3#block6").parent().position().top+$("h3#block6").parent().innerHeight() )
	  	
	  	{
	  		
	  		var str = $("h3#block6 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
		
		}	
	  	
	  	else if ( !$("h3#block7").hasClass("ui-collapsible-heading-collapsed") &&
		
				$(window).scrollTop() > $("h3#block7").parent().position().top &&
				$(window).scrollTop() < $("h3#block7").parent().position().top+$("h3#block7").parent().innerHeight() )
	  	
	  	{
	  		
	  		var str = $("h3#block7 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
		
		}	
	  	
	  	else if ( !$("h3#block8").hasClass("ui-collapsible-heading-collapsed") &&

				$(window).scrollTop() > $("h3#block8").parent().position().top &&
				$(window).scrollTop() < $("h3#block8").parent().position().top+$("h3#block8").parent().innerHeight() )
	  	
	  	{
	
	 		var str = $("h3#block8 span.ui-btn-text > span:first").text();					
			$("div.ui-header").addClass("ui-header-fixed fade ui-fixed-overlay");
	  		$("h1#itemtitle").text(str).css({"font-size" : "14px", "margin" : ".6em 0px .8em"});
	 	
	 	} else {
	
			$("div.ui-header").removeClass("ui-header-fixed fade ui-fixed-overlay");	
			$("h1#itemtitle").text("Patient Information Leaflet").css({"font-size" : "16px", "margin" : ".6em 0px .8em"});
	
		}	
		
    });
    	
    $( ".anchortop" ).live( "click", function(event, ui) {
    	
  		$(window).scrollTop(0);

  	});

});



$( document ).live( 'pagebeforechange',function(event, ui){	

	$(".ui-header").css("top", "0");	

  	$(".navigation").animate({"left": "-200px"}, "fast");

});
		
$( ".ui-page" ).live( 'swipeleft',function(event, data){
	
   	$(".navigation").show().animate({"left": "-200px"}, "slow");

});
		
$( ".ui-page" ).live( 'swiperight',function(event, data){

   	$(".navigation").show().animate({"left": "0px"}, "slow");

});		
		
$( '#comment' ).live( 'pageinit',function(event){
	
	
	$("#sideefetctsfiels").hide();
	
	$(".ui-body:has(#sideefetctsfiels)").css("height", "200px");
			
	$("input[type='radio']#radio-choice-1, input[type='radio']#radio-choice-2").bind( "change", function(event, ui) {	

		$(".ui-body:has(#sideefetctsfiels)").animate({"height": "200px"}, "slow", function(){ $("#sideefetctsfiels").hide(); });

	});
			
	$("input[type='radio']#radio-choice-3").bind( "change", function(event, ui) {

		$("#sideefetctsfiels").show();

		$(".ui-body:has(#sideefetctsfiels)").animate({"height": "940px"}, "slow");

	});

});
	 
  function semi_swipe() {
  	$(".navigation").show().animate({"left": "-100px"}, "slow");
   	$(".navigation").show().animate({"left": "-200px"}, "slow");  	
  } 	
  
  function nascondi() {
  	$(".navigation").hide();
  }
  function mostra() {
    
    	$(".navigation").show();
  }
		


$(document).delegate('#simplebool', 'click', function() {
  $(this).simpledialog({
    'mode' : 'bool',
    'prompt' : 'Commento inviato! Grazie!',
    'useModal': true,
    'buttons' : {
      'OK': {
        click: function () {
          $('#dialogoutput').text('OK');
        }
      }      
    }
  })
})