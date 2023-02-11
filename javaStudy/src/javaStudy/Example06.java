package javaStudy;

// 상속을 사용하는 이유
class People{
	String name;
	String gender;
	int age;
	String address;
	String email;
	
	public People(String name,String gender) {
		super();
		this.name = name;
		this.gender = gender;
	}
	void eatBreakfast() {
		System.out.println("7시에 아침밥을 먹습니다.");
	}
	
}

class Developer extends People{
	String languageSkill;
	String company;
	String developPosition;
	
	Developer(String name,String gender, String company){
		super(name, gender);
		this.company = company;
	}

	
}

class Police extends People{
	String jurisdiction; // 관할
	String officePosition;
	
	Police(){
		super("John", "man");
	}
}

class BusDriver extends People{
	String vehicleModel;
	String busNumber;
	
	BusDriver(){
		super("John", "man");
	}
	void eatBreakfast() {
		System.out.println(super.name + "는 8시에 아침밥을 먹습니다.");
	}
}	

public class Example06 {

	public static void main(String[] args) {
		Developer developer = new Developer(null, null, null);
		Police police = new Police();
		BusDriver busdriver = new BusDriver();
		
		// 참조형 변수에서 데이터가 미정인 상태일 때 null
		String str = null;
		
		System.out.println(developer.name);
		developer.eatBreakfast();
		police.eatBreakfast();
		busdriver.eatBreakfast();
		
		
	}

}
