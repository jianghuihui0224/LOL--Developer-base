window.onload = function () {
    //下面的模拟的数据块
    var dataInt = {
        'data': [
            {'src': '../images/create/create(1).jpg'},
            {'src': '../images/create/create(2).jpg'},
            {'src': '../images/create/create(3).jpg'},
            {'src': '../images/create/create(4).jpg'},
            {'src': '../images/create/create(5).jpg'},
            {'src': '../images/create/create(6).jpg'},
            {'src': '../images/create/create(7).jpg'},
            {'src': '../images/create/create(8).jpg'},
            {'src': '../images/create/create(9).jpg'},
            {'src': '../images/create/create(10).jpg'},
            {'src': '../images/create/create(11).jpg'},
            {'src': '../images/create/create(12).jpg'},
            {'src': '../images/create/create(13).jpg'},
            {'src': '../images/create/create(14).jpg'},
            {'src': '../images/create/create(15).jpg'},
            {'src': '../images/create/create(16).jpg'},
            {'src': '../images/create/create(17).jpg'},
            {'src': '../images/create/create(18).jpg'},
            {'src': '../images/create/create(19).jpg'},
            {'src': '../images/create/create(20).jpg'},
            {'src': '../images/create/create(21).jpg'},
            {'src': '../images/create/create(22).jpg'},
            {'src': '../images/create/create(23).jpg'},
            {'src': '../images/create/create(24).jpg'},
            {'src': '../images/create/create(25).jpg'},
            {'src': '../images/create/create(26).jpg'},
            {'src': '../images/create/create(27).jpg'},
            {'src': '../images/create/create(28).jpg'},
            {'src': '../images/create/create(29).jpg'},
            {'src': '../images/create/create(30).jpg'},
            {'src': '../images/create/create(31).jpg'},
            {'src': '../images/create/create(32).jpg'},
            {'src': '../images/create/create(33).jpg'},
            {'src': '../images/create/create(34).jpg'},
            {'src': '../images/create/create(35).jpg'},
            {'src': '../images/create/create(36).jpg'},
            {'src': '../images/create/create(37).jpg'},
            {'src': '../images/create/create(38).jpg'}
        ]
    };

    var dataIntNew = {
        'dataNew': [
            {'src': '../images/recommend/recommend (1).jpg'},
            {'src': '../images/recommend/recommend (2).jpg'},
            {'src': '../images/recommend/recommend (3).jpg'},
            {'src': '../images/recommend/recommend (4).jpg'},
            {'src': '../images/recommend/recommend (5).jpg'},
            {'src': '../images/recommend/recommend (6).jpg'},
            {'src': '../images/recommend/recommend (7).jpg'},
            {'src': '../images/recommend/recommend (8).jpg'},
            {'src': '../images/recommend/recommend (9).jpg'},
            {'src': '../images/recommend/recommend (10).jpg'},
            {'src': '../images/recommend/recommend (11).jpg'},
            {'src': '../images/recommend/recommend (12).jpg'},
            {'src': '../images/recommend/recommend (13).jpg'},
            {'src': '../images/recommend/recommend (14).jpg'},
            {'src': '../images/recommend/recommend (15).jpg'},
            {'src': '../images/recommend/recommend (16).jpg'},
            {'src': '../images/recommend/recommend (17).jpg'},
            {'src': '../images/recommend/recommend (18).jpg'},
            {'src': '../images/recommend/recommend (19).jpg'},
            {'src': '../images/recommend/recommend (20).jpg'},
            {'src': '../images/recommend/recommend (21).jpg'},
            {'src': '../images/recommend/recommend (22).jpg'},
            {'src': '../images/recommend/recommend (23).jpg'},
            {'src': '../images/recommend/recommend (24).jpg'},
            {'src': '../images/recommend/recommend (25).jpg'},
            {'src': '../images/recommend/recommend (26).jpg'},
            {'src': '../images/recommend/recommend (27).jpg'},
            {'src': '../images/recommend/recommend (28).jpg'},
            {'src': '../images/recommend/recommend (29).jpg'},
            {'src': '../images/recommend/recommend (30).jpg'},
            {'src': '../images/recommend/recommend (31).jpg'},
            {'src': '../images/recommend/recommend (32).jpg'},
            {'src': '../images/recommend/recommend (33).jpg'},
            {'src': '../images/recommend/recommend (34).jpg'},
            {'src': '../images/recommend/recommend (35).jpg'},
            {'src': '../images/recommend/recommend (36).jpg'}
        ]
    };
    waterfall('show_content', 'pic');
    waterfall('show_content_news', 'pic_news');

    //滚动条事件
    window.onscroll = function () {
        var $firstBox=$('#show_content');
        var $secondBox=$('#show_content_news');
        //加一个判断盒子的语句
        if( $firstBox.hasClass('selected')){
            // console.log($firstBox.hasClass('selected'));
            if (checkScrollside('show_content','pic')) {//判断如果滚动的距离超过这个就加载图片
                var oParent = document.getElementById('show_content');//获取父元素
                //将数据块渲染到页面的尾部
                for (let i = 0; i < dataInt.data.length; i++) {//循环遍历后台给的数据
                    //创建一个元素 ,用于存放数据块
                    var obox = document.createElement('div');//pic这个盒子
                    var opic = document.createElement('div');//box这个盒子
                    var img = document.createElement('img');//放图片的盒子
                    obox.className = 'box';
                    opic.className = 'pic';
                    img.style.borderRadius='10px';
                    opic.appendChild(obox); //把box放进pic里
                    oParent.appendChild(opic);//把pci放进main里
                    img.src = 'images/' + dataInt.data[i].src;
                    obox.appendChild(img);//把img放进box里面
                };
                waterfall('show_content', 'pic');
            };
            //判断是哪个盒子
        }else if($secondBox.hasClass('selected')){
            if (checkScrollside('show_content_news','pic_news')) {
                var oParent = document.getElementById('show_content_news');
                for (let i = 0; i < dataIntNew.dataNew.length; i++) {
                    var obox = document.createElement('div');
                    var opic = document.createElement('div');
                    var img = document.createElement('img');
                    obox.className = 'box_news';
                    opic.className = 'pic_news';
                    img.style.borderRadius='10px';
                    opic.appendChild(obox); 
                    oParent.appendChild(opic);
                    img.src = 'images/' + dataIntNew.dataNew[i].src;
                    obox.appendChild(img);
                };
                waterfall('show_content_news', 'pic_news');
            };
        };
    };
};

//瀑布流页面显示效果
function waterfall(parent, child) {
    var oParent = document.getElementById(parent);//获取父盒子 main
    var oBoxs = oParent.getElementsByClassName(child);//获取所有的box盒子
    //计算页面中显示的列数（页面宽/每个盒子的宽）
    var boxWidth = oBoxs[0].offsetWidth;//单个盒子的宽度
    var cols = Math.floor(document.documentElement.clientWidth / boxWidth); //整个页面的宽度除以单个盒子的宽的 = 列数
    oParent.style.cssText = 'width:' + boxWidth * cols + 'px;margin:0 auto';//设置最大盒子的宽度 等于 单个盒子的宽度乘以列数
    var harr = []; //用于存放第一列盒子的高度
    for (let i = 0; i < oBoxs.length; i++) {
        if (i < cols) {  //如果i小于列出  说明获取的都是第一列的盒子
            harr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, harr);  //通过Math对象求出数组中的最小值，把最小值设置为，下一个盒子的top值
            var index = harr.indexOf(minH);//求出数组中最小值的索引
            oBoxs[i].style.position = 'absolute';//设置下一个盒子绝对定位
            oBoxs[i].style.top = minH + "px";//设置下一个盒子的top值为，上一个最小盒子的高度
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';//通过索引获得高度最小的盒子，把高度最小的盒子的left值，给下一个盒子
            harr[index] = harr[index] + oBoxs[i].offsetHeight;//因为把下一个盒子放在了当前高度最小的盒子下面，所以把当前数组中，最小的那个值加上下一个盒子的高。
        }

    }
}


//判断滚动条的距离，是否需要图片加载事件
function checkScrollside(parent,child) {
    var oParent = document.getElementById(parent);//获取父元素
    var oBox = oParent.getElementsByClassName(child);//获取里面的所有pic盒子
    //我们需要在最后一个盒子，露出一半，就开始图片加载，获取最后一个盒子的top + 最后一个盒子高度的一半.
    var lastBox = oBox[oBox.length - 1].offsetTop + Math.floor(oBox[oBox.length - 1].offsetHeight / 2);//获取最后一个元素
    //获取页面滚走的距离
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; //兼容性写法
    //获取当前页面的高度
    var height = document.body.clientHeight || document.documentElement.clientHeight;//兼容性写法

    //返回一个布尔值，当最后一个图片的距离 小于 页面滚走的距离的时候 代表可以运行加载事件
    return (lastBox < scrollTop + height) ? true : false;
}