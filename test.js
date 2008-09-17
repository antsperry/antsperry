$(document).ready(function() {
  $('a.imatestjoo').click(function() {
    alert('Under Construction');
  });
});


$(document).ready(function() {
var now = new Date();
if(now.getHours() >= 12)
{
  var goodDay = $('p[title="blah"]');
  goodDay.text('Good Afternoon');
}
});

$(document).ready(function() {
  jQuery.cssRule("p.imscared", "display", "none");
});