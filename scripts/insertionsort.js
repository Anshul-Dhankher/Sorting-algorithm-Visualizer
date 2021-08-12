/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/

//arr_size[] values of bars
//arr[] div elements in cont.
//array_size size of array
//update_color_height(ele,color,height)

function is()
{
  delay=0;
  update_color_height(arr[0],"green",arr_size[0]);
  for(var i=1;i<array_size;i++)
  {
    var j=i-1;
    var ele=arr_size[i];
    update_color_height(arr[i],"red",arr_size[i]);
    while(j>=0&&arr_size[j]>ele)
    {
      arr_size[j+1]=arr_size[j];
      if(j+1!=i)
      {
        update_color_height(arr[j+1],"yellow",arr_size[j+1]);
        update_color_height(arr[j+1],"blue",arr_size[j+1]);
      }
      else
      update_color_height(arr[j+1],"red",arr_size[j+1]);


      j--;

    }
    arr_size[j+1]=ele;
    update_color_height(arr[j+1],"red",arr_size[j+1]);

    for(var k=0;k<=i;k++)
    update_color_height(arr[k],"green",arr_size[k]);
  }
}
