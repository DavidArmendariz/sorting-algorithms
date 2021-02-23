class BubbleSort {
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1);
        }
      }
    }
  }
}

const bubbleSort = new BubbleSort();
const arr = [1, 67, 4, 2, 5, 3];
bubbleSort.bubbleSort(arr);
console.log(arr);
