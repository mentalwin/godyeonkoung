function checktopbar() {
    var topbar = $('.topbar');
    if (mySwiper.activeIndex == 0) {
        topbar.css("background", "transparent");
    }
    else{
        topbar.css("background", "rgba(246,246,246,0.7)")
    }

}
