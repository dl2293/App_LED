$(document).ready(function () {
    $.ajaxSetup
    ({
        timeout:3000
    })
    var port = window.localStorage.getItem("port");
    var ip = window.localStorage.getItem("ip");
    $("#SendToPi").click(function () {
        var Bright = $("#led_bright").val();
        var arr = { light: Bright };
        var light_url = 'http://' + ip + ':' + port + '/Receivelight';
        $.ajax   //傳帳號密碼的json給sever
        ({
            url: light_url,
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
                alert("connect fail"); //Handle the timeout
            },
            success: function (responseData) {      
            }
        });
        window.localStorage.setItem("B", Bright);
    })
    $("#I_O").change(function () {
        var OnOff = $('#I_O option:checked').val();
        window.localStorage.setItem("I", OnOff);
        var IO_url = 'http://' + ip + ':' + port + '/ReceiveIO';
        var arr2 = { IO: OnOff };
        $.ajax   //傳帳號密碼的json給sever
        ({
            url: IO_url,
            type: 'POST',
            data: JSON.stringify(arr2),
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("connect fail");
            },
            success: function (responseData) {
            }
        });
    })
    $('#Mode').change(function () {
        var mode = $('input[name=radio-mode]:checked').val();
        if (mode == 1) {
            var temp = "#rad_sleep";
        }
        else if (mode == 2) {
            var temp = "#rad_work";
        }
        else if (mode == 3) {
            var temp = "#rad_read";
        }
        else if (mode == 4) {
            var temp = "#rad_play";
        }
        window.localStorage.setItem("M", mode);
        var arr3 = { Mode: mode };
        var Mode_url = 'http://' + ip + ':' + port + '/ReceiveMode';
        $.ajax   //傳帳號密碼的json給sever
        ({
            url: Mode_url,
            type: 'POST',
            data: JSON.stringify(arr3),
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            error: function () {
                    alert("connect fail"); //Handle the timeout
            },
            success: function (responseData) {
            }
        });
    })
})