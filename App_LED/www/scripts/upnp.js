(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        var serviceType = "ssdp:all";

        var success = function (devices) {
            console.dir(devices);
        }

        var failure = function () {
            alert("Error calling Service Discovery Plugin");
        }

        /**
         * Similar to the W3C specification for Network Service Discovery api 'http://www.w3.org/TR/discovery-api/'
         * @method getNetworkServices
         * @param {String} serviceType e.g. "urn:schemas-upnp-org:service:ContentDirectory:1", "ssdp:all", "urn:schemas-upnp-org:service:AVTransport:1"
         * @param {Function} success callback an array of services
         * @param {Function} failure callback 
        */
        serviceDiscovery.getNetworkServices(serviceType, success, failure);
    };

})();