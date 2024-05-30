package algoritm;

import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

public class Ex1065 {

	public static void main(String[] args) throws IOException {
		var reader = new Scanner(System.in);
		
        var vectNumber = new int[5];
        
        for(var i = 0; i < vectNumber.length; i++) {
        	vectNumber[i] = reader.nextInt();
        }
        
        // Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
        var count = Arrays.stream(vectNumber).filter(value -> value % 2 == 0).count();
        
        System.out.println(count +" valores pares");
        
    }

}
