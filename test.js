$(document).ready(function() {
  $('a.imatestjoo').click(function() {
    alert('Under Construction');
  });
  
  var now = new Date();
  if(now.getHours() >= 12)
  {
    var goodDay = $('p[title="blah"]');
    goodDay.text('Good Afternoon');
  }
  
  jQuery.cssRule("p.imscared", "display", "none");
  
  $("h3.head").click(function() {
    $(this).next("div.body").slideToggle(700).siblings("div.body").slideUp("slow");
  });
});