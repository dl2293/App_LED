(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);

    function onDeviceReady() {
        
    };
    function onOffline()
    {
        window.localStorage.setItem("Internet", "off");
    }
    function onOnline()
    {
        window.localStorage.setItem("Internet", "on");
    }

} )();