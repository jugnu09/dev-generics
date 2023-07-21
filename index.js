
export function isArrayHasDuplicateItem(array) {
    const uniqueSet = new Set(array);
    const isArrayUnique = uniqueSet.size!== array.length;
}
