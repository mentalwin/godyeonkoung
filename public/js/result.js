var $analyzed = $(".analyzed");
var $img = $("#img-container img");
var result;
var heightData;

function getHeightData() {
    return $.ajax({
            method : 'GET',
            url : '/assets/height.json'
        })
}
var showResult = function(idx) {
    $analyzed.css("display", "block");
    var resultMessage; 
    getNameHeight();
    var $user_result = $("#user_result");
    var $user_value = $("#user_value");
    if ( idx >= 0) {
        resultMessage = result.message;
        resultMessage = replaceMessage(resultMessage,/<name>/, name);
        resultMessage = replaceMessage(resultMessage,/<age>/, guessedresult);
        var resultValue = "\"" + height + " cm\"";
       
        $user_value.html(resultValue);
    } else {
        resultMessage = "에이... 어플에 거짓말을 하면 쓰나..."
    }
    $user_result.html(resultMessage);
    var img = getImage(idx);
    $img.attr("src", img);
}

var getImage = function(idx) {
    if (idx >= 0 ) {
        return "resource/project/KYK" + idx + ".png";
    } else {
        return "resource/project/donotjoke.png"
    }
}
var replaceMessage = function(message, regex, value){
    return message.replace(regex, value);
}
var getParam = function() {
    return window.location.pathname.split('/')[2];
}
var getQuery = function() {
    return location.search.slice(1).split('&')[0];
}
var getNameHeight = function (){
    // loading 하는 척하기
    var idx = getParam();
    var query = getQuery().split('=')[1];
    var obj = JSON.parse(decodeURIComponent(query));
    height = obj.height;
    name = obj.name;
    result = heightData[idx];
    guessedresult = ageAnalzyer(idx, height);
}

// age analyzer
var ageAnalzyer = function(idx, value) {
    if (idx >= 0) {
        var base = 100;
        var baseAge = 10;
        var compData = heightData[idx];
        if (idx > 0) {
            base = heightData[idx-1].height;
            baseAge = heightData[idx-1].age;
        }
        var ratio = (value - base) / (compData.height - base)
        var multiplier = compData.age - baseAge
        return baseAge + Math.round(ratio * multiplier * 10) / 10;
    }
}
