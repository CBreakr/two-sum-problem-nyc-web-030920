
function bruteForceTwoSum(array, sum){
    const sums = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === sum){
                sums.push([array[i], array[j]]);
            }
        }
    }

    return sums;
}

function binarySearchTwoSum(array, sum){
    const sums = [];
    const sorted = array.sort();

    for(let i = 0; i < array.length-1; i++){
        const val = array[i];
        if(search(sorted, sum-val, i+1, array.length-1)){
            sums.push([val, sum-val]);
        }
    }

    return sums;
}

function binaryMatch(sorted, val){
    return search(sorted, val, 0, sorted.length-1);
}

function search(sorted, val, min, max){
    if(min === max){
        return sorted[min] === val;
    }
    else{
        const mid = Math.floor((min+max)/2);
        const midVal = sorted[mid];
        if(midVal === val){
            return true;
        }
        else if (val < midVal){
            return search(sorted, val, min, mid);
        }
        else{
            return search(sorted, val, mid+1, max);
        }
    }
}

function hashTwoSum(array, sum){
    const sums = [];
    const hash = {};

    array.forEach(val => {
        if(hash[sum - val]){
            sums.push([sum-val, val]);
            delete hash[sum-val];
        }
        else{
            hash[val] = 1;
        }
    });

    return sums;
}