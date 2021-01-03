//用于初始化一个Swiper实例，返回初始化后的Swiper实例,有两个参数swiperContainer和parameters
//  其中swiperContainer参数必选(对应的swiper的id或者类名)，parameters参数可选是Swiper的个性化配置
//一个页面中引用多个Swiper，可以给每个容器加上ID或Class区分，要保留默认的类名swiper-container
var swiper = new Swiper(".swiper-container1", {     //.swiper-container1对应第一个轮播图的class名
  // 区分容器
  // pagination: '.swiper-p1', // 区分分页符
  initialSlide :2,  //Swiper初始化时显示第几个activeSlide，默认等于0(第一个)
  direction : 'horizontal', //滑动方向，默认是 horizontal 水平，vertical
  // speed:300,  //切换速度，单位ms,默认300
  centeredSlides: true,  //设定为true时，active slide会居中，而不是默认状态下的居左
  autoplay: {
    delay: 2000,   //每一帧slide的停留时间
    //stopOnLastSlide: true,  //不循环切换，切换到最后一个slide后停止
    disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。默认为 true
    // reverseDirection: true,  //开启反向自动轮播
  },
  // autoplay:true, //可选选项，自动滑动
  pagination: {  //设置分页器
    el: ".swiper-p1",  //el指向的分页器
    clickable: true,
    type:'progressbar',   //分页器样式,bullets:圆点(默认),fraction:分式,progressbar:进度条,
  },
  navigation: {  //设置前进后退按钮
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    // hideOnClick: true, //点击slide时显示/隐藏按钮,需配合css的.swiper-button-hidden类使用
  },
});


//用于初始化一个Swiper，返回初始化后的Swiper实例。
var swiper2 = new Swiper(".swiper-container2", {   //.swiper-container1对应第2个轮播图的class名
  // 区分容器
  // pagination: '.swiper-p2',// 区分分页符
  // effect : 'coverflow',  //slide的切换效果,默认是"slide"（位移切换）， "coverflow"（3d流）
  // centeredSlides: true,  //设定为true时，active slide会居中，而不是默认状态下的居左
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-p2",  //el指向的分页器
    type:'bullets',   //分页器样式,bullets:圆点(默认),fraction:分式,progressbar:进度条,
    clickable: true,
  },
  navigation: {  //设置前进后退按钮
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true, //点击slide时显示/隐藏按钮,需配合css的.swiper-button-hidden类使用
  },
});

//鼠标覆盖停止自动切换
swiper2.el.onmouseover = function(){
  swiper2.autoplay.stop();
}

//鼠标离开开始自动切换
swiper2.el.onmouseout = function(){
  swiper2.autoplay.start();
}

//网页一加载立即展示leave块的div添加动画效果
// var leaveDiv = document.querySelector('div.display-leave');
// leaveDiv.classList.add('animate__animated'); 
// leaveDiv.classList.add('animate__bounceInUp');

//leaveDiv到达window可视区域后加载animate动画效果
window.onscroll = function() {
  // var show = document.getElementById("showDiv");
  var show = document.querySelector('div.display-leave');
  // 获取浏览器窗口可视化高度
  var clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  // 获取showDiv元素顶部到浏览器窗口顶部的距离
  var showTop = show.getBoundingClientRect().top;
  // 如果距离小于可视化窗口高度，就给showDiv元素添加动画效果
  if (showTop <= clientH) {
      show.classList.add('animate__animated');   //加载animate控件
      show.classList.add('animate__bounceInDown');  //加载动画样式 animate__bounceInUp 
      //show.classList.add('animate__infinite');   //动画无限次重复
  }
};