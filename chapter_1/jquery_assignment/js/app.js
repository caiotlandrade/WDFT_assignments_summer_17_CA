//Write your jQuery code in this file
$("#edit-header").html("The jQuery Challenge");

// change color of box1
$("#box1").css({"background": "green"});

// change font-weight and the font-size of the text
$("#para1").css({"font-size": "x-large", "font-weight": "bold;"});

// make the box spin
$(".box2").addClass("spin");

// create alert after click
$( "#button1" ).click(function afterClick() {
  alert( "Hi, Alice!!!" );
});

// change color of box on hover
$("#box3").hover(
  function hoverBox() {
    $("#box3").css({"background": "green"});
  }, function() {
    $("#box3").css({"background": "red"});
  }
);

// console log the value inside the input box
$("#input1").keyup(function() {
  console.log($("#input1").val());
});

// move box
$("#box4").animate({
    top: "+=149", // subtracted 1px to make sure
    left: "+=399" // the box doesn't leave the boundaries
  }, {
    duration: 1200,
    });