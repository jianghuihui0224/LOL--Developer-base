//瀑布流页面显示效果
 function waterfall(parent, child) {
    var lis = parent.getElementsByClassName(child);//获取li盒子

    //计算页面中显示的列数（页面宽/每个盒子的宽）
    var boxWidth = lis[0].offsetWidth;//单个盒子的宽度
    
    //整个页面的宽度除以单个盒子的宽的 = 列数
    var cols = Math.floor(document.documentElement.clientWidth / boxWidth); 

    var harr = []; //用于存放第一行盒子的高度
    var sum = 0; //用来存储最高那列的高度

    for (var i = 0; i < lis.length; i++) {
        if (i < cols) {  //如果i小于列数  说明获取的都是第一列的盒子
            harr.push(lis[i].offsetHeight);
            
        } else {
            var minH = Math.min.apply(null, harr);  //通过Math对象求出数组中的最小值，把最小值设置为，下一个盒子的top值
            var maxH = Math.max.apply(null, harr);  //通过Math对象求出数组中的最大值，把最大值设置为，父盒子的总高度

            var index = harr.indexOf(minH);//求出数组中最小值的索引
            lis[i].style.position = 'absolute';//设置下一个盒子绝对定位
            lis[i].style.top = minH + "px";//设置下一个盒子的top值为，上一个最小盒子的高度
            
            lis[i].style.left = lis[index].offsetLeft + 'px';
            //通过索引获得高度最小的盒子，把高度最小的盒子的left值，给下一个盒子
            harr[index] = harr[index] + lis[i].offsetHeight;
            //因为把下一个盒子放在了当前高度最小的盒子下面，所以把当前数组中，最小的那个值加上下一个盒子的高。

            var sumBoxH = lis[lis.length-1].style.top = maxH;
            //将最后一张图片的高度提取出来,因为最后一张图片一定是放在最高的那列下面
            sum = sumBoxH + 'px';//赋值给sum
        }
    }
    // console.log(parent);
    parent.style.height = sum;//让ul的高等于最高列的高度sum  

}

//因为事件需要用户有交互动作之后才能执行,所以需要使用入口函数
window.onload = function () {
    var uls = document.getElementsByClassName('g_main_pic');//获取ul
    //调用瀑布流函数
    //参数1:：需要实现瀑布流的ul 参数2：需要操作的子元素li
    for (var i = 0; i < uls.length; i++) {
        waterfall(uls[i], 'g_main_box');
    }

    //下面为模拟的数据块用来存放图片的地址
    var dataInt = {
        'data': [
            {'src': 'con (9).jpg'},
            {'src': 'con (10).jpg'},
            {'src': 'con (0).jpg'},
            {'src': 'con (4).jpg'},
            {'src': 'con (1).jpg'},
            {'src': 'con (6).jpg'},
            {'src': 'con (17).jpg'},
            {'src': 'con (12).jpg'},
            {'src': 'con (15).jpg'},
            {'src': 'con (7).jpg'},
            {'src': 'con (8).jpg'},
            {'src': 'con (14).jpg'},
            {'src': 'con (16).jpg'},
            {'src': 'con (2).jpg'},
            {'src': 'con (3).jpg'},
            {'src': 'con (5).jpg'},
            {'src': 'con (11).jpg'}
        ]
    };

    //按钮点击事件
    var btn = document.getElementsByClassName('g_main_btn')
    btn[0].onclick = function () {
        var parent = document.getElementsByClassName('g_main_pic');//获取父元素
        var oBox = document.getElementsByClassName('g_main_box');//获取li

        var str = '';//用来储存文字结构和样式

        for (var i = 0; i < dataInt.data.length; i++) {//循环遍历后台给的数据
            //创建一个元素 ,用于储存瀑布流的内容
            var opic = document.getElementsByClassName('g_main_pic');//ul元素pic
            var obox = document.createElement('li');//li元素box
            var img = document.createElement('img');//img元素

            //给新建的li里添加文字结构和样式
            str = '<div class="g_main_box_con">\
            <div class="g_main_box_con_sanjiao"></div>\
            <h3>开发者</h3>\
            <i></i>\
            <h2>开发者随意画: 塞拉斯 动漫回顾塞拉斯开发之路</h2>\
            <div class="g_main_box_con_hide">\
                <p>塞拉斯 动漫回顾塞拉斯开发之路</p>\
                <span>拳头游戏 —— 3周前</span>\
            </div>\
            <div class="g_main_box_con_food">\
                <p>9条评论</p>\
            </div>\
            </div>'

            obox.innerHTML += str;//将文字结构添加到li中

            //每一个瀑布流元素,因为要让文字结构在图片上面显示,所以让其放在文字结构放入li之后再将其添加到li中
            //就可以实现文字结构在图片上显示的效果
            img.src = 'img/' + dataInt.data[i].src;
            obox.appendChild(img);//把img放进li里面
            obox.className = 'g_main_box';      
            opic[0].appendChild(obox); //把li放进ul里
        }
        waterfall(this.previousElementSibling.children[0], 'g_main_box');
    }

    //tab栏切换事件
    var listUp = document.getElementsByClassName('g_main_nav_ul_li')
    var listDown = document.getElementsByClassName('item')
    for (var k = 0; k < listUp.length-1; k++) {
        var count = 0;
        listUp[k].xiabiao = k;
    
        listUp[k].onclick = function () {
            listUp[count].className = 'g_main_nav_ul_li';
            listDown[count].className = 'g_main_con_one item hide';
    
            this.className = "g_main_nav_ul_li new";
            listDown[this.xiabiao].className = 'g_main_con_one item show';
            count = this.xiabiao;
    
            //判断前两个tab栏的内容切换
            if(this.xiabiao <= 1) {
                listDown[this.xiabiao].className = 'g_main_con_one item show'
                waterfall(listDown[this.xiabiao].children[0].children[0], 'g_main_box');
            }
            else {
                listDown[this.xiabiao].className = "item show"
            };
        }
    }

    //导航栏固定
    $(window).scroll(function () {
        var sum = $('.top_ban').outerHeight(true) + $('.header_bar').outerHeight(true)
        if ($(this).scrollTop() >= sum) {
            $('.g_main_nav').addClass("fixed")
            $('.g_main_con').css('marginTop', '88px')
  
        } else {
            $('.g_main_nav').removeClass("fixed");
            $('.g_main_con').css('marginTop', '0px')

        }
    })
}
  

