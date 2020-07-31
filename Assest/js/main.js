function counter() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $("#counter").offset().top - 200) {
            $('.timer').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).attr("data-count")
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now))
                    }
                })
            })
        }
    })
}
counter();





function mobileNav() {
    $("#togglmenu").click(function () {
        $(".mobile-nav-content").css("right", "0");
    })
    $("#closemenu").click(function () {
        $(".mobile-nav-content").css("right", "-1000px");
    })
}
mobileNav()