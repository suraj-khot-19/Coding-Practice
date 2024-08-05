package DSA;

public class CWS_04_QuickSort {
    // function for partition
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        // dividing array with resepect to pivot
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                // make emt space
                i++;
                // swap
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // now add pivot to its correct position
        // make emt space
        i++;
        int temp = arr[i];
        arr[i] = arr[high];
        arr[high] = temp;
        return i;// pivot index
    }

    // recursive function for sort
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            // recursive sort for smaller elemenets from pivot
            quickSort(arr, low, pivotIndex - 1);

            // recursive sort for higher elemenets from pivot
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    //main
    public static void main(String[] args) {

        int[] arr = { 5, 3, 4, 7, 15, 8 };
        // length
        int n = arr.length;
        // fn call
        quickSort(arr, 0, n - 1);
        // print
        for (int i : arr) {
            System.out.println(i);
        }
        //output
        //3 4 5 7 8 15
    }
}
