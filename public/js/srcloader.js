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

for(var i = 0; i < comps.length; i++) {
    var el = comps[i];
    var useWebm = !/Android/i.test(ua) && /Chrome/i.test(ua); 
    var ext = useWebm ? '.webm' : '.mp4';
    var isMobile = detectmob();
    var src;
    if (el.properties.hasVideo) {
        var temp = $(el.$el).find("video");
        temp.attr("src", "video/" + el.properties.videoSrc + ratio + ext);
        if (isMobile) temp.attr("autoplay", true);
    }
}
