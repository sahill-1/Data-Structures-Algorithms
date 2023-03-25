// Rearrange array in such a way that elements at Even index are Smaller and elements at Odd index are Greater


function rearrangeElements(arr, n) {
    let temp;

    for (let i = 0; i < n - 1; i++) {
        if (i % 2 === 0 && arr[i] >= arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        if (i % 2 !== 0 && arr[i] <= arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    console.log("After Rearranging the array - " + arr )
}

let arr = [6, 4, 2, 1, 8, 3];
console.log("Before Rearranging the array - " + arr);
rearrangeElements(arr, arr.length);