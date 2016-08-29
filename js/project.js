$(document).ready(function(){

$("nav a").click(function(){
$("nav a.current").removeClass("current");
$(this).addClass("current");
});
function generateIpsum(num) {
var whichIpsum = $("nav a.current").attr("data-ipsum");
$("#" + whichIpsum).slideDown("slow"); 
$("#" + whichIpsum).children().slice(0, num).slideDown("slow");
}
function hideIpsum() {
var whichIpsum = $("nav a.current").attr("data-ipsum");
document.getElementById("paragraphs").value = ""; 
$(".ipsum").slideUp("slow");
}
$("button").click(function(){
var numberP = document.getElementById("paragraphs").value;
generateIpsum(numberP);
});
$("#paragraphs").focus(function(){
hideIpsum();
});
});