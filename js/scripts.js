var faves = [];
var faves2 = [];

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    faves.push($("#animal").val());
    faves.push($("#food").val());
    faves.push($("#country").val());
    faves.push($("#sport").val());
    alert(faves);

    faves2.push(faves[1]);
    faves2.push(faves[0]);
    faves2.push(faves[2]);
    alert(faves2);

    $("#list").append("<li>" + faves2[0] + "</li>");
    $("#list").append("<li>" + faves2[1] + "</li>");
    $("#list").append("<li>" + faves2[2] + "</li>");
  });

});
