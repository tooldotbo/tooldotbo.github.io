

layui.define(['element', 'form', 'laypage', 'jquery', 'laytpl'], function (exports) {
  var element = layui.element
    , form = layui.form
    , laypage = layui.laypage
    , $ = layui.jquery
    , laytpl = layui.laytpl;

    
  // start 导航显示隐藏

  $("#mobile-nav").on('click', function () {
    $("#pop-nav").toggle();
  });
});  
