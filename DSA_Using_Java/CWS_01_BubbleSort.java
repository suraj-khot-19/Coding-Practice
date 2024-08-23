package DSA;

public class CWS_01_BubbleSort {
    public static void main(String[] args) {
        int[] arr={80,60,70,40,10,-5,-45,8888,-8888};
        int n = arr.length;//length of array
        //for loop till length-1
        for(int i=0;i<n-1;i++){
            //for loop till length-1
            for (int j=0;j<n-1;j++){
                //swap if first element is greater
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        //now printing sorted array
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
