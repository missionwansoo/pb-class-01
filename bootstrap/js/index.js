$(document).ready(function() {
  $(window).scroll(function() {
    navScrollEvent();
  });
  function navScrollEvent() {
    var scrollpos = $(window).scrollTop();
    var navEl = $(".navbar");
    if (scrollpos == 0) {
      navEl.css("background","");
    } else {
      if (navEl.css("background") == "#24355C") {
        return false;
      } else {
        navEl.css("background","#24355C");
      }
    }
  };
  navScrollEvent();
});