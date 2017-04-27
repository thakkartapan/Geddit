function runScript() {
    var main = document.querySelector('[role="main"]')
    var side = document.getElementsByClassName('side')[0];
    side.style.display = 'none';
    main.style.marginTop = '7px';

    var ul = document.getElementById("header-bottom-right").getElementsByClassName("flat-list")[0];
    var li = document.createElement('li');
    li.innerHTML = '<li> | <a id="menuEleId" href="javascript:void(0)" class="pref-lang choice">Menu</a></li>';
    ul.appendChild(li);

    var a = document.getElementById("menuEleId")
    a.addEventListener("click", function () {
        var display = side.style.display;
        if (display === 'none') {
            side.style.display = 'block';
            main.style.marginTop = '';
        } else {
            side.style.display = 'none';
            main.style.marginTop = '7px';
        }
    });
}


runScript();