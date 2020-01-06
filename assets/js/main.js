$(document).ready(function(){
	$('h2.accordion').click(function(){
        $( "div.accordion" ).each(function( index ) {
            $(this).slideUp("slow");
          });
          if ($(this).parent().find('div.accordion').is(':visible')) {
            $(this).parent().find('div.accordion').slideUp("slow");
          } else {
            $(this).parent().find('div.accordion').slideToggle("slow")
          }
		;
	});
});