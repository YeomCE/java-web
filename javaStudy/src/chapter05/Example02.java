package chapter05;

abstract class SuperClass{
	abstract void superMethod() ;
}


class SubClass extends SuperClass{
	@Override // 오버라이드임을 명시
	void superMethod() {
		System.out.println("자손 메서드");
	}
}

public class Example02 {

	// enum : 열거형
	enum EXAMPLE_ENUM {FIRST(1), SECOND(2), THIRD(3);

	EXAMPLE_ENUM(int i) {

		}
	};
	
	
	
	static final int FIRST = 0;
	static final int SECOND = 1;
	static final int THIRD = 2;
	
	public static void main(String[] args) {
		System.out.println(EXAMPLE_ENUM.FIRST);
		
	}

}
