/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/

//arr_size[] values of bars
//arr[] div elements in cont.
//array_size size of array
//update_color_height(ele,color,height)



function ss()
{
  delay=0;
  for(var i=0;i<array_size-1;i++)
  {
    var min_pointer=i+1;
    update_color_height(arr[i],"red",arr_size[i]);
    for(var j=i+1;j<array_size;j++)
    {
      update_color_height(arr[j],"yellow",arr_size[j]);
      if(arr_size[j]<arr_size[min_pointer])
      {
        update_color_height(arr[min_pointer],"blue",arr_size[min_pointer]);
        min_pointer=j;
        update_color_height(arr[min_pointer],"red",arr_size[min_pointer]);
      }
      else{
      update_color_height(arr[j],"blue",arr_size[j]);
    }
    }
    if(min_pointer!=i)
    {
      update_color_height(arr[i],"red",arr_size[i]);
      update_color_height(arr[min_pointer],"red",arr_size[min_pointer]);

      var temp=arr_size[i];
      arr_size[i]=arr_size[min_pointer];
      arr_size[min_pointer]=temp;

      update_color_height(arr[i],"blue",arr_size[i]);
      update_color_height(arr[min_pointer],"blue",arr_size[min_pointer]);

    }
    update_color_height(arr[i],"green",arr_size[i]);

  }
  update_color_height(arr[array_size-1],"green",arr_size[array_size-1]);
}
