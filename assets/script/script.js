$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $("html, body").animate(
        {
          scrollTop: $target.offset().top,
        },
        500,
        "swing"
      );
    });
  });