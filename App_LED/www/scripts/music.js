(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    var src, media;
    var vol = 1.0;
function onDeviceReady() {
    $("#play").on("click", onPlay);
    $("#pause").on("click", onPause);
    $("#stop").on("click", onStop);
    $("#volInc").on("click", onInc);
    $("#volDec").on("click", onDec);
    buttonControl(true, false, false, false, false);
};

function onPlay()
{
    if (!media) {
        src = cordova.file.applicationDirectory + "www/closer.mp3";
        media = new Media(src , onSuccess , onError)
    }
    media.play();
    $("#status").html("播放");
    buttonControl(false, true, true, true, true);
}
function onPause()
{
    media.pause();
    $("status").html("暫停");
    buttonControl(true, false, true, true, true);
}
function onStop()
{
    media.stop();
    media.release();
    $("#status").html("停止");
    buttonControl(true, false, false, false, false);
}
function onInc()
{
    if(vol < 1.0)
    {
        vol = vol + 0.1;
        media.setVolume(vol);
    }
}
function onDec()
{
    if(vol > 0)
    {
        vol = vol - 0.1;
        media.setVolume(vol);
    }
}
function buttonControl(btnPlay , btnPause , btnStop , btnInc , btnDec)
{
    if(btnPlay)
    {
        $("#play").removeClass("ui-disabled");
    }
    else
    {
        $("#play").addClass("ui-disabled")
    }
    if (btnPause) {
        $("#pause").removeClass("ui-disabled");
    }
    else {
        $("#pause").addClass("ui-disabled")
    }
    if (btnStop) {
        $("#stop").removeClass("ui-disabled");
    }
    else {
        $("#stop").addClass("ui-disabled")
    }
    if (btnInc) {
        $("#volInc").removeClass("ui-disabled");
    }
    else {
        $("#volInc").addClass("ui-disabled")
    }
    if (btnDec) {
        $("#volDec").removeClass("ui-disabled");
    }
    else {
        $("#volDec").addClass("ui-disabled")
    }
}
function onSuccess()
{}
function onError()
{
    alert("執行產生錯誤!");
}
})();