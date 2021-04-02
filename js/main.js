$(document).ready(function(){


setInterval(function(){
  let date = new Date();
  $("#time").html(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
}, 1000);

setInterval(function(){
  let num0 = $('.charge-percent div:nth-child(1)').html();
  let num1 = $('.charge-percent div:nth-child(2)').html();
  let num2 = $('.charge-percent div:nth-child(3)').html();
  let number = String(num0) + String(num1) + String(num2);
  $('.charge-percent div:nth-child(1)').html(0);
  number = parseInt(number);
  if (number > 0){
    number--;
    let digits = number.toString().split('');
    $('.charge-percent div:nth-child(2)').html(digits[0]);
    $('.charge-percent div:nth-child(3)').html(digits[1]);
  }
  else {
    $('.charge-percent div:nth-child(1)').html(1);
    $('.charge-percent div:nth-child(2)').html(0);
    $('.charge-percent div:nth-child(3)').html(0);
  }
  if (number >= 75) {
    $('.high div').css('background-color', '#4789BA');
    $('.comfort div').css('background-color', '#4789BA');
    $('.middle div').css('background-color', '#4789BA');
    $('.low div').css('background-color', '#4789BA');

  }
  if (number <75 && number >=50) {
    $('.high div').css('background-color', '#353841');
    $('.comfort div').css('background-color', '#27AE60');
    $('.middle div').css('background-color', '#27AE60');
    $('.low div').css('background-color', '#27AE60');
  }
  if (number <50 && number >=25) {
    $('.high div').css('background-color', '#353841');
    $('.comfort div').css('background-color', '#353841');
    $('.middle div').css('background-color', '#F2994A');
    $('.low div').css('background-color', '#F2994A');
  }
  if (number < 25) {
    $('.high div').css('background-color', '#353841');
    $('.comfort div').css('background-color', '#353841');
    $('.middle div').css('background-color', '#353841');
    $('.low div').css('background-color', '#EB5757');
  }
}, 2000);

setInterval(function(){
  $('.flasks div:nth-child(2) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(3) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(4) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(5) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(6) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(7) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(8) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
  $('.flasks div:nth-child(9) .flask-fuel-level').css('height', Math.floor(Math.random() * 101) + "%");
}, 4000);
   
  $(".progress").each(function(){
    let $bar = $(this).find(".bar");
    let $val = $(this).find("span");
    let perc = 10;

    
    $({p:10}).animate({p:perc}, {
      duration: 2000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p|0);
      }
    });
  }); 

  function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }

    if(angle < 0) angle +=360;
    return angle;
}

function checkValues(){
  let rotadeAngleSpeed = getRotationDegrees($('.speed .knob'));
  let rotadeAngleFuel = getRotationDegrees($('.ship-fuel .knob'));
  let rotadeAngleOxid = getRotationDegrees($('.oxid .knob'));
  let rotadeAnglePression = getRotationDegrees($('.pression .knob'));
  rotadeAngleSpeed = parseInt((rotadeAngleSpeed * 100) / 280);
  rotadeAngleFuel = parseInt((rotadeAngleFuel * 100) / 280);
  rotadeAngleOxid = parseInt((rotadeAngleOxid * 100) / 280);
  rotadeAnglePression = parseInt((rotadeAnglePression * 100) / 280);

  changeValue($('.speed .bar'), $('.speed .visualization-param span'), rotadeAngleSpeed);
  changeValue($('.ship-fuel .bar'), $('.ship-fuel .visualization-param span'), rotadeAngleFuel);
  changeValue($('.oxid .bar'), $('.oxid .visualization-param span'), rotadeAngleOxid);
  changeValue($('.pression .bar'), $('.pression .visualization-param span'), rotadeAnglePression);
}

function changeValue(a, b, x) {
  let bar = a;
  let val = b;
  let perc = parseInt( val.text(), 10);

      $({p:x}).animate({p:perc}, {
        duration: 10000,
        easing: "swing",
        step: function(p) {
          bar.css({
            transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
          val.text(p|0);
        }
      });
}

  setInterval(checkValues, 1000);

  $( '.toggle-btn' ).click(function() {
    $('.toggle-detail').toggleClass('chosen');
  });

$('.another-cams div:nth-child(1)').click(function(){
  $('.main-cam').css('backgroundImage', 'url(images/cam1.png)');
});

$('.another-cams div:nth-child(2)').click(function(){
  $('.main-cam').css('backgroundImage', 'url(images/cam2.png)');
});

$('.another-cams div:nth-child(3)').click(function(){
  $('.main-cam').css('backgroundImage', 'url(images/cam3.png)');
});

$('.another-cams div:nth-child(4)').click(function(){
  $('.main-cam').css('backgroundImage', 'url(images/cam4.png)');
});


$('.sos-btn').click(function(){
  $('.red-light').toggleClass('light-on');
});

$('.red-light').click(function(){
  $('.red-light').toggleClass('light-on');
})

});