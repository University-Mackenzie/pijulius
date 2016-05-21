/**
 * Created by jonyfernandoschulz on 5/14/16.
 */


$("#address-two").hide();
$( "#address-one" ).on( "click", function() {
    $("#address-two").show();
});

$(".button").on( "click", function() {
    $(".directions").toggle();
});

$("#directions__routes").hide();
$("#procurar").on( "click", function() {
    $("#directions__routes").show();
});





// $("#form2").hide();
// $( "#form1" ).on( "click", function() {
// $("#form2").show();
// });
