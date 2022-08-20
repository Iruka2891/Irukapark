var checked = document.getElementById('udimension');
var checked2 = document.getElementById('menuopen');

$('#menuopen').click(function () {
 if (checked2.checked) {
 $('#sidemenu').css('right','0');
 $('#openbtn').toggleClass('active');
 } else {
 $('#sidemenu').css('right','-120%');
 $('#openbtn').removeClass('active');
 $('#umenu').css('opacity','0');
 $('#umenu').css('visibility','hidden');
 checked.checked = false;
 }
});


$('#udimension').click(function() {
 if (checked.checked) {
   $('#umenu').css('opacity','1');
   $('#umenu').css('visibility','visible');
 } else {
   $('#umenu').css('opacity','0');
   $('#umenu').css('visibility','hidden');
 }
});

$('#umenu a').click(function() {
 $('#umenu').css('opacity','0');
 $('#umenu').css('visibility','hidden');
 $('#sidemenu').css('right','-120%');
 $('#openbtn').removeClass('active');
 checked.checked = false;
 checked2.checked = false;
});
