  var lockbtn = true;
  var linenum = 0;

  function scrollFunc(e) {
    e = e || window.event;

    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
      if (e.wheelDelta > 0) { //当滑轮向上滚动时  
        if (lockbtn) {

          linenum--
          if (linenum <= -1) {
            linenum = 4;
          }
          $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
          //console.log('向上' + linenum)
          lockbtn = false;

          setTimeout(function () {
            lockbtn = true;
          }, 1000)

          return linenum
        } else {
          return
        }
      }
      if (e.wheelDelta < 0) { //当滑轮向下滚动时  
        if (lockbtn) {

          linenum++;
          if (linenum >= 5) {
            linenum = 0;
          }
          $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
          //console.log('向下' + linenum)
          lockbtn = false;

          setTimeout(function () {
            lockbtn = true;
          }, 1000)

          return linenum
        } else {
          return
        }
      }
    } else if (e.detail) { //Firefox滑轮事件  
      if (e.detail > 0) {
        //当滑轮向上滚动时  
        if (lockbtn) {

          linenum--
          if (linenum <= -1) {
            linenum = 4;
          }
          $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
          //console.log('向上' + linenum)
          lockbtn = false;

          setTimeout(function () {
            lockbtn = true;
          }, 1000)

          return linenum
        } else {
          return
        }

      }
      if (e.detail < 0) { //当滑轮向下滚动时  

        if (lockbtn) {

          linenum++;
          if (linenum >= 5) {
            linenum = 0;
          }
          $('.item').eq(linenum).addClass('cur').siblings().removeClass('cur')
          //console.log('向下' + linenum)
          lockbtn = false;

          setTimeout(function () {
            lockbtn = true;
          }, 1000)

          return linenum
        } else {
          return
        }

      }
    }
  }


  $('.item').click(function () {
    var i = $(this).index()
    $(this).addClass('cur').siblings().removeClass('cur')

    linenum = i;
    scrollFunc()
  })


  //给页面绑定滑轮滚动事件  
  if (document.addEventListener) { //firefox  
    document.addEventListener('DOMMouseScroll', scrollFunc, true);
  }
  //滚动滑轮触发scrollFunc方法  //ie 谷歌  
  window.onmousewheel = document.onmousewheel = scrollFunc;