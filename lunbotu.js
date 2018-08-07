$(function(){
        $(document).ready(function () {
                var i = 0;
                var clone = $("#pic1 .img li").first().clone();//克隆第一张图片
                $("#pic1 .img").append(clone);//复制到列表最后
                var size = $("#pic1 .img li").size();
				//console.log(size);

                for (var j = 0; j < size-1; j++) {
                    $("#pic1 .num").append("<li></li>");
                }
				//console.log($(".banner .num").size());
                $("#pic1 .num li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},1500);

                /*鼠标悬停事件*/

                $("#pic1").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
                });




                /*鼠标滑入原点事件*/

                $("#pic1 .num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $("#banner .img").stop().animate({ left: -index * 358 }, 1200);
                    $(this).addClass("on").siblings().removeClass("on");
                });



                /*向左按钮*/
                $("#pic1 .btn_l").click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                $("#pic1 .btn_r").click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $("#pic1 .img").css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        $("#pic1 .img").css({ left: -(size - 1) * 358 });
                        i = size - 2;
                    }
                    $("#pic1 .img").stop().animate({ left: -i * 358 }, 1200);

                    if (i == size - 1) {
                        $("#pic1 .num li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $("#pic1 .num li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
            });
   
})


function pop(){
    mov.style.display='block';
    meng.style.display='block';
    mov.style.left=(document.documentElement.clientWidth-300)/2+"px";
    mov.style.top=(document.documentElement.clientHeight-300)/2+"px";

}
var isMove=false;
var off={x:0,y:0}
function open1(){
    var e=window.event||arguments[0];
    off.x=e.offsetX;
    off.y=e.offsetY;
    isMove=true;
}
function close1(){
    isMove=false;
}
function chg(a){
    var e=window.event||arguments[0];
    if(isMove==true){
        var x=e.clientX-off.x;
        var y=e.clientY-off.y;
        var m=document.documentElement.clientWidth-392;
        var n=document.documentElement.clientHeight-424;
        if (x<=0)
        {x=0;
        }else if (x>=m)
        {x=m;
        }
        if (y<=0)
        {y=0;
        }else if (y>=n)
        {y=n;
        }


        mov.style.left=x+"px";
        mov.style.top=y+"px";
    }
}
document.onmouseup=close1;

