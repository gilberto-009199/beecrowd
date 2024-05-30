package algoritm;

import static java.lang.System.out;

import java.util.Scanner;
import java.util.stream.IntStream;

public class Ex1067 {

	public static void main(String... args) {
		var reader = new Scanner(System.in);
		
		int X = reader.nextInt(), START = 1;
		var range  = IntStream.range(START, X + 1);
		
		for(var number : range.toArray()) {
			if( number % 2 != 0 )out.println(number);
		}
		
		reader.close();
	}

}
