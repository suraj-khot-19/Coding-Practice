package DSA;

public class CWS_03_InsertionSort {
    public static void main(String[] args) {
        int[] arr = { 10, 70, 14, -5, 7, 6 };
        // length of array
        int n = arr.length;
        // for loop from index 1(element 2) to array length
        for (int i = 1; i < n; i++) {
            // element at i
            int current = arr[i];
            // previous sorted elements position
            int j = i - 1;
            // if elment at i less than element at i-1 also checking array index never be
            // negative
            while (j >= 0 && current < arr[j]) {
                // if that swap the element with element at i with element at i-1
                arr[j + 1] = arr[j];
                j--;
            }
            // if not element at i as element at i
            arr[j + 1] = current;
        }
        for (int i : arr) {
            System.out.println(i);
        }
        // output
        // -5 6 7 10 14 70
    }
}
