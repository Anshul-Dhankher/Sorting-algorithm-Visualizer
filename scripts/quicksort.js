/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/

//arr_size[] values of bars
//arr[] div elements in cont.
//array_size size of array
//update_color_height(ele,color,height)


function qs()
{
    c_delay=0;
    quick_sort(0,array_size-1);
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = arr_size[start] ;
    update_color_height(arr[start],"yellow",arr_size[start]);

        for(var j =start + 1; j <= end ; j++ )
        {

            if (arr_size[ j ] < piv)
            {
                update_color_height(arr[j],"yellow",arr_size[j]);

                update_color_height(arr[i],"red",arr_size[i]);
                update_color_height(arr[j],"red",arr_size[j]);

                var temp=arr_size[i];
                arr_size[i]=arr_size[j];
                arr_size[j]=temp;

                update_color_height(arr[i],"red",arr_size[i]);
                update_color_height(arr[j],"red",arr_size[j]);

                update_color_height(arr[i],"blue",arr_size[i]);
                update_color_height(arr[j],"blue",arr_size[j]);

                i += 1;
            }
    }
    update_color_height(arr[start],"red",arr_size[start]);
    update_color_height(arr[i-1],"red",arr_size[i-1]);
    var tempe=arr_size[start];
    arr_size[start]=arr_size[i-1];
    arr_size[i-1]=tempe;

    update_color_height(arr[start],"red",arr_size[start]);
    update_color_height(arr[i-1],"red",arr_size[i-1]);

    for(var t=start;t<=i;t++)
    {
      update_color_height(arr[t],"green",arr_size[t]);

    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        var piv_pos = quick_partition (start, end ) ;
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
 }
