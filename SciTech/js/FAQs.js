// JavaScript for FAQ Section
$(document).ready(function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).prev('.panel-heading').addClass('active');
    });
  
    $('.panel-collapse').on('hide.bs.collapse', function () {
      $(this).prev('.panel-heading').removeClass('active');
    });
  });
  