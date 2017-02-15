function checktopbar() {
    var topbar = $('.topbar');
    var logo = topbar.find(".clogo");
    if (mySwiper.activeIndex == 0) {
        topbar.css("background", "transparent");
        logo.css("opacity", 0);
    }
    else{
        topbar.css("background", "#ff9767");
        logo.css("opacity", 1);
    }

}
