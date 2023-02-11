package chapter04;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class Example_MapInterface {

	public static void main(String[] args) {
		Map<String, String> hashMap = new HashMap<String, String>();
		
		// put : hash map에 데이터 추가
		hashMap.put("key", "value");
		hashMap.put("name", "John doe");
		hashMap.put("address", "United State");
		
		
		// get : hash map에서 특정한 키에 해당하는 값을 가져온다.
		System.out.println(hashMap.get("name"));
		
		Set<String> keys = hashMap.keySet();
		Iterator<String> keyIterator = keys.iterator();
		
		while(keyIterator.hasNext()) {
			System.out.println(keyIterator.next());
		}
		
		//containsKey : 해당 키가 존재하는지 여부 반환
		if(hashMap.containsKey("age")) {
		System.out.println(hashMap.get("age"));
		}
		
	}

}
