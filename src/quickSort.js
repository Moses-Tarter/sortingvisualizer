

export const QuickSort = (arr, start, end, callback, isFirst) => {

    if(arr.length > 1){

        const index = partition(arr, start, end, callback);

        if(start < index - 1) {
            QuickSort(arr, start, index - 1, callback, false);
        }
        if(index < end) {
            QuickSort(arr, index, end, callback, false);
        }

    }

    return arr;
}

const partition = (arr, start, end, callback) => {

    var pivot = arr[Math.floor((start + end) / 2)];
    var i = start;
    var j = end;

    while(i <= j) {

        while(arr[i] < pivot) {
            i++;
        }

        while(arr[j] > pivot) {
            j--;
        }

        if(i <= j) {
            swap(arr, i, j, callback);
            i++;
            j--;        }
    }

    return i;

}

const swap = (arr, i, j, callback) => {

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
    callback(arr, i,  true, 1);    
   
        
}