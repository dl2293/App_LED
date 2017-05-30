
$(document).ready(function () {            /*登出後回登入畫面*/
    var username = window.localStorage.getItem("userid");
    document.getElementById('hello').innerHTML = username + "  會員您好!";

    $("#logout").click(function () {
        window.localStorage.setItem("Key", "signout");
        window.location.href = "index.html";
    })

    $("#lightness").click(function () {

    })

    $("#temperature").click(function () {

    })

})