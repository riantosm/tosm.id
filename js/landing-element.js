$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // tentang
    if(wScroll>$('.tentang #judul').offset().top - 550){
        $('.tentang #judul').removeClass('atas_h');
        $('.tentang #judul').addClass('awal');
    }
    if(wScroll>$('.tentang #c-1').offset().top - 550){
        $('.tentang #c-1').removeClass('bawah_h');
        $('.tentang #c-1').addClass('awal');
    }
    if(wScroll>$('.tentang #c-2').offset().top - 550){
        $('.tentang #c-2').removeClass('bawah_h');
        $('.tentang #c-2').addClass('awal');
    }
    // /tentang
    // developer
    if(wScroll>$('.developer #judul').offset().top - 550){
        $('.developer #judul').removeClass('atas_h');
        $('.developer #judul').addClass('awal');
    }
    if(wScroll>$('.developer #c-1-1').offset().top - 550){
        $('.developer #c-1-1').removeClass('bawah_h');
        $('.developer #c-1-1').addClass('awal');
    }
    if(wScroll>$('.developer #c-1-2').offset().top - 550){
        $('.developer #c-1-2').removeClass('bawah_h');
        $('.developer #c-1-2').addClass('awal');
    }
    if(wScroll>$('.developer #c-2').offset().top - 550){
        $('.developer #c-2').removeClass('kiri_h');
        $('.developer #c-2').addClass('awal');
    }
    if(wScroll>$('.developer #c-3').offset().top - 550){
        $('.developer #c-3').removeClass('kiri_h');
        $('.developer #c-3').addClass('awal');
    }
    if(wScroll>$('.developer #c-4').offset().top - 550){
        $('.developer #c-4').removeClass('kiri_h');
        $('.developer #c-4').addClass('awal');
    }
    if(wScroll>$('.developer #c-5').offset().top - 550){
        $('.developer #c-5').removeClass('kiri_h');
        $('.developer #c-5').addClass('awal');
    }
    if(wScroll>$('.developer #c-6').offset().top - 550){
        $('.developer #c-6').removeClass('kanan_h');
        $('.developer #c-6').addClass('awal');
    }
    if(wScroll>$('.developer #c-7').offset().top - 550){
        $('.developer #c-7').removeClass('kanan_h');
        $('.developer #c-7').addClass('awal');
    }
    if(wScroll>$('.developer #c-8').offset().top - 550){
        $('.developer #c-8').removeClass('kanan_h');
        $('.developer #c-8').addClass('awal');
    }
    if(wScroll>$('.developer #c-9').offset().top - 550){
        $('.developer #c-9').removeClass('kanan_h');
        $('.developer #c-9').addClass('awal');
    }
    if(wScroll>$('.developer #c-10').offset().top - 550){
        $('.developer #c-10').removeClass('kanan_h');
        $('.developer #c-10').addClass('awal');
    }
    if(wScroll>$('.developer #c-11').offset().top - 550){
        $('.developer #c-11').removeClass('kanan_h');
        $('.developer #c-11').addClass('awal');
    }
    if(wScroll>$('.developer #c-12').offset().top - 550){
        $('.developer #c-12').removeClass('kanan_h');
        $('.developer #c-12').addClass('awal');
    }
    if(wScroll>$('.developer #c-13').offset().top - 550){
        $('.developer #c-13').removeClass('kanan_h');
        $('.developer #c-13').addClass('awal');
    }
    if(wScroll>$('.developer #c-14').offset().top - 550){
        $('.developer #c-14').removeClass('kanan_h');
        $('.developer #c-14').addClass('awal');
    }
    if(wScroll>$('.developer #c-15').offset().top - 550){
        $('.developer #c-15').removeClass('kanan_h');
        $('.developer #c-15').addClass('awal');
    }
    if(wScroll>$('.developer #c-16').offset().top - 550){
        $('.developer #c-16').removeClass('kanan_h');
        $('.developer #c-16').addClass('awal');
    }
    if(wScroll>$('.developer #c-17').offset().top - 550){
        $('.developer #c-17').removeClass('kanan_h');
        $('.developer #c-17').addClass('awal');
    }
    if(wScroll>$('.developer #c-18').offset().top - 550){
        $('.developer #c-18').removeClass('kanan_h');
        $('.developer #c-18').addClass('awal');
    }
    if(wScroll>$('.developer #c-19').offset().top - 550){
        $('.developer #c-19').removeClass('kanan_h');
        $('.developer #c-19').addClass('awal');
    }
    // /developer
    // edukasi
    if(wScroll>$('.edukasi #judul').offset().top - 550){
        $('.edukasi #judul').removeClass('atas_h');
        $('.edukasi #judul').addClass('awal');
    }
    if(wScroll>$('.edukasi #c-1').offset().top - 550){
        $('.edukasi #c-1').removeClass('kiri_h');
        $('.edukasi #c-1').addClass('awal');
    }
    if(wScroll>$('.edukasi #c-2').offset().top - 550){
        $('.edukasi #c-2').removeClass('kiri_h');
        $('.edukasi #c-2').addClass('awal');
    }
    if(wScroll>$('.edukasi #c-3').offset().top - 550){
        $('.edukasi #c-3').removeClass('kanan_h');
        $('.edukasi #c-3').addClass('awal');
    }
    if(wScroll>$('.edukasi #c-4').offset().top - 550){
        $('.edukasi #c-4').removeClass('kanan_h');
        $('.edukasi #c-4').addClass('awal');
    }
    // /edukasi
    // portofolio
    if(wScroll>$('.portofolio #judul').offset().top - 550){
        $('.portofolio #judul').removeClass('atas_h');
        $('.portofolio #judul').addClass('awal');
    }
    if(wScroll>$('.portofolio #c-1').offset().top - 550){
        $('.portofolio #c-1').removeClass('kiri_h');
        $('.portofolio #c-1').addClass('awal');
    }
    if(wScroll>$('.portofolio #c-2').offset().top - 550){
        $('.portofolio #c-2').removeClass('kiri_h');
        $('.portofolio #c-2').addClass('awal');
    }
    if(wScroll>$('.portofolio #c-3').offset().top - 550){
        $('.portofolio #c-3').removeClass('kiri_h');
        $('.portofolio #c-3').addClass('awal');
    }
    if(wScroll>$('.portofolio #c-4').offset().top - 550){
        $('.portofolio #c-4').removeClass('kiri_h');
        $('.portofolio #c-4').addClass('awal');
    }
    // /portofolio
    // kontak
    if(wScroll>$('.kontak #judul').offset().top - 550){
        $('.kontak #judul').removeClass('atas_h');
        $('.kontak #judul').addClass('awal');
    }
    if(wScroll>$('.kontak #c-1').offset().top - 550){
        $('.kontak #c-1').removeClass('kiri_h');
        $('.kontak #c-1').addClass('awal');
    }
    if(wScroll>$('.kontak #c-2').offset().top - 550){
        $('.kontak #c-2').removeClass('kiri_h');
        $('.kontak #c-2').addClass('awal');
    }
    if(wScroll>$('.kontak #c-3').offset().top - 550){
        $('.kontak #c-3').removeClass('kanan_h');
        $('.kontak #c-3').addClass('awal');
    }
    // /kontak
    // quotes
    if(wScroll>$('.quotes #c-1-1').offset().top - 550){
        $('.quotes #c-1-1').removeClass('atas_h');
        $('.quotes #c-1-1').addClass('awal');
    }
    if(wScroll>$('.quotes #c-1-2').offset().top - 550){
        $('.quotes #c-1-2').removeClass('atas_h');
        $('.quotes #c-1-2').addClass('awal');
    }
    if(wScroll>$('.quotes #c-2').offset().top - 600){
        $('.quotes #c-2').removeClass('bawah_h');
        $('.quotes #c-2').addClass('awal');
    }
    // /quotes




    // if(wScroll>$('.tentang').offset().top - 550){
    //     $('.tentang #atas').removeClass('atas_h');
    //     $('.tentang #atas').addClass('awal');
    //     $('.tentang #bawah').removeClass('bawah_h');
    //     $('.tentang #bawah').addClass('awal');
    // }
    // if(wScroll>$('.developer').offset().top - 550){
    //     $('.developer #atas').removeClass('atas_h');
    //     $('.developer #atas').addClass('awal');
    //     $('.developer #kiri').removeClass('kiri_h');
    //     $('.developer #kiri').addClass('awal');
    //     $('.developer #kanan').removeClass('kanan_h');
    //     $('.developer #kanan').addClass('awal');
    //     $('.developer #bawah').each(function(i){
    //         setTimeout(function(){
    //             $('.developer #bawah').eq(i).removeClass('bawah_h');
    //             $('.developer #bawah').eq(i).addClass('awal');
    //         }, 300 * (i+1))
    //     });
    // }
    // if(wScroll>$('.edukasi').offset().top - 550){
    //     $('.edukasi #atas').removeClass('atas_h');
    //     $('.edukasi #atas').addClass('awal');
    //     $('.edukasi #kiri').each(function(i){
    //         setTimeout(function(){
    //             $('.edukasi #kiri').eq(i).removeClass('kiri_h');
    //             $('.edukasi #kiri').eq(i).addClass('awal');
    //         }, 300 * (i+1))
    //     });
    // }
    // if(wScroll>$('.portofolio').offset().top - 550){
    //     $('.portofolio #atas').removeClass('atas_h');
    //     $('.portofolio #atas').addClass('awal');
    //     $('.portofolio #kiri').each(function(i){
    //         setTimeout(function(){
    //             $('.portofolio #kiri').eq(i).removeClass('kiri_h');
    //             $('.portofolio #kiri').eq(i).addClass('awal');
    //         }, 300 * (i+1))
    //     });
    // }
    // if(wScroll>$('.kontak').offset().top - 200){
    //     $('.kontak #atas').removeClass('atas_h');
    //     $('.kontak #atas').addClass('awal');
    //     $('.kontak #kiri').removeClass('kiri_h');
    //     $('.kontak #kiri').addClass('awal');
    //     $('.kontak #kanan').removeClass('kanan_h');
    //     $('.kontak #kanan').addClass('awal');
    // }
    // if(wScroll>$('.quotes').offset().top - 500){
    //     $('.quotes #atas').removeClass('atas_h');
    //     $('.quotes #atas').addClass('awal');
    //     $('.quotes #bawah').removeClass('bawah_h');
    //     $('.quotes #bawah').addClass('awal');
    // }
});