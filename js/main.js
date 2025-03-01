$(document).ready(function () {
    particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
        console.log('particles.js loaded');
    });
    
    new WOW().init();
    setTimeout(() => {
        $('#intro').fadeOut(1000, function() {
            $('#header1').fadeIn(1000).delay(3000).fadeOut(1000, function() {
                $('#header2').fadeIn(1000).delay(3000).fadeOut(1000, function() {
                    $('#quranContainer').fadeIn(1000);
                    AOS.init();
                });
            });
        });
    }, 5000);
    
    for (let i = 1; i <= 30; i++) {
        $('#quranContainer').append(`
            <div class="col-md-3 col-sm-6 mt-3 wow fadeIn" data-aos="fade-up">
                <div class="part hvr-bounce-to-right" onclick="location.href='https://surahquran.com/quran-search/chapter-${i}.html'">
                    الجزء ${i}
                </div>
            </div>
        `);
    }
});