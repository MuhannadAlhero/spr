// for menulist icon nav bar 

// التحكم بالقائمة
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("menulist");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";

});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
});
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
//   الخاص بDroplist
// يفتح ويغلق القائمة
langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
});

// لما تضغط على أي خيار من القائمة → تغلق
langMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        langMenu.classList.remove("show");
    });
});

// إذا ضغطت برا القائمة → تغلق
window.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("show");
    }
});

// Vision Setion 
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add('show');
        }
    });
});
// ---------------
// language from (chat-gpt)
