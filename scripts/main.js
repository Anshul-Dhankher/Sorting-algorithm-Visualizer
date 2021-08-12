/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/



var input_size=document.getElementById('input_size'),array_size=input_size.value;//size_input from slider
var input_gen=document.getElementById('new_gen');//random array genrator
var input_speed=document.getElementById('input_speed');//input_speed from speed slider

var arr=[];//actual div bars in array_container
var arr_size=[];//there integer values

 var margin_size=0.1;//always 0.1 %

 var algo_buttons=document.querySelectorAll('.algo_buttons');//6 button array
 var cont=document.getElementById('cont');//main container of array
 cont.style="flex-direction:row";//important for new bar genration

 input_gen.addEventListener('click',genarr);
 input_size.addEventListener('input',upd);

// random number generations of array_size
 function genarr()
 {
   cont.innerHTML="";
   //console.log(array_size);
   for(var i=0;i<array_size;i++)
   {
     arr_size[i]=Math.floor(Math.random() * 0.5*(input_size.max - input_size.min) ) + 20;
     arr[i]=document.createElement("div");
     cont.appendChild(arr[i]);
     arr[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (arr_size[i]) + "%;";

   }
 }
//if we change value of input array size it will automatically run another random array of slider size
 function upd()
 {
   array_size=input_size.value;
   genarr();
 }

 window.onload=upd();//on screen load automatically call this

//event listner for all these algos

 for(var i=0;i<6;i++)
 {
   algo_buttons[i].addEventListener('click',run);
 }

function run()
{
  var curr=this.innerHTML;
  if(curr=="bubble")
  bs();
  else if(curr=="selection")
  ss();
  else if(curr=="insertion")
  is();
  else if(curr=="heap")
  hs();
  else if(curr=="merge")
  ms();
  else
  qs();
}
