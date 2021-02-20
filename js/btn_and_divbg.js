function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// 按钮绑定事件
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        //setText('text-dark');
    } else {
        setTheme('theme-dark');
        // setText('text-light');
    }
}


(function () {

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    }
})();

