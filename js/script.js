window.addEventListener("scroll",function () {
    const header = document.querySelector('header');
    const about = this.document.getElementById("about")
    const discord = this.document.getElementById("discord")

    about.classList.toggle("move", window.scrollY > 0);
    header.classList.toggle("sticky", window.scrollY > 0);
    discord.classList.toggle("move", window.scrollY > 0);
});