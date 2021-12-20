$('.fa-toggle-off').click(function() {
    $('.settings-menu').toggleClass('settings-menu1');
    $('body').toggleClass('dark-mode');
    $('.fa-toggle-off').toggleClass('fa-toggle-on');
    $('.settings-menu').hide(120);
    $('html').toggleClass('banner-section1');
    $('.menu-items-section').toggleClass('menu-items-section1');
    $('.about-section').toggleClass('about-section1');
    $('.executive-section').toggleClass('executive-section1');
    $('.gallery-section').toggleClass('gallery-section1');
    $('.videos-section').toggleClass('videos-section1');
    $('.contact-section').toggleClass('contact-section1');
    $('.footer-section').toggleClass('footer-section1');
});