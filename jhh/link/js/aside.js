//右侧轮播图
$(function(){
    var $rightSlide=$('#right_aside');
    var $imgs=$rightSlide.children();
    var index = 0;
    window.setInterval(function(){
        if (index === $imgs.length - 1) {
            index = -1;
        }
        index++;
        $imgs.eq(index).stop().fadeIn().siblings().stop().fadeOut();
    },1500)
})
