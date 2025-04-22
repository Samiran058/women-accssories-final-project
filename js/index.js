// console.log($)

$(function(){
$('#main').hide()
$('#toprated-section').hide()
$('.navlink2').click(function(){
  $('#main').show()
  $('#new_arrival_section').hide()
  $('#toprated-section').hide()
})
$('.navlink3').click(function(){
    $('#toprated-section').show()
    $('#new_arrival_section').hide()
    $('#main').hide()
  })
$('.navlink1').click(function(){
    $('#new_arrival_section').show()
    $('#toprated-section').hide()
    $('#main').hide()
  })
})
// more accessories js

