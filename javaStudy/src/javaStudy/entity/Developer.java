package javaStudy.entity;

public class Developer extends People {
	String languageSkill;
	String company;
	String developPosition;
	
	Developer(String name,String gender, String company){
		super(name, gender);
		this.company = company;
	}
}


