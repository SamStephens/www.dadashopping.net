$(document).ready(function () 
{
  initPrettyPhoto();
  addRoundedCorners();
});

function initPrettyPhoto()
{
  $("a[rel^='prettyPhoto']").prettyPhoto({
    animationSpeed: 'normal', /* fast/slow/normal */
    padding: 40, /* padding for each side of the picture */
    opacity: 0.7, /* Value betwee 0 and 1 */
    showTitle: false, /* true/false */
    allowresize: true, /* true/false */
    theme: 'dark_rounded', /* light_rounded / dark_rounded / light_square / dark_square */
    social_tools: '',
    deeplinking: false
  });
}

function addRoundedCorners()
{
  $(".right-border-nojs").removeClass("right-border-nojs").addClass("right-border-js");
  $(".left-border-nojs").removeClass("left-border-nojs").addClass("left-border-js");
  var cornerElements = $(".right-border-js, .right-border-js > div, .left-border-js, .left-border-js > div");
  cornerElements.prepend("<b class='btop'><b></b></b>");
  cornerElements.append("<b class='bbot'><b></b></b>");
}