/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/


//arr_size[] values of bars
//arr[] div elements in cont.
//array_size size of array
//update_color_height(ele,color,height)


function bs()
{
  delay=0;
  for(var i=0;i<array_size;i++)
  {
    for(var j=0;j<array_size-i-1;j++)
    {
      update_color_height(arr[j],"yellow",arr_size[j]);//intial yellow pointer
      if(arr_size[j]>arr_size[j+1])
      {
        update_color_height(arr[j],"red",arr_size[j]);//found a break
        update_color_height(arr[j+1],"red",arr_size[j+1]);//found a break
        var temp=arr_size[j];
        arr_size[j]=arr_size[j+1];
        arr_size[j+1]=temp;

        update_color_height(arr[j],"red",arr_size[j]);//change sizes
        update_color_height(arr[j+1],"red",arr_size[j+1]);//change sizes

      }
      update_color_height(arr[j],"blue",arr_size[j]);//revert back
      update_color_height(arr[j+1],"blue",arr_size[j+1]);//revert back

    }
    update_color_height(arr[array_size-1-i],"green",arr_size[j]);


  }
  update_color_height(arr[0],"green",arr_size[0]);

}
