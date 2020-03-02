$('.ini').on('click', function(e){
    var hash = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 0
    }, 1000, 'easeInOutExpo');
    return false;
    e.preventDefault();
});

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;





        var berandanya = document.getElementById("beranda").offsetTop;
        var tentangnya = document.getElementById("tentang").offsetTop;
        var developernya = document.getElementById("developer").offsetTop;
        var edukasinya = document.getElementById("edukasi").offsetTop;
        var portofolionya = document.getElementById("portofolio").offsetTop;
        var kontaknya = document.getElementById("kontak").offsetTop;

        if (distanceY >= berandanya-0 && distanceY <= tentangnya-1) {
            document.getElementById("btn-beranda").setAttribute("class","nav-item active");
            document.getElementById("a-beranda").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-beranda").setAttribute("class","nav-item");
            document.getElementById("a-beranda").setAttribute("class","nav-link");
        }

        if (distanceY >= tentangnya-0 && distanceY <= developernya-1) {
            document.getElementById("btn-tentang").setAttribute("class","nav-item active");
            document.getElementById("a-tentang").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-tentang").setAttribute("class","nav-item");
            document.getElementById("a-tentang").setAttribute("class","nav-link");
        }

        if (distanceY >= developernya-0 && distanceY <= edukasinya-1) {
            document.getElementById("btn-developer").setAttribute("class","nav-item active");
            document.getElementById("a-developer").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-developer").setAttribute("class","nav-item");
            document.getElementById("a-developer").setAttribute("class","nav-link");
        }

        if (distanceY >= edukasinya-0 && distanceY <= portofolionya-2) {
            document.getElementById("btn-edukasi").setAttribute("class","nav-item active");
            document.getElementById("a-edukasi").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-edukasi").setAttribute("class","nav-item");
            document.getElementById("a-edukasi").setAttribute("class","nav-link");
        }

        if (distanceY >= portofolionya-2 && distanceY <= kontaknya-2) {
            document.getElementById("btn-portofolio").setAttribute("class","nav-item active");
            document.getElementById("a-portofolio").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-portofolio").setAttribute("class","nav-item");
            document.getElementById("a-portofolio").setAttribute("class","nav-link");
        }

        if (distanceY > kontaknya-2) {
            document.getElementById("btn-kontak").setAttribute("class","nav-item active");
            document.getElementById("a-kontak").setAttribute("class","nav-link ini");
        }else{
            document.getElementById("btn-kontak").setAttribute("class","nav-item");
            document.getElementById("a-kontak").setAttribute("class","nav-link");
        }
    });
}
window.onload = init();