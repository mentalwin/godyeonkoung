var idx;
$(document).ready(function(){
     idx = window.location.pathname.split('/')[2]; 
    getHeightData().done(function(item){
        heightData = item.heightData;
        showResult(idx);
    });
});
