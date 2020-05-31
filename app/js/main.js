$(document).ready(function() {

    $('.slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

});


var lableName = document.getElementById('lable-name');
var lableTel = document.getElementById('lable-tel');

document.getElementById('name').addEventListener("focus", onfocusName);
document.getElementById('name').addEventListener("blur", onblurName);
document.getElementById('tel').addEventListener("focus", onfocusTel);
document.getElementById('tel').addEventListener("blur", onblurTel);

function onfocusName() {
    lableName.classList.add("load");
    var check = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(this.value);
    if (check) {
        lableName.classList.remove("checked");
    }else{
        lableName.classList.add("load");
    }
}
function onblurName() {
    var check = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/.test(this.value);
    if (check) {
        this.classList.add("valid");
        lableName.classList.add("checked");
        lableName.classList.remove("load");
    }else if(this.value === ""){
        lableName.classList.remove("load");
        lableName.classList.remove("checked");
        this.classList.remove("valid");
    }else{
        lableName.classList.add("load");
        this.classList.remove("valid");
    }
}
function onfocusTel() {
    lableTel.classList.add("load");
    var check = /^[+0-9]{7,}/.test(this.value);
    if (check) {
        lableTel.classList.remove("checked");
    }else{
        lableTel.classList.add("load");
    }
}
function onblurTel() {
    var check = /^[+0-9]{7,}/.test(this.value);
    if (check) {
        tel.classList.add("valid");
        lableTel.classList.add("checked");
        lableTel.classList.remove("load");
    }else if(tel.value === ""){
        lableTel.classList.remove("load");
        lableTel.classList.remove("checked");
        tel.classList.remove("valid");
    }else{
        lableTel.classList.add("load");
        tel.classList.remove("valid");
    }
}

// Menu

var burger = document.getElementById("burger");
burger.addEventListener("click", showHideMenu);
function showHideMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-show");
}


// Modal

var btn = document.querySelectorAll(".btn");
btn.forEach(function(btn) {
    btn.addEventListener("click", showModal);
});
function showModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-show");
}

var close = document.getElementById('close');
close.addEventListener("click", closeModal);
function closeModal() {
    var modal = document.getElementById('modal');
    modal.classList.remove("modal-show");
}

var mobileBtn = document.querySelector('.call-small');
mobileBtn.addEventListener("click", showModal);
function showModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-show");
}