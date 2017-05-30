var check = window.localStorage.getItem("Key");
if (check == "signIn")
{
    var count = 0;
    var ip, mac, port;
    var arr2 = { email: "123@df.das", serial: "0000000001" };
    $.ajax                //從sever拿資料
    ({
        url: 'http://120.107.172.236:3000/getDeviceInfo',
        type: 'POST',
        data: JSON.stringify(arr2),
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        success: function (responseData) {
            for (var key in responseData) {
                if (responseData[key] == 0) {
                    count++;
                    continue;
                }
                else if (responseData[key] == 1) {
                    count++;
                    continue;
                }
                if (count == 2) {
                    mac = responseData[key];
                }
                else if (count == 3) {
                    ip = responseData[key];
                }
                else if (count == 4) {
                    port = responseData[key];
                }
                count++;
            }
            window.localStorage.setItem("port", port);
            window.localStorage.setItem("ip", ip);
        },
        error: function () {
            alert("connect fail");
        }
    });
    var arr = { start: "req" };
    var JdataOfBrightness;
    var JdataOfIO;
    var JdataOfMode;
    var default_url = 'http://' + ip + ':' + port + '/SetDefault';
    $.ajax({
        url: default_url,
        type: "POST",
        data: JSON.stringify(arr),
        contentType: 'application/json',
        dataType: "json",
        async:false,
        success: function (Jdata) {
            var Table = eval(Jdata);
            var num = Table.length;
            for (var i = 0 ; i < num ; i++) {
                JdataOfBrightness = Table[i]["Brightness"];
                JdataOfIO = Table[i]["IO"];
                JdataOfMode = Table[i]["Mode"];
            }
            window.localStorage.setItem("I", JdataOfIO);
            window.localStorage.setItem("M", JdataOfMode);
            window.localStorage.setItem("B", JdataOfBrightness);
        },
        error: function () {
            alert("系統發生錯誤");
        }
    });
    window.location.href = "Light.html";
}
$(document).ready(function () {         //頁面載入完後 執行的動作
    $("#enter").click(function () {
        var username = $("#user_id").val();
        var pwd = $("#user_pwd").val();
        var arr = { email: username, pwd: pwd }; //create a json
        var temp = 0; //判斷result 是0或1
        var fName = "hello";
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; //email格式
        var net = window.localStorage.getItem("Internet");
        if (net == "off")
        {
            alert("請檢查是否連上網路");
        }
        else if (net == "on")
        {
            if (username.search(emailRule) != -1) {               //判斷是否符合email格式
                $.ajax   //傳帳號密碼的json給sever
                ({
                    url: 'http://120.107.172.236:3000/auth',
                    type: 'POST',
                    data: JSON.stringify(arr),
                    contentType: 'application/json',
                    dataType: 'json',
                    async: false,
                    success: function (responseData) {      //success:有連上sever,sever會回傳帳密是否正確
                        var report = 0;
                        for (var key in responseData) {
                            if (responseData[key] == 0) {
                                temp = 0;
                                continue;
                            }
                            else if (responseData[key] == 1) {
                                temp = 1;
                                continue;
                            }
                            alert(responseData[key]);
                            report++;
                            if (report == 2) {
                                fName = responseData[key];
                            }
                        }
                    },
                    error: function () {                  //error:沒有連上sever
                        navigator.notification.alert("connect fail");
                        //alert("connect fail");
                    }
                });
            }
            else {
                alert("Email格式錯誤");
            }
            $("#user_id").val("");
            $("#user_pwd").val("");
            if (temp == 1)    //帳密密碼正確->轉到Light頁面
            {
                window.localStorage.setItem("Key", "signIn");   //儲存是否有登入過 下次就不需要再重打帳密
                window.localStorage.setItem("userid", fName);
                window.location.href = "Light.html";
            }
        }
    })
})

$(document).ready(function(){   //到註冊頁面
    $("#sign_enter").click(function () {
        window.location = "sign_up.html";
    })
})

    