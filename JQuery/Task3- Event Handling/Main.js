var player = $('#playerImg');
var background = $('.soccerField');
var button = $('button');


background.on('click', function(event){

    var xPosition = event.pageX - 50;
    var yPosition = event.pageY - 50;

    player.offset({top: yPosition, left: xPosition});
});

