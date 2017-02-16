var video; // previous html5
var videoOption = { id : "video_player", controls : false, 
                    autoplay : true, muted : true,
                    playsinline : true};
var sound, soundId;
var curSlideElement;
function textAnimation(el) {
    el.blast({delimiter : 'word'})
      .velocity('transition.fadeIn', {
            display : null,
            duration : 1000,
            stagger : 100,
            delay : 400,
            begin : function() {
                el.css('opacity', 1);
            }
      });
}
var mySwiper = new Swiper('.swiper-container', {
    direction : 'vertical',
    pagination: '.swiper-pagination',
    paginationType : 'progress',
    simulateTouch : false,
    onSlideChangeEnd : function() {
        
        // callback function that slide change end
        //  2. text preload
        curSlideElement = app.$children[mySwiper.activeIndex];
        
        //  1. has video
        if (app && curSlideElement.properties.hasVideo) {
            
            // find video-container inside this component
            var el = $(curSlideElement.$el);
            var vc = el.find(".video_container");
            var vspin = el.find(".v-spin");
            video = el.find(".video_container video");
            if(curSlideElement.properties.soundSrc) {
                sound = new Howl({
                    src : curSlideElement.properties.soundSrc
                });
            }
            video.on('loadeddata', function(){
                this.play();
                vspin.css("display", "none");
                soundId = sound.play();
                app.muted ? sound.mute(true) : sound.mute(false);
            });
        }
        if (curSlideElement.properties.main_text) {
            var el = $(curSlideElement.$el);
            var inn = el.find('.inner');
            textAnimation(inn);
        }
    },
    onSlideChangeStart : function() {
        checktopbar(); // topbar style
        if (video && !video.paused) {
            if (video[0]) {
                video[0].pause();
                video[0].currentTime = 0;
            }
        }
        if (sound) { 
            sound.unload(); 
        }
    },
    preloadImages: false,
    // Enable lazy loading
    lazyLoading: true
});
mySwiper.disableTouchControl();
var galleryTop = new Swiper('.swiper-container-h', {
        direction : 'horizontal'  ,
        paginationClickable : true,
        nextButton : '.swiper-button-next',
        prevButton : '.swiper-button-prev',
        preloadImages : false,
        lazyLoading : true
    });
    $(".gallery-thumb").on('click', '.thumb', function(){
        galleryTop.slideTo($(this).index(), 500);
    });
