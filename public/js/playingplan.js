let moment = require("moment");
(function($){
    let playingtime = [
        moment("2017-01-10"),
        moment("2017-01-28"),
        moment("2017-02-01")
    ];
    var getMostRecentGame = function() {
        let now = moment();
        for(var i = 0; i < playingtime.length; i++){
            if(now.diff(playingtime[i]) < 0) return playingtime[i];
        }
        return false;
    }

    let closestGame = getMostRecentGame().toObject();
    
})(jQuery);
