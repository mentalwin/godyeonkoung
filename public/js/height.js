var height, name;
            var heightData;
            var result;
            var fakeloadingTime = 2000;
            // sections
            var $section1 = $(".section1");
            var $analyzed = $(".analyzed");
            var $img = $("#img-container img");
            var messages = [
                "마음의 준비...",
                "두구두구두구두구둥둥",
                "김연경도 어렸을 땐 작았다던데..."
            ]
            var getRandom = function(list) {
                var idx = Math.floor(Math.random() * list.length);
                return list[idx];
            }
            function getHeightData() {
                return $.ajax({
                        method : 'GET',
                        url : 'resource/assets/height.json'
                    })
            }
            // 결과 분석하기
            var heightAnalyzer = function(value) {
                var returnValue;
                for (var i = 0; i < heightData.length; i++){
                    if (value <= heightData[i].height) return i;
                }
                return -1;//김연경보다 키 큰 경우
            }
            var getImage = function(idx) {
                if (idx >= 0 ) {
                    return "resource/project/KYK" + idx + ".png";
                } else {
                    return "resource/project/donotjoke.png"
                }
            }
            // 페이크 로딩
            function fakeloading(idx) {
                $section1.css('display', 'none');
                var message = getRandom(messages);
                var spinner = $("<div class='spinner'>\
                                    <img src='resource/project/yk_height.png' alt='Duck'>\
                                    <div class='spinner__item1'></div>\
                                    <div class='spinner__item2'></div>\
                                    <div class='spinner__item3'></div>\
                                    <div class='spinner__item4'></div>\
                                </div>");
                $("header").append(spinner);
                var pMessage = $("<p class='shortMessage'></p>");
                pMessage.html(message);
                spinner.append(pMessage);
                setTimeout(function(){
                    spinner.css("display", "none");
                    // 끝나고 결과 보여주기
                    showResult(idx);
                }, fakeloadingTime);
            }
            
            var replaceMessage = function(message, regex, value){
                return message.replace(regex, value);
            }

            var getNameHeight = function (ev){
                ev.preventDefault();
                height = +$("#height").val();
                name = $("#name").val();
                // loading 하는 척하기
                var idx = heightAnalyzer(height);
                fakeloading(idx);
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

            // 결과 보여주기
            var showResult = function(idx) {
                $analyzed.css("display", "block");
                var resultMessage; 
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
                // facebook metatag 추가
                addMetaFacebook(resultMessage);
                var img = getImage(idx);
                $img.attr("src", img);
                // 김연경 타임라인으로...
            }
            
            function addMetaFacebook(metaMessage) {
                var meta = $("<meta>");
                meta.attr("property", "og:description");
                meta.attr("content", metaMessage);
                $("head").append(meta);
            }
            
            // 타임라인
            var showTimeLine = function() {
                $analyzed.css("display", "none");
                $timeLine.css("display", "block");
                $img.css("display", "none");
                $(".slicker").slick();
            }
            function reloadPage(){
                location.reload();
            }
            $("#logo").click(reloadPage);
            $(document).ready(function(){
                var $form = $("#name_height_form");
                var $toTimeline = $("#totimeline");
                getHeightData().done(function(item){
                    heightData = item.heightData;
                });
                $form.submit(getNameHeight);
                $toTimeline.click(showTimeLine);
            });
