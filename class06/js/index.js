//document 가 준비되면 함수를 실행합니다.
//절차지향
$(document).ready(function() {
  function scrollEvent() {
    var scrollPos = $(document).scrollTop();
    var perPos = $("#skill_wrapper").position().top;
    var winHeight = $("html").innerHeight() / 2;
    if (scrollPos+winHeight > perPos) {
      skillAnimation();
    } else {
      return false;
    };
  };
  function skillAnimation(){
    var targetEl = $(".skill_max");
    targetEl.each(function(i){
      var $this = $(this);
      var percentage = $this.attr("data");
      if($this.hasClass("on")) {
        return false;
      } else {
        $this.addClass("on");
        $(".skill_per_txt > span", $this).append(percentage)
        $(".skill_per",$this).delay(300 * i).animate({
          "width" : percentage
        }, 1000)
      }
    });
  };
  $(document).scroll(function() {
    scrollEvent();
  });
  scrollEvent();
});