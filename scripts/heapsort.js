/**
 *    Author:ANSHUL DHANKHER
 *     YMCA CE-2023
 *    KEEP HUSTLING!!!
**/



function hs()
{
    c_delay=0;
    heap_sort();
}

function swap(i,j)
{
  update_color_height(arr[i],"red",arr_size[i]);
  update_color_height(arr[j],"red",arr_size[j]);

    var temp=arr_size[i];
    arr_size[i]=arr_size[j];
    arr_size[j]=temp;

    update_color_height(arr[i],"red",arr_size[i]);
    update_color_height(arr[j],"red",arr_size[j]);

    update_color_height(arr[i],"blue",arr_size[i]);
    update_color_height(arr[j],"blue",arr_size[j]);
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && arr_size[l]>arr_size[largest])
    {
        if(largest!=i)
        {
            update_color_height(arr[largest],"blue",arr_size[largest]);
        }

        largest=l;

        update_color_height(arr[largest],"red",arr_size[largest]);
    }

    if(r<n && arr_size[r]>arr_size[largest])
    {
        if(largest!=i)
        {
            update_color_height(arr[largest],"blue",arr_size[largest]);
        }

        largest=r;

        update_color_height(arr[largest],"red",arr_size[largest]);
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var k=Math.floor(array_size/2)-1;k>=0;k--)
    {
        max_heapify(array_size,k);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        update_color_height(arr[i],"green",arr_size[i]);
        update_color_height(arr[i],"yellow",arr_size[i]);

        max_heapify(i,0);

        update_color_height(arr[i],"blue",arr_size[i]);
        update_color_height(arr[i],"green",arr_size[i]);
    }
    update_color_height(arr[i],"green",arr_size[i]);

}
