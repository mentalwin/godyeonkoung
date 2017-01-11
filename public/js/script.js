(function($) {
    "use strict";
    var standards = [
        { 
            age : "초등학생",
            value : 130,
        },
        { 
            age : "중학생",
            value : 170,
        },
        { 
            age : "고등학교 1학년",
            value : 180,
        },
        {
            age : "고등학교 3학년",
            value : 192
        }
    ];
    var height_controller = function(value) {
        var returnValue = 0;
        for(var i = 0; i < standards.length; i++){
            console.log(i);
            if (value < standards[i].value) return standards[i];
        }
        return false;
    }
    var showMessage = function(obj) {
        var yourHeight = $('#yourHeight');
        var message;
        if (obj) {

            message = "김연경은 " + obj.age + "때 이미 " + obj.value + "cm 였습니다.";
        } else {
            message = "당신은 김연경보다 키가 큽니다."
        }
        yourHeight.html(message);
        
    }
    $("#height_control").submit(function(e){
        e.preventDefault();
        var your_item = height_controller((+$("input:first").val()));
        showMessage(your_item);
    });

})(jQuery);
