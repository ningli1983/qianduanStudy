var i=1; //定义一个图片走的顺序
function go(){
    //disable 抽奖按钮，防止叠加转动
    var btn=document.getElementById("btn");
    btn.disabled = true; //在执行过程中屏蔽按键响应
    //生成1-14之间的随机整数,再加28（至少绕2圈）
    var num=parseInt(Math.random()*14+1)+35;
    var timer=setInterval(function(){
        num--;
        if(num==8){
            clearInterval(timer); //停止计时器
            goLastStep(8); //执行最后8部
            //btn.disabled = false; //在执行过程中屏蔽按键响应
        }
        Highlight(i);
        i++;
        if (i == 15) {
            i = 1;  //转完1圈后将i复位成1
        }
    },50);
}
//执行最后8步
function goLastStep(num){
    j=num;
    var timer=setInterval(function(){
        j--;
        if (j == 0) {
            clearInterval(timer); //停止计时器
            btn.disabled = false; //在执行过程中屏蔽按键响应
        }
        Highlight(i);
        i++;
        if (i == 15) {
            i = 1;  //转完1圈后将i复位成1
        }
    },150)
}
//定义一个使选中高亮，未选中变淡的函数
function Highlight(id){
    //去除原来选中项的样式
    var items = document.getElementsByClassName('item');
    for (var item of items) {
        item.classList.remove('current');
    }
    //设置当前选中的样式
    var item = document.getElementById('item' + id);  //id可以拼接,item1等
    item.classList.add('current');  //给item添加.current样式
    //将flag设置成true
    flag=true;
}