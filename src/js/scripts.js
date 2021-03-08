require('jquery/dist/jquery.js')
require('./partials/bootstrap.js')
require('./partials/plugins.js')
require('./partials/custom.js')
require('./partials/vue.js')
// $(function () {
//   // Smooth Scroll
//   $('.navbar a[href*=#]').bind('click', function(e){
//     var anchor = $(this)
//     $('html, body').stop().animate({
//       scrollTop: $(anchor.attr('href')).offset().top
//     }, 1000)
//     e.preventDefault()
//   })
// })

// jQuery(document).ready(function() {
//     // code from: https://www.sitepoint.com/community/t/collapsible-bootstrap-panels-not-collapsing-after-another-panel-is-selected/225826/2
//   jQuery('.panel-heading').click(function() {
//     jQuery('#accordion .panel-heading').not(this).removeClass('isOpen')
//     jQuery(this).toggleClass('isOpen')
//     jQuery(this).next('.panel-collapse').addClass('thePanel')
//     jQuery('#accordion .panel-collapse').not('.thePanel').slideUp(300)
//     jQuery('.thePanel').slideToggle(800).removeClass('thePanel')
//   })
// })

//add class in tabs 
$('#menu li a').click(function() {
  $('#menu li').removeClass('selected')
  $(this).parent().addClass('selected')
})
//scroll dowen
$('#section-1-scroll').click( function(e) {
  e.preventDefault()
  $('html, body').animate({
    scrollTop: $('#section-1').offset().top - 77
  }, 600)  
})
$('#section-2-scroll').click( function(e) {
  e.preventDefault()
  $('html, body').animate({
    scrollTop: $('#section-2').offset().top - 77
  }, 600)  
})
$('#section-3-scroll').click( function(e) {
  e.preventDefault()
  $('html, body').animate({
    scrollTop: $('#section-3').offset().top - 77
  }, 600)  
})




