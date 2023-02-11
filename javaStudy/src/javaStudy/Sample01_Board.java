package javaStudy;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Sample01_Board {
	
	final static Board[] BOARD_LIST = new Board[3]; 
	
	// 코드의 구조화를 위한 메서드 작성 : static으로 작성
	
	// 게시물 작성 기능
	public static void writeBoard() {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
		Date date = new Date(System.currentTimeMillis());
		
		System.out.println("==게시물작성==\n");			
		for(int i = 0 ; i < BOARD_LIST.length ; i++) {
				if(BOARD_LIST[i] != null) continue;

				
				BOARD_LIST[i] = new Board();
				
				BOARD_LIST[i].id = i;
				setBoard(i);
				BOARD_LIST[i].writeDate = formatter.format(date);
				

				System.out.println("타이틀 : " + BOARD_LIST[i].title + "\n작성자 : " + BOARD_LIST[i].writer + "\n작성 날짜 및 시간 : " + BOARD_LIST[i].writeDate + "\n내용 : " + BOARD_LIST[i].contents + "\n");

				break;
				}
	}
	
	
	
	// 게시물 목록 기능
	public static int getBoardList() {
		System.out.println("==게시물목록==\n");
		
		// BOARD_LIST 배열에서 요소를 하나씩 꺼내온다.
		for(Board board : BOARD_LIST) {
			// 꺼낸 board 요소가 null이 아닐 때만 출력
			if(board == null) {
				System.out.println("작성된 내용이 없습니다.\n");
				continue;
			}
			else {
				board.contractionPrint();
			}
		}
		
		
		// 게시물 목록에서 특정 게시물 구분자를 입력 시 해당 게시물의 상세 내용을 보여준다.
		Scanner selector = new Scanner(System.in);

		System.out.println("==게시글을 선택해 주세요. (-1을 입력하면 처음 화면으로 돌아갑니다.)==");
		int selectBoardId = 0;
		try { // 정수값이 아닌 값을 입력하면 오류 출력 : try-catch로 해결
			selectBoardId = selector.nextInt();
		}
		catch (Exception e) {
			System.out.println("숫자를 입력해 주세요!\n");
			selector = new Scanner(System.in); // sc를 재초기화 (미입력 시 입력값이 사라지지 않아 무한반복)
			getBoardList();
			return 0;
		}
		
		if(selectBoardId >= BOARD_LIST.length) {
			System.out.println("숫자를 잘못 입력하셨습니다!\n");
			getBoardList();
			return 0;
		}
		if(selectBoardId < -1) {
			System.out.println("숫자를 잘못 입력하셨습니다!\n");
			getBoardList();
			return 0;
		}
		
		// -1 입력 시 처음 화면으로 돌아온다.
		if(selectBoardId == -1) return 0;
		BOARD_LIST[selectBoardId].detailPrint();
		
		// 게시물 상세에서 수정하기 선택 시 게시물을 수정할 수 있다.
		System.out.println("1. 수정\n2. 뒤로가기\n0. 처음으로\n");
		int updateSelect = selector.nextInt();
		if(updateSelect == 0) return 0;
		if(updateSelect == 2) {
			getBoardList(); return 0;
		}
		if(updateSelect == 1) {
			setBoard(selectBoardId);
		}
		// 수정이 완료되면 처음 화면으로 돌아온다.
		return updateSelect;
		
		
		
	}
	
	// 게시물 세팅 메서드
	static void setBoard(int i) {
		Scanner writer = new Scanner(System.in);
		
		System.out.println("타이틀 : ");
		BOARD_LIST[i].title = writer.nextLine();
		System.out.println("작성자 : ");
		BOARD_LIST[i].writer = writer.nextLine();
		System.out.println("내용 : ");
		BOARD_LIST[i].contents = writer.nextLine();
	}
	
	public static void main(String[] args) {
		// 프로그램은 사용자가 종료하기 전까지 계속 실행되어야 한다.
		// 사용자로부터 입력받아 
		Scanner sc = new Scanner(System.in);
		int mainSelectNumber;
		
		boolean on = true;
		while(true) {
			//게시물 작성, 게시물 목록 기능을 선택할 수 있다.
			System.out.println("======== 게시판 ========");
			System.out.println("1. 게시물 작성\n2. 게시물 목록\n0. 종료\n");
			
			try { // 정수값이 아닌 값을 입력하면 오류 출력 : try-catch로 해결
				mainSelectNumber = sc.nextInt();
			}
			catch (Exception e) {
				System.out.println("숫자를 입력해 주세요!");
				sc = new Scanner(System.in); // sc를 재초기화 (미입력 시 입력값이 사라지지 않아 무한반복)
				continue;
			}
			
			// 검증 연산을 해줌으로 잘못된 번호 입력 시 아래 연산을 진행하지 않는다.
			if(mainSelectNumber < 0 || mainSelectNumber > 2) { // 1, 2, 0 외의 숫자 입력 시
				System.out.println("잘못된 번호입니다.\n");
				continue;
			}
			
			
				// 게시물 작성을 선택하면 타이틀, 작성자, 작성 날짜 및 시간, 내용을 입력할 수 있다.
					// 입력이 완료되면 게시물이 자동으로 등록된다.
					// 등록이 완료되면 처음 화면으로 돌아온다.
				if(mainSelectNumber == 1) writeBoard();


				
				// 게시물 목록 선택 시 작성된 게시물을 모두 보여준다. (게시물 구분자, 게시물 제목, 작성자 출력)
				else if(mainSelectNumber == 2) getBoardList();

					
				
				
				// 처음 화면일 시 종료를 선택하면 프로그램이 종료된다.
				else if(mainSelectNumber == 0) {
					System.out.println("==프로그램 종료==\n");
					// 방법 1. while문의 조건을 false
					// 방법 2. break문으로 while문을 강제 종료
					// 방법 3. return문으로 main 메서드 종료
					on = false;
					}
		}
	}
}

// 게시물 작성
// 게시물 목록
// 게시물 상세보기
// 게시물 수정
class Board {
	// 게시물 구분자
	int id;
	// 제목
	String title;
	// 작성자
	String writer;
	// 작성 날짜 및 시간
	String writeDate;
	// 내용
	String contents;
	// 좋아요
	int like;
	
	void contractionPrint() {
		System.out.println("게시물 구분자 : " + id + "\t게시물 제목 : " + title + "\t작성자 : " + writer);
	}
	
	void detailPrint() {
		System.out.println("id        : " + id);
		System.out.println("title     : " + title);
		System.out.println("writer    : " + writer);
		System.out.println("writeDate : " + writeDate);
		System.out.println("contents  : " + contents);
		System.out.println("like      : " + like);
	}
	

}