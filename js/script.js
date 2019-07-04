$(function () {
  var $mainNavBtn = $('#main-nav-toggle'),
    $navShape = $("#navShape"),
    $mobileNav = $("#mobile-nav");
  $mainNavBtn.on('click', function () {
    if (!$mobileNav.hasClass('slideInLeft')) {
      $mobileNav.show().removeClass('slideOutLeft').addClass('animated slideInLeft')
      $navShape.show().removeClass('fadeOut').addClass("animated fadeIn")
    } else {
      $mobileNav.removeClass('slideInLeft').addClass('animated slideOutLeft')
      $navShape.removeClass('fadeIn').addClass("animated fadeOut")
      setTimeout(function () {
        $navShape.hide()
        $mobileNav.hide()
      }, 200);
    }
  });
  $navShape.on("click", function () {
    $mainNavBtn.trigger('click')
  })
})