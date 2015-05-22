$(function() {
  $('article#entrypage').readingTime({
    lang: 'nl',
  });
});

$(function() {
  $("#archivemenu").show();  
  $("#archivemenu").bind("change", function() {
    document.location = jQuery("#archivemenu").val();
  });
});  
