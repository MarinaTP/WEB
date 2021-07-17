// FIRST EXERCISE
$(document).ready(function(){
    console.log('Hello')
});


$('li:first').css('border-bottom', '1px solid black');

$('li').css('text-transform', 'uppercase');

$('li').focus(function(){
    $('li').css('background-color', 'red');
});


var liMidd = Math.ceil($('li').length/2);

$('ul li:nth-child(' + liMidd + ')').css({
  'background-color':'red'
})

