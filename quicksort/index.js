class QuickSort {
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  partition(arr, low, high) {
    const pivot = arr[high];
    let indexSmallestElement = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        indexSmallestElement++;
        this.swap(arr, indexSmallestElement, j);
      }
    }
    this.swap(arr, indexSmallestElement + 1, high);
    return indexSmallestElement + 1;
  }
  quickSort(arr, low, high) {
    if (low < high) {
      const pivotIndex = this.partition(arr, low, high);
      this.quickSort(arr, low, pivotIndex - 1);
      this.quickSort(arr, pivotIndex + 1, high);
    }
  }
}

const quickSort = new QuickSort();
const arr = [12, 7, 45, 6, 8334, 73];
quickSort.quickSort(arr, 0, arr.length - 1);
console.log(arr);
