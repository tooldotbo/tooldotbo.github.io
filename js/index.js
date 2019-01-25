

layui.define(['element', 'form', 'laypage', 'jquery', 'laytpl'], function (exports) {
  var element = layui.element
    , form = layui.form
    , laypage = layui.laypage
    , $ = layui.jquery
    , laytpl = layui.laytpl;


  //statr 分页

  laypage.render({
    elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
    , count: 50 //数据总数，从服务端得到
    , theme: '#1e9fff'
  });

  // end 分頁

  // start 导航显示隐藏

  $("#mobile-nav").on('click', function () {
    $("#pop-nav").toggle();
  });

  //输出test接口
  exports('index', {});
});  
