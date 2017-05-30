$(document).ready(function () {
    alert("FK");
    var JdataOfMode = window.localStorage.getItem("M");
    var JdataOfIO = window.localStorage.getItem("I");
    var JdataOfBrightness = window.localStorage.getItem("B");
    if (JdataOfMode == 0) {
        var temp = "#rad_sleep";
    }
    else if (JdataOfMode == 1) {
        var temp = "#rad_work";
    }
    else if (JdataOfMode == 2) {
        var temp = "#rad_read";
    }
    else if (JdataOfMode == 3) {
        var temp = "#rad_play";
    }
    $(temp).prop("checked", true);
    
    $("#I_O").attr("value", JdataOfIO);
    $('#bright').val(JdataOfBrightness);
})





