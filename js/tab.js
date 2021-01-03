//抽象对象：tab对象

//1：该对象具有切换功能
//2：该对象具有添加功能
//3：该对象具有删除功能
//4：该对象具有修改功能
var that;
class Tab{
    constructor(id){
        that = this;
        //获取元素
        this.main = document.querySelector(id)
       
        this.add = this.main.querySelector('.close')
       
        //li的父元素
        this.ul = this.main.querySelector('.tab_box')
        this.cont = this.main.querySelector('.content_box')
        

        this.init()
    }

    init(){
        this.undateNode();

        this.add.onclick = this.addTab  
        // init 初始化操作让相关的元素绑定事件
        for(var i = 0;i < this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;

           this.remove[i].onclick = this.removeTab;
           this.spans[i].ondblclick = this.editTab;
        }
    }

    undateNode(){
        this.lis = this.main.querySelectorAll('.tab_item')
        this.sections = this.main.querySelectorAll('.content')
        this.remove = this.main.querySelectorAll('.icon')

        this.spans = this.main.querySelectorAll('.firstnav span');
    }

    toggleTab(){
        that.clearClass()


        this.className = 'tab_item cur'

        that.sections[this.index].className = 'content cur '
    }

    clearClass(){
        for(var i = 0;i < this.lis.length;i++){
            this.lis[i].className ='tab_item';
            that.sections[i].className ='content';
        }
    }

    addTab(){
        that.clearClass()
        //(1) 创建li元素和section 元素
        //(2) 把这两个追加的对应的父元素里面
        var random = Math.random()
        var li = '<div class="tab_item cur"><span>测试</span><div class="icon"></div>'
        var conts = '<div class="content cur"><span>测试</span>'+random+'</div>'

        that.ul.insertAdjacentHTML('beforeend',li)
        that.cont.insertAdjacentHTML('beforeend',conts)

        that.init()
    }

    removeTab(e){
        e.stopPropagation();
        var index = this.parentNode.index
        console.log(index);

        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        //当我们删除的不是选中项时 原来选中的li保持不变

        if(document.querySelector('.tab_item.cur')){
            return
        }

        //当我们删除了选中状态的li时 让他前一个处于选中状态
        index--;
        that.lis[index]&& that.lis[index].click()


    }

    editTab(){
        var str = this.innerHTML

        this.innerHTML = '<input type="text" />'
        var input = this.children[0]
        input.value= str
        input.select()

        input.onblur=function(){
            this.parentNode.innerHTML = this.value
        }

        input.onkeyup = function(e){
            if(e.keyCode === 13){
                //手动调用失去焦点事件
                
                this.blur()
            }
        }
    }
}

new Tab('#tab')
