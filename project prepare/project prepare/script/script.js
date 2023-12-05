const navbar = document.querySelector(".navbar");

window.onscroll = () => {
    var top = window.scrollY;
    if (top >= 700) {
        navbar.classList.add("navbarDrak");
    }else{
        navbar.classList.remove("navbarDrak");
    }
};