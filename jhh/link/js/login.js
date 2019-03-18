$(function(){
    var $shift=$('.shift');
    var $boxes=$('.box');
    $shift.click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index=$(this).index();
        $boxes.eq(index).addClass('choose').siblings().removeClass('choose');
    });
});