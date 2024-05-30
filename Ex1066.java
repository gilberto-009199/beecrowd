package algoritm;

import java.util.Arrays;
import java.util.Scanner;

import static java.lang.System.out;

public class Ex1066 {

	public static void main(String... args ) {
		var reader = new Scanner(System.in);
		final var COUNT_NUMBERS = 5;
		
		var vectNumbers = new int [COUNT_NUMBERS];
		
		for(int i = 0; i < vectNumbers.length; i++) {
			vectNumbers[i] = reader.nextInt();
		}
		
		final var countMultipleOfTwo 		= Arrays.stream(vectNumbers).filter(n -> n % 2 == 0 ).count();
		final var countNoMultipleOfTwo 		= Arrays.stream(vectNumbers).filter(n -> n % 2 != 0 ).count();
		final var countNumberGreatedZero 	= Arrays.stream(vectNumbers).filter(n -> n > 0 ).count();
		final var countNumberLessZero 		= Arrays.stream(vectNumbers).filter(n -> n < 0 ).count();
		
		out.println(countMultipleOfTwo		+" valor(es) par(es)");
		out.println(countNoMultipleOfTwo	+" valor(es) impar(es)");
		out.println(countNumberGreatedZero	+" valor(es) positivo(s)");
		out.println(countNumberLessZero		+" valor(es) negativo(s)");
	
		reader.close();
	}
}
