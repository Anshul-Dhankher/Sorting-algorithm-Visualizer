/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/


var speed=10;
input_speed.addEventListener('input',changespeed);

function changespeed()
{
  var input_val=parseInt(input_speed.value);
  if(input_val==1)
  {
    speed=1000;
  }
  else if(input_val==2)
  {
    speed=500;
  }
  else if(input_val==3)
  {
    speed=100;
  }
  else if(input_val==4)
  {
    speed=10;
  }
  else if(input_val==5)
  {
    speed=1;
  }

}



var delay=0;

function update_color_height(ele,color,height)
{
  window.setTimeout(function(){
ele.style= "margin:0% " + margin_size + "%; background-color:"+color+"; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (height) + "%;";
},delay+=speed);
}
