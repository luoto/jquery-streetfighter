$('document').ready(function () {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
        console.log('mousedown');
        // play hadouken sound
        playHadouken();
        // show hadouken
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        // animate hadouken to the right of the screen
        $('.hadouken').finish().show().animate(
            {'left': '1024px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
        );    
    })
    .mouseup(function() {
        console.log('mouseup');
        // ryu go backs to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
};