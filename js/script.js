window.addEventListener("scroll",function () {
    const header = document.querySelector('header');
    const about = this.document.getElementById("about")
    const discord = this.document.getElementById("discord")
    const scroll = this.document.getElementById("scroll")

    about.classList.toggle("move", window.scrollY > 0);
    header.classList.toggle("sticky", window.scrollY > 0);
    discord.classList.toggle("move", window.scrollY > 0);
    scroll.classList.toggle("visible", window.scrollY > 0);
});

let loading =document.querySelector('.loading');
window.addEventListener('load',function () {
    loading.style.display = "none"
})