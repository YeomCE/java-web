package chapter03;

class Animal{
	String ears;
	String eyes;
	String legs;
	
}

class Bird extends Animal{
	String wings;
}

class Monkey extends Animal{
	String arms;
	
	Monkey(){}

	public Monkey(String ears, String eyes, String legs, String arms) {
		super.ears = ears;
		super.eyes = eyes;
		super.legs = legs;
		this.arms = arms;
	}
	
	
	
	
}


public class Polymorphism {
	public static void main(String[] args) {
		Animal bird = new Bird();
		bird.ears = "ears";
		bird.eyes = "eyes";
		bird.legs = "legs";
		
		Bird bird2 = (Bird) bird;
		bird2.wings = "wings";
		
		
		Monkey monkey1 = new Monkey("ears", "eyes", "legs", "arms");
		System.out.println(monkey1);
		System.out.println(monkey1.ears + " / " + monkey1.eyes + " / " + monkey1.legs + " / " + monkey1.arms);
		
		Animal animal1 = monkey1;
		System.out.println(animal1);
		System.out.println(animal1.ears + " / " + animal1.eyes + " / " + animal1.legs);
		
		System.out.println(animal1 instanceof Monkey);
		System.out.println(animal1 instanceof Animal);
		
		Monkey monkey2 = (Monkey) animal1;
		System.out.println(animal1);
		System.out.println(monkey1.ears + " / " + monkey1.eyes + " / " + monkey1.legs + " / " + monkey1.arms);
		
		
		
	}
	
	
	
}
