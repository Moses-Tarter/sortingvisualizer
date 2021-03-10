
export const bubbleSort = (arr, callback) => {

    const animations = [];
    const temparr = [...arr];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i; j++) {
            let temp = 0;
            if(temparr[j] > temparr[j+1]) { 
                temp = temparr[j];
                temparr[j] = temparr[j+1];
                temparr[j+1] = temp;
                animations.push(j);
            }         
        }    
    }
    animations.forEach((index, ind) => {
    let temp = 0;
    setTimeout(() => {
        temp = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = temp;
        if(ind === animations.length - 1)
            callback(arr, index, true, 1); 
        else
            callback(arr, index, false, 1); 
    }, 1);    
 });

}


