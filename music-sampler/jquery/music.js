$(document).ready(() => {

$('.song1everything').hide();
  $('.song1image').on('click', () => {
    $('.song1everything').show();
  });

$('.song2everything').hide();
$('.song2image').on('click', ()=> {
  $('.song2everything').show();
});

$('.song3everything').hide();
$('.song3image').on('click', ()=> {
  $('.song3everything').show();
});

$('.song4everything').hide();
$('.song4image').on('click', () => {
  $('.song4everything').show();
});

switch ($(this).attr("class")) {
  case "song1":
  $(".song1everything").show();
  $(".song2everything").hide();
  $(".song3everything").hide();
  $(".song4everything").hide();
  break;
  case "song2":
  $(".song2everything").show();
  $(".song1everything").hide();
  $(".song3everything").hide();
  $(".song4everything").hide();
  break;
  case "song3":
  $(".song3everything").show();
  $(".song1everything").hide();
  $(".song2everything").hide();
  $(".song4everything").hide();
  break;
  case "song4":
  $(".song4everything").show();
  $(".song1everything").hide();
  $(".song2everything").hide();
  $(".song3everything").hide();
  break;
}

  });
