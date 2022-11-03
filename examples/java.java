
// 1. Example ----------------------------

public class ReverseNumber {

  public static void main(String[] args) {

    //original number
    int number = 1234;
    int reversedNumber = 0;
    int temp = 0;

    while(number > 0){
      //use modulus operator to strip off the last digit
      temp = number%10;

      //create the reversed number
      reversedNumber = reversedNumber * 10 + temp;
      number = number/10;
    }

    //output the reversed number
    System.out.println("Reversed Number is: " + reversedNumber);
  }
}


// 2. Tests ----------------------------

public class Test {
  public void test(Object a) {
    System.out.println("hello");
    if(a instanceof String) {
      System.out.println("it's me");
    }
  }
}

/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}
