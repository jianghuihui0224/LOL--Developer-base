//导航栏滚动定位
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.common_top').height()) {
        $('.title').addClass('fixed')
        $('.slide_pic').css('marginTop', $('.title').height() )
        } else {
        $('.title').removeClass('fixed')
        $('.slide_pic').css('marginTop', 0)
        }
    });
});

//切换栏
$(function(){
    var $show=$('.tab_main');
    $('.tab_change').click(function(){
        $(this).addClass('title_style').siblings().removeClass('title_style');
        var index = $(this).index();
        $show.eq(index).addClass('selected').siblings().removeClass('selected');
    });
});

//电梯导航
$(function(){
    var $elevator=$('#ele_nav');
    $elevator.click(function(){
        $('body,html').stop().animate({
            scrollTop : '0'
        }, 1500);
        return false;
    });
});





