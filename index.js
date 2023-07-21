
export function isArrayHasDuplicateItem(array) {
    const uniqueSet = new Set(array);
    const isArrayUnique = uniqueSet.size!== array.length;
    return isArrayUnique;
}

export function getUniqueArray(array) {
    let uniqueArray =[];
    array.forEach((item) => {
      if(!(uniqueArray.indexOf(item) > -1)){
        uniqueArray.push(item);
      }
    })
    return uniqueArray;
}

export function getArraySum(array) {
    let sum = 0;
    array.forEach(item => {
        sum = sum+item;
    })
    return sum;
}
