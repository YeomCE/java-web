package chapter04;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Example_List {

	public static void main(String[] args) {

		List<Integer> numbers = new ArrayList<Integer>();
		
		numbers.add(2);
		numbers.add(9);
		numbers.add(-1);
		numbers.add(50);
		

		// 특정한 위치에 특정한 데이터를 넣기
		numbers.add(2, 100);
		
		// 특정한 위치의 데이터 변경
		numbers.set(3, 1);
		
		// 특정한 위치의 데이터 제거
		numbers.remove(0);
		
		
		// List는 순서가 존재한다.
		for(Integer number : numbers) {
			System.out.println(number);
		}
		
		
		System.out.println("================");
		
		// ArrayList와 LinkedList 작업 시간 비교
		
		List<String> arrayList = new ArrayList<String>();
		List<String> linkedList = new LinkedList<String>();
		
		long start = System.currentTimeMillis(); // 현재 시간
		for (int i = 0 ; i < 200000; i++) {
			arrayList.add(0, String.valueOf(i));
		}
		long end = System.currentTimeMillis(); // 작업 완료 시간
		
		System.out.println("ArrayList 작업 시간 : " + (end - start));


		start = System.currentTimeMillis(); // 현재 시간
		for (int i = 0 ; i < 200000; i++) {
			linkedList.add(0, String.valueOf(i));
		}
		end = System.currentTimeMillis(); // 작업 완료 시간
		
		System.out.println("linkedList 작업 시간 : " + (end - start));
		
		
		
	}

}
