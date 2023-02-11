package javaStudy.entity;

public class People {
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
