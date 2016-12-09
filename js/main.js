(function(){
 // 点击左侧目录
 $(".left-nav li").click(function(e){
    e.stopPropagation();
    _thatLI = $(this);
    $(".left-nav").find("li").removeClass("active")
    _thatLI.addClass("active");
    // 更改右侧表格
    if ( !_thatLI.hasClass("nosub")){
       $(".right").find(".commonHeader").hide();
        var myId = _thatLI.attr("data-id");
        $(".commonHeader").each(function(){
            var id = $(this).attr("id");
            if (myId == id) {
                var b = $(this);
                $(this).show();
                return false;
            }
        })
    }

 })

 $(".pull-left-icon").click(function(e){
    e.stopPropagation();
    $(".left").animate({left:'-125px'}).css("position","absolute");
    $(".pull-right-icon").show();
 })
  $(".pull-right-icon").click(function(e){
    e.stopPropagation();
   $(".left").animate({left:'0'}).css("position","relative");;
   $(".pull-right-icon").hide();
 })
   $(".nosub").click(function(e){
    e.stopPropagation();
    $(".right").find(".commonHeader").show();
 })
})()
