let index = 1;
$('.fa-ellipsis-h').click(function() {
    $('.menu-items-section').toggle(500);
    $('.settings-menu').hide(100);
});
$('.fa-cog').click(function() {
    $('.menu-items-section').hide(100);
    $('.settings-menu').toggle(500);
    $('.fa-cog').toggleClass('fa-cog1');
});
$('.fa-caret-square-right').click(function() {
    index += 1;
    if (index <= 3) {
        $('#carousel').attr("src", "images/img " + index + ".jpg");
    } else {
        index = 1;
        $('#carousel').attr("src", "images/img " + index + ".jpg");
    };
});
$('.fa-caret-square-left').click(function() {
    index -= 1;
    if (index <= 0) {
        index = 3;
        $('#carousel').attr("src", "images/img " + index + ".jpg");
    } else {
        $('#carousel').attr("src", "images/img " + index + ".jpg");
    };
});