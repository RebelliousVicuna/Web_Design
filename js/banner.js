window.onload = function () {
    var current_index = 0;
    var time = window.setInterval(autoChange, 5000);
    var button_li = document.getElementById("button").getElementsByTagName("li");
    var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");
    for (var i = 0; i < button_li.length; i++) {
        button_li[i].onmouseover = function () {
            if (time) {
                clearInterval(time);
            }
            for (var j = 0; j < pic_div.length; j++) {
                if (button_li[j] === this) {
                    current_index = j;
                    button_li[j].className = "current";
                    pic_div[j].className = "current";
                } else {
                    pic_div[j].className = "pic";
                    button_li[j].className = "bt";
                }
            }
        }

        button_li[i].onmouseout = function () {
            time = setInterval(autoChange, 5000);
        }
    }

    function autoChange() {
        ++current_index;
        if (current_index === button_li.length)
            current_index = 0;
        for (var i = 0; i < button_li.length; i++) {
            if (i === current_index) {
                button_li[i].className = "current";
                pic_div[i].className = "current";
            } else {
                button_li[i].className = "bt";
                pic_div[i].className = "pic";
            }
        }
    }
}
