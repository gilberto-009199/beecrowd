package algoritm;


public class Ex1059 {

	
	@FunctionalInterface
	interface IsMultipleOfTwo{ boolean check(int sum);}
	
	public static void main(String[] args) {
		
		// DEFINES
		int START = 1,
			FINAL = 100;
		
		IsMultipleOfTwo isMultipleOfTwo = n -> (n % 2 == 0);
        
		
		/* Solução 1 interar sobre todos de START ate FINAL 
		
		for(int i = START; i <= FINAL; i++) {
			if(isMultipleOfTwo.check(i)) {
				System.out.println(i);
			}
		}/**/
		
		/* Solução 2 interar sobre todos de START ate FINAL usando +2 */ 
		var initMultipleOfTwo = isMultipleOfTwo.check(START) ? START : START+1;
		for(int i = initMultipleOfTwo; i <= FINAL; i+= 2) {
			if(isMultipleOfTwo.check(i)) {
				System.out.println(i);
			}
		}/**/
		
	}

	
	
}
