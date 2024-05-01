let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function toggleLanguage(lang) {
    var currentUrl = window.location.href;
    var newUrl;

    if (lang === 'en') {
        if (currentUrl.includes("index.html")) {
            return;
        } else if (currentUrl.includes("index-fr.html")) {
            newUrl = currentUrl.replace("index-fr.html", "index.html");
        } else {
            newUrl = "index.html";
        }
    } else if (lang === 'fr') {
        if (currentUrl.includes("index.html")) {
            newUrl = currentUrl.replace("index.html", "index-fr.html");
        } else if (currentUrl.includes("index-fr.html")) {
            return; 
        } else {
            newUrl = "index-fr.html";
        }
    }

    window.location.href = newUrl;
}

document.getElementById("toggleLanguageEN").addEventListener("click", function() {
    if (!this.classList.contains('active-lang')) {
        toggleLanguage('en');
    }
});

document.getElementById("toggleLanguageFR").addEventListener("click", function() {
    if (!this.classList.contains('active-lang')) {
        toggleLanguage('fr');
    }
});