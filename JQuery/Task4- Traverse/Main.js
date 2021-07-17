var img1 = $('img').first();
img1.addClass('selected');

// function removeAdd(){
//     img1.removeClass('selected');
// }

// removeAdd();

// var secondDiv = $('body').children()[1];

// var liMidd = Math.ceil($('secondDiv img').length/2);

// $('secondDiv img:nth-child(' + liMidd + ')').css({
//   'border':'red'
// })

$('.selected').removeClass("selected").parent().next().children().eq(0).addClass("selected");