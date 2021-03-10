    var animations = [];

    export const mergeSort = (arr, start, end, call, first) => {

        if(first) {
            animations = [...arr];
        }

        const half = Math.floor(arr.length / 2);

        if(arr.length < 2){
            return arr;
        }
        
        const left = arr.splice(start, half);
        const l = mergeSort(left,start, half, call, false);
        const r = mergeSort(arr, half, end, call, false);
        return merge(l, r, start, call);    

    }

    const merge = (left, right, start, call) => {
        let arr = [];
        while (left.length && right.length) {

            if (left[0] < right[0]) {
                arr.push(left.shift());
            } 
            else {
                arr.push(right.shift());
            }
        }
        const result = [ ...arr, ...left, ...right ];
        const isLast = result.length === animations.length;

        setTimeout(() => {
                animations.splice(start, arr.length, ...arr);
                call(animations, start, isLast, arr.length);
        }, 1);
        setTimeout(() => {
                 animations.splice(start+arr.length, left.length, ...left);
                 call(animations, start, isLast, left.length);
         }, 1);
         setTimeout(() => {    
                 animations.splice(start+left.length, result.length, ...result);
                 call(animations, start, isLast, right.length);
         }, 1);
        
        return result;
    }

