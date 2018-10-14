window.onload = function() {
    var bargain = document.querySelector("#bargain");
    var mask = document.querySelector(".mask");
    var rotateLight = document.querySelector('.rotate_light');
    var closeBtn = document.querySelector('.close');
    var btns = document.querySelectorAll('footer .btn');

    bargain.addEventListener('click', toggleMask, true);
    mask.addEventListener('click', toggleMask, false);
    rotateLight.addEventListener('click', toggleMask, false);
    closeBtn.addEventListener('click', toggleMask, false);
    for(var i=0, len=btns.length; i < len; i++) {
        // IIFE
        (function fun(i){
            btns[i].addEventListener('click', toggleMask, true);
        })(i);
    }
}

function toggleMask(modal) {
    var modal = document.querySelector(".modal");
    var showStatus = modal.style.display === "block" ? "none" : "block";
    modal.style.display = showStatus;
}