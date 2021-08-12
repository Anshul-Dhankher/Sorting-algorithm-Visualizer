/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/


//arr_size[] values of bars
//arr[] div elements in cont.
//array_size size of array
//update_color_height(ele,color,height)

function ms()
{
    delay=0;
    merge_partition(0,array_size-1);
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=arr_size[q++];
            update_color_height(arr[q-1],"red",arr_size[q-1]);
        }
        else if(q>end)
        {
            Arr[k++]=arr_size[p++];
            update_color_height(arr[p-1],"red",arr_size[p-1]);
        }
        else if(arr_size[p]<arr_size[q])
        {
            Arr[k++]=arr_size[p++];
            update_color_height(arr[p-1],"red",arr_size[p-1]);
        }
        else
        {
            Arr[k++]=arr_size[q++];
            update_color_height(arr[q-1],"red",arr_size[q-1]);
        }
    }

    for(var t=0;t<k;t++)
    {
        arr_size[start++]=Arr[t];
        update_color_height(arr[start-1],"green",arr_size[start-1]);//Color update green sorted part
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        update_color_height(arr[mid],"yellow",arr_size[mid]);//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
