var options = {
    el : '#testApp',
    data : {
        light: "0xd8d8d8",
        ambient: "0xd8d8d8"     
    },
    methods : {
        updateColor : updateColor
    }
}
var app = new Vue(options);
