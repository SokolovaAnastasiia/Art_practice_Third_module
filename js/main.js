$(document).ready(function(){
   
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

  // setInterval(checkValues, 1000);


});