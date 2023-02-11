package javaStudy;

class Juice {
	String name;
	String company;
	int kcal;
	int volume;
	
	// 생성자 : 인스턴스가 생성될 때 초기화를 위해 주로 사용
	Juice(){
		name = "coke";
		company = "coke-cola";
		kcal = 200;
		volume = 500;
	}
	

	public Juice(String name, String company, int kcal, int volume) {
		super();
		this.name = name;
		this.company = company;
		this.kcal = kcal;
		this.volume = volume;
	}

	void drink (int ml) {
		System.out.println("int drink!");
		volume -= ml;
		System.out.println(volume);
	}
	
	void drink(float ml) {
		System.out.println("float drink!");
		volume -= ml;
		System.out.println(volume);
	}
	
	void drink (int ml1, int ml2) {
		System.out.println("int int drink!");
		volume -= (ml1 + ml2);
		System.out.println(volume);
		
	}
	
	
}



public class Example05 {

	public static void main(String[] args) {
		Juice juice = new Juice();
		juice.name = "보성홍차";
		juice.company = "동원";
		juice.kcal = 0;
		juice.volume = 500;
		
		Juice cola = new Juice("coke", "coca-cola", 200, 1000);
		System.out.println(cola.volume);
		
		
		cola.drink(100);
		cola.drink(50.5F);
		cola.drink(50,50);
		
	}

}
