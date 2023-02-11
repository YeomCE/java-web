package chapter04;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class Example05 {

	public static void main(String[] args) {
		Set<String> hashSet = new HashSet<String>();
		
		// set 구조에 데이터를 추가
		hashSet.add("apple");
		hashSet.add("carrot");
		hashSet.add("apple");
		hashSet.add("banana");
		hashSet.add("apple");
		
		// set은 순서가 없기 때문에 인덱스로 접근 불가능
		// set[0];
		
		//Iterator로 set 컬렉션에 접근
		Iterator<String> hashSetIterator = hashSet.iterator();
		
		// Iterator의 hasNext() 메서드로 다음 요소가 있다면 반복
		while(hashSetIterator.hasNext()) {
			// Iterator의 next() 메서드로 다음 요소를 가져온다.
			System.out.println(hashSetIterator.next());
		}
		
		
		// --------------------------- //
		System.out.println("========================");
		
		Set<String> treeSet = new TreeSet<String>();

		// set 구조에 데이터를 추가
		treeSet.add("hello");
		treeSet.add("apple");
		treeSet.add("carrot");
		treeSet.add("apple");
		treeSet.add("banana");
		treeSet.add("apple");
		
		Iterator<String> treeSetIterator = treeSet.iterator();
		
		while(treeSetIterator.hasNext()) {
			// Iterator의 next() 메서드로 다음 요소를 가져온다.
			System.out.println(treeSetIterator.next());
		}
		
		// size() : 길이 혹은 크기를 가져온다.
		System.out.println(treeSet.size());
		
		
		
		
		
	}

}
