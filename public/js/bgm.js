var bgm = new Howl({
    src : ['sound/bgm.mp3']  ,
    loop : true,
    autoplay : true,
    volume : 1
});
var toggleSound = new Howl({
    src : ['sound/soundon.wav']  
});
$('.speaker-button').on('click', function(){
    if (app.muted) toggleSound.play();
    app.muted = !app.muted;
    app.muted ? bgm.mute(true) : bgm.mute(false);
    if (sound) {
        if (app.muted) sound.mute(true);
        else sound.mute(false);
    }
        
});
