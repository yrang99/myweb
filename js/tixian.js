window.onload = function() {
    var okyMOneys = 1000000.00; //模拟可用余额,实际使用的时候从数据库返回或其它的操作。
    var oGetAll = document.getElementById("getall");
    var oGetMoneys = document.getElementById("getmoneys");
    var oGetOut = document.getElementById("getout");
    var oKyye = document.getElementsByClassName("kyye")[0];



    oGetMoneys.oninput = function() //监听用户的输入给出相应提示。
    {
        if (oGetMoneys.value == "") {
            oGetOut.style.opacity = 0.4;
            // oKyye.innerHTML = "当前零钱余额：25546.60元，<a href='javascript:;'' id='getall'>全部提现</a>"
        } else if (parseFloat(oGetMoneys.value) > okyMOneys) {
            oGetOut.style.opacity = 0.4;
            oKyye.innerHTML = "<font color=red>输入金额超过可提现金额</font>"
        } else {
            // var paroGetMoneys = parseFloat(oGetMoneys.value);
            // var sxf = paroGetMoneys * 0.001;
            // var sjdz = paroGetMoneys - sxf;
            // oKyye.innerHTML = "额外扣除￥" + sxf.toFixed(2) + "手续费（费率0.1%）";
            oGetOut.style.opacity = 1;
            //这里就可以进行与后台交互的操作比如ajax操作等。
        }
    };



    //全部提现
    oGetAll.onclick = function() {
        var parGetMoneys = parseFloat(oGetMoneys.value); //格式化成数字
        var sjdz = okyMOneys - (okyMOneys * 0.001); //手费0.1%
        var sxf = okyMOneys * 0.001;
        oGetMoneys.value = sjdz.toFixed(2);
        oKyye.innerHTML = "额外扣除￥" + sxf.toFixed(2) + "手续费（费率0.1%）";
        //alert("a");
    };
};