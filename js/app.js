const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector(".hover-sign");

const sideBar = document.querySelector('.sidebar');
const button = document.querySelector('.sidebar button');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const skillscroll = document.querySelector('.skillscroll h1');

const videoList = [video1, video2, video3];

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');
const navLinks_sidebar = document.querySelector('.sidebar ul');

let btn = document.querySelector(".menu-icon");
let icon = btn.querySelector(".bx-menu-alt-right");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li [href*='+ id + ']').classList.add('active');
            });
        };
    });
};

btn.onclick = function(){
    if(icon.classList.contains("bx-menu-alt-right")){
        icon.classList.replace("bx-menu-alt-right", "bx-x")
        sideBar.classList.remove("close-sidebar")
        sideBar.classList.add("open-sidebar")
        document.body.style.overflow = 'hidden';
    }else{
        icon.classList.replace("bx-x", "bx-menu-alt-right")
        sideBar.classList.remove("open-sidebar")
        sideBar.classList.add("close-sidebar")
        document.body.style.overflow = 'unset';
    }
}

navLinks_sidebar.addEventListener("click", function(){
    icon.classList.replace("bx-x", "bx-menu-alt-right")
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
    document.body.style.overflow = 'unset';
})

button.addEventListener("click", function(){
    icon.classList.replace("bx-x", "bx-menu-alt-right")
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
    document.body.style.overflow = 'unset';
})

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout', function(){
        video.currentTime = 0;
        video.pause();
        hoverSign.classList.remove("active")
    })
})