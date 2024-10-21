


document.getElementById('navbar-toggler').addEventListener('click', function () {
    var navbarCollapse = document.getElementById('navbar-collapse');
    if (navbarCollapse.style.display === "block") {
        navbarCollapse.style.display = "none";
    } else {
        navbarCollapse.style.display = "block";
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active'); 
        }
    });
});
