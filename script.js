$(".start").click(function() {
    $(".start").hide();
    $(".toftext").css("visibility", "visible");
    $(".q1").css("visibility", "visible");
    $(".tof1").css("visibility", "visible");
    $(".question2").hide();
    $(".searchtitle").hide();
    $(".blackscreenwrong").hide();
});

$(".a1a").click(function() {
    $(".question1").hide();
    $(".end").css("visibility", "visible");
    $(".toftext").hide();
});

$(".a1b").click(function() {
    $(".question1").hide();
    $(".question2").show();
    $(".q2").css("visibility", "visible");
    $(".tof2").css("visibility", "visible");
});

$(".a2a").click(function() {
    $(".question2").hide();
    $(".toftext").hide();
    $("body").css("background-color", "black");
    $(".searchtitle").show();
    $(".blackscreenwrong").show();
    $(".blackscreensearch").css("visibility", "visible");
});

$(".a2b").click(function() {
    $(".question2").hide();
    $(".end").css("visibility", "visible");
    $(".toftext").hide();
});

$(".no1").hover(function() {
    $(".no1").css("color", "red");
});

$(".no2").hover(function() {
    $(".no2").css("color", "red");
});

$(".no3").hover(function() {
    $(".no3").css("color", "red");
});
$(".yes1").hover(function() {
    $(".yes1").css("color", "green");
});
$(".no5").hover(function() {
    $(".no5").css("color", "red");
});

$(".yes1").dblclick(function() {
    $(".blackscreensearch").hide();
    $("body").css("background-color", "white");
    $(".win").css("visibility", "visible");
    $(".secrettext").css("visibility", "visible");
});

$(".secrettext").click(function() {
    $(".secrettext").hide();
    $(".win").hide();
    $(".toftext").show();
    $(".secretquestions").css("visibility", "visible");
});

$(".a3a").click(function() {
    $(".trueend").css("visibility", "visible");
    $(".secretquestions").hide();
    $(".toftext").hide();
});

$(".a3b").click(function() {
    $(".secretquestions").hide();
    $(".toftext").hide();
    $(".end").css("visibility", "visible");
});

$(".trueendimg").hide();

$(".trueend").click(function() {
    $(".trueendimg").fadeIn();
});