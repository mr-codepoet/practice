var lockbtn = true;
var linenum = 0;

var time = setInterval(function () {
    linenum++
    if (linenum >= $('.item').length) {
        linenum = 0
    }
    $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
    //console.log(linenum)
    return linenum
}, 1000)



function scrollFunc(e) {
    e = e || window.event;

    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            if (lockbtn) {
                clearInterval(time)

                linenum--
                if (linenum <= -1) {
                    linenum = $('.item').length - 1;
                }
                $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
                //console.log('向上' + linenum)

                lockbtn = false;
                setTimeout(function () {
                    lockbtn = true;
                }, 1000)

                time = setInterval(function () {
                    linenum++
                    if (linenum >= $('.item').length) {
                        linenum = 0
                    }
                    $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
                    //  console.log(linenum)
                    return linenum
                }, 2000)

                return linenum
            } else {
                return
            }
        }

        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            if (lockbtn) {
                clearInterval(time)
                linenum++;
                if (linenum >= $('.item').length) {
                    linenum = 0;
                }
                $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')


                lockbtn = false;
                setTimeout(function () {
                    lockbtn = true;
                }, 1000)

                time = setInterval(function () {
                    linenum++
                    if (linenum >= $('.item').length) {
                        linenum = 0
                    }
                    $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
                    //    console.log(linenum)
                    return linenum
                }, 2000)

                return linenum
            } else {
                return
            }
        }
    }
}


$('.item').click(function () {
    clearInterval(time)
    var i = $(this).index()
    $(this).addClass('cur').siblings().removeClass('cur')

    linenum = i;

    scrollFunc()

    time = setInterval(function () {
        linenum++
        if (linenum >= $('.item').length) {
            linenum = 0
        }
        $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
        // console.log(linenum)
        return linenum
    }, 2000)
})


$('#box').hover(function () {
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) { //firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, true);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;
}, function () {
    if (document.addEventListener) { //firefox  
        document.addEventListener('DOMMouseScroll', null, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = null;
})