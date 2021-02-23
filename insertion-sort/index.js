class InsertionSort {
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const valueToChange = arr[i];
      let j = i - 1;
      while (j >= 0 && valueToChange < arr[j]) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = valueToChange;
    }
  }
}

const insertionSort = new InsertionSort();
const arr = [4, 3, 2, 10, 12, 1, 5, 6];
insertionSort.insertionSort(arr);
console.log(arr);
