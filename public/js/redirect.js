var useragent_redirect = window.navigator.userAgent;

function checkUA() {
    var ch = /Chrome/i.test(useragent_redirect);
    var sa = /Safari/i.test(useragent_redirect);
    var ed = /Edge/i.test(useragent_redirect);

    if (!ch && !sa) window.location = "redirect";
    if (ed) window.location = "redirect";
}
checkUA();
