package chapter04;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class Example04_utill {

	public static void main(String[] args) {
		// 시스템 시간
		long currentTimeMillis = System.currentTimeMillis();
		System.out.println(currentTimeMillis);

		// Calendar class
		// 날짜 관련된 java.utill package
		Calendar calendar = new GregorianCalendar();
		
		System.out.println(calendar);
		
		// 연도
		System.out.println(calendar.get(Calendar.YEAR));
		// 월
		System.out.println(calendar.get(Calendar.MONTH));
		//일
		System.out.println(calendar.get(Calendar.DATE));
		//요일
		System.out.println(calendar.get(Calendar.DAY_OF_WEEK));
	
		Calendar calendar2 = new GregorianCalendar();
				
		calendar2.set(2022, 11, 25);
		System.out.println(calendar2);
	
		
		// 밀리초 단위를 시간, 분, 초로 표현
		int millToHours = 32400000 / (60*60*1000);
		System.out.println(millToHours);
		
		//java.util package Date 클래스
		Date date = new Date();

		// java.text package의 SimpleDateFormat클래스
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("dd.MM.yyy. HH:mm");
		
		System.out.println(sdf1.format(date));
		System.out.println(sdf2.format(date));
		
		
		// Date 클래스와 Calendar 클래스의 단점을 보완한
		// java.time package 클래스
		LocalDate localDate = LocalDate.now();
		System.out.println(localDate.toString());
		LocalTime localTime = LocalTime.now();
		System.out.println(localTime.toString());
		LocalDateTime localDateTime = LocalDateTime.now();
		System.out.println(localDateTime.toString());
		
		LocalDateTime localDateTimeOf = LocalDateTime.of(2022, 12, 25, 8, 20);
		System.out.println(localDateTimeOf.toString());
		
		
		
		localDateTime = localDateTime.minusYears(10).plusMonths(5);
		System.out.println(localDateTime);
		
		
		
	}
	

}
