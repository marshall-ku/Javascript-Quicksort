quicksort = (arr, l, r) => {
    let i;

    (l < r) &&
    (
        i =  position(arr, l, r),

        quicksort(arr, l, i - 1),
        quicksort(arr, i + 1, r)
    )

    return arr
},

position = (arr, l, r) => {
    let i = l,
        j = r,
        pivot = arr[l];

    for (;i < j;)
    {
        for (;arr[j] > pivot;) j--;
        for (;i < j && arr[i] <= pivot;) i++;
        tmp = arr[i], arr[i] = arr[j], arr[j] = tmp
    }
    return arr[l] = arr[j], arr[j] = pivot, j
};
