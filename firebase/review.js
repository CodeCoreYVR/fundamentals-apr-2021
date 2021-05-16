// Change circle colours to the value of the input using jQuery
// https://s3.amazonaws.com/codecore/jquery-lab/index.html
$('#form-1').on('submit', function(e) {
  const colour = $('input[type=text]').val()
  $('.circle').css('background-color', colour)
})