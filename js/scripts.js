$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const pNoun1 = $("input#pNoun1").val();
    const pNoun2 = $("input#pNoun2").val();
    const bodyPart1= $("input#bodyPart1").val();
    const number = $("input#number").val();
    const pNoun3 = $("input#pNoun3").val();
    const bodyPart2 = $("input#bodyPart2").val();
    const liquid1 = $("input#liquid1").val();
    const bodyPart3 = $("input#bodyPart3").val();
    const bodyPart4 = $("input#bodyPart4").val();
    const adjective1 = $("input#adjective1").val();
    const pNoun4 = $("input#pNoun4").val();
    const adjective2 = $("input#adjective2").val();
    const adjective3 = $("input#adjective3").val();
    const verb = $("input#verb").val();
    const noun1 = $("input#noun1").val();
    const pNoun5 = $("input#pNoun5").val();
    const noun2 = $("input#noun2").val();

    $(".pNoun1").text(pNoun1);
    $(".pNoun2").text(pNoun2);
    $(".bodyPart1").text(bodyPart1);
    $(".number").text(number);
    $(".pNoun3").text(pNoun3);
    $(".bodyPart2").text(bodyPart2);
    $(".liquid1").text(liquid1);
    $(".bodyPart3").text(bodyPart3);
    $(".bodyPart4").text(bodyPart4);
    $(".adjective1").text(adjective1);
    $(".pNoun4").text(pNoun4);
    $(".adjective2").text(adjective2);
    $(".adjective3").text(adjective3);
    $(".verb").text(verb);
    $(".noun1").text(noun1);
    $(".pNoun5").text(pNoun5);
    $(".noun2").text(noun2);
    
    $("#story").show();
  });
});