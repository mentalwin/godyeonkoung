var useragent_redirect = window.navigator.userAgent;

function checkUA() {
    var ch = /Chrome/i.test(useragent_redirect);
    var sa = /Safari/i.test(useragent_redirect);
    var ed = /Edge/i.test(useragent_redirect);
    var fb = /FBAN/i.test(useragent_redirect); // not facebook redirect
    var kt = /KAKAOTALK/i.test(useragent_redirect); // not kakao redirect
    if (!kt && !fb && !ch && !sa) window.location = "redirect";
    if (ed) window.location = "redirect";
}
checkUA();
