package algoritm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.IntPredicate;

public class Ex3059 {

	
	@FunctionalInterface
	interface SumInRange{
		boolean is(int sum);
	}
	
	public static void main(String[] args) {
		
		var reader = new Scanner(System.in);
		var input = reader.nextLine().split(" ");
		// DEFINES
		int N = Integer.parseInt(input[0]),
			I = Integer.parseInt(input[1]),
			F = Integer.parseInt(input[2]);
		
		SumInRange numberMinIAndMaxF = sum -> sum >= I && sum <= F;
        
		
		// Vect Numbers
		input = reader.nextLine().split(" ");
		var vectNumbers = Arrays.stream(input).mapToInt(Integer::parseInt).toArray();
		int countPairs = 0;
		/* Solução 1 interar sobre todos n * n = n² */
		
		for(int i = 0; i < vectNumbers.length; i++) {
			for(int j = i+1; j < vectNumbers.length; j++) {
				int sum = vectNumbers[i] + vectNumbers[j];
				if(numberMinIAndMaxF.is(sum))countPairs++;
			}
		}/**/
		
		// Imprimir uma única linha contendo um inteiro indicando quantos pares de inteiros no vetor somam pelo menos I e no máximo F
		System.out.println(countPairs);
		
		
	}

	
	
}
