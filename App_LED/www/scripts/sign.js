$(document).ready(function () {
    $("#signLog").click(function () {           //click signLog button
        var fName = $("#fName").val();
        var lName = $("#lName").val();
        var phone = $("#phone").val();
        var email = $('#address').val();
        var signPwd = $('#sign_pwd').val();
        var arr = { fName: fName, lName: lName, phone: phone, email: email, pwd: signPwd };
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        var net = window.localStorage.getItem("Internet");
        if (net == "off") {
            alert("請檢查是否連上網路");
        }
        else if (net == "on")
        {
            if (email.search(emailRule) != -1) {                    //check email type
                $.ajax
                ({
                    url: 'http://120.107.172.236:3000/userSignup',
                    type: 'POST',
                    data: JSON.stringify(arr),
                    contentType: 'application/json',
                    dataType: 'json',
                    async: false,
                    success: function (responseData) {
                        for (var key in responseData) {
                            if (responseData[key] == 0) {
                                continue;
                            }
                            else if (responseData[key] == 1) {
                                continue;
                            }
                            alert(responseData[key]);
                        }
                    },
                    error: function () {
                        alert("connect fail");
                    }
                });
            }
            else {
                alert("Email格式錯誤");
            }
            $("#fName").val("");
            $("#lName").val("");
            $("#phone").val("");
            $("#address").val("");
            $("#sign_pwd").val("");
        }
    })
})