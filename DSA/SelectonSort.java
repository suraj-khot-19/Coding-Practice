package DSA;
class SelectionSort {
    public static void main(String args[]) {
        int[] arr = new int[] { 10, 20, 30, 0, -45, -120 };
        // length of array
        int n = arr.length;
        // for loop till length-1
        for (int i = 0; i < n - 1; i++) {
            int smallest = i;
            // for loop till length with starting index from i+1
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[smallest]) {
                    smallest = j;
                }
            }
            // always swaping number if smaller or not
            int temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
        for (int i : arr) {
            System.out.println(i);
        }
        //-120 -45 0 10 20
    }
}