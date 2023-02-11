package javaStudy.entity;


public class BusDriver extends People{
	String vehicleModel;
	String busNumber;
	
	BusDriver(){
		super("John", "man");
	}
	void eatBreakfast() {
		System.out.println(super.name + "는 8시에 아침밥을 먹습니다.");
	}
}	