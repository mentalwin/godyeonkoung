var ua = window.navigator.userAgent;
var comps = app.$children;
var w = $(window).width();
var h = $(window).height();
var ratio = w > h ? '_w' : '_m';
function detectmob() { 
     if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i) 
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ){
         return true;
         }
         else {
             return false; 
        }
}
var gifs = $(".gif");
function loadVideo() {
    for(var i = 0; i < comps.length; i++) {
        var el = comps[i];
        
        var useWebm = !/Android/i.test(ua) && /Chrome/i.test(ua); 
        var ext = useWebm ? '.webm' : '.mp4';
        var isMobile = detectmob();
        var src;
        if (el.properties.hasVideo) {
            var t= $(el.$el).find("video");
            t.on("ended", function(){
                console.log(1);
                curSlideElement.next_step();
            });
            t.attr("data-src", "video/" + el.properties.videoSrc + ratio + ext);
            t.attr("poster", "images/poster/" + el.properties.videoSrc + "_poster" + ratio + ".png" );
            t.addClass("swiper-lazy");
            if (isMobile) t.attr("autoplay", true);
        }
}
    
}

function loadGif() {
    for (var i = 0; i < gifs.length; i++) {
        var el = $(gifs[i]);
        var m = el.attr("name");
        el.attr("data-src", "gifs/" + m + ratio + ".gif");
    }
}
function loadMap() {
    var map = $(".map");
    var img = $("<img />")
    img.attr("src", "images/win_map" + ratio + ".png");
    map.append(img);
}
loadGif();
loadVideo();
loadMap();
