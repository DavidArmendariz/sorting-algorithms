class SelectionSort {
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentMinimum = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[currentMinimum] > arr[j]) {
          currentMinimum = j;
        }
      }
      this.swap(arr, i, currentMinimum);
    }
  }
}

const selectionSort = new SelectionSort();
const arr = [1, 65, 4, 23, 56, 3];
selectionSort.selectionSort(arr);
console.log(arr);
