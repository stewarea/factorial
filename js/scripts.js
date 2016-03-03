function factorial(a) {
  var number = 1;
  for (i = a; i > 1; i--)
  {
    number = number * i;
  }
  return number;
}

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var a = parseInt($("input#number").val());
    var result = factorial(a);

    $("#factorialdisplay").text(result);

    $("#result").show();

    event.preventDefault();

  })
});
