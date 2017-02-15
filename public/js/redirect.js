var useragent_redirect = window.navigator.userAgent;

function checkUA() {
    var ch = useragent_redirect.match(/Chrome/i);
    var sa = useragent_redirect.match(/Safari/i);

    if (!ch && !sa) window.location = "redirect";
}
