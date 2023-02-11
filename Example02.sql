# Board 데이터베이스 생성
CREATE DATABASE PEED;
USE PEED;

# User 테이블 생성
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,	# 아이디 / 정수형태 / 기본키 / 자동 증가
  password VARCHAR(30) NOT NULL, 		# 패스워드 / 길이 30의 가변 문자열 / 필수 값
  name VARCHAR(50) NOT NULL,			# 이름 / 길이 50의 가변 문자열 / 필수 값
  telNumber VARCHAR(15) NOT NULL UNIQUE # 전화번호 / 길이 15의 가변 문자열 / 필수 값 / 중복 불가능
);

# Board 테이블 생성
# 게시물 번호 (boardNumber)가 존재하고 정수형태 및 자동 증가로 관리,
# 게시물 번호로 각 데이터를 구분
# 게시물 제목 (boardTitle)이 존재하고 길이 200의 가변 문자열 및 필수 값으로 관리
# 게시물 내용 (boardContent)이 존재하고 길이의 제한이 없는 문자열 및 필수 값으로 관리
# 게시물 작성일 (boardDate)이 존재하고 날짜 타입 및 필수 값으로 관리
# 게시물 작성자 (boardWriter)가 존재하고 정수 형태 및 필수 값으로 관리
CREATE TABLE Board1 (
  boardNumber INT AUTO_INCREMENT PRIMARY KEY,
  boardTitle VARCHAR(200) NOT NULL,
  boardContent TEXT NOT NULL,
  boardDate DATE NOT NULL,
  boardWriter INT NOT NULL
);

SELECT * FROM User;

# User 레코드를 삽입
# 아이디는 자동 값을 그대로 사용, 
# 비밀번호는 'P!ssw0rd', 이름 '고길동', 전화번호는 '010-4488-9944'인 데이터를 삽입

# -- 회원가입 할때 사용 --
INSERT INTO User(password, name, telNumber) VALUES ('P!ssw0rd', '고길동', '010-4488-9944');

# User 테이블에서 이름이 '고길동'인 레코드의 비밀번호를 'qwer1234!!'로 수정

# -- 각종 회원정보 수정 할때 사용 --
UPDATE User SET password = 'qwer1234!!' WHERE name = '고길동';

# User 테이블에서 id가 1인 레코드를 삭제
DELETE FROM User WHERE id = 1;


INSERT INTO Board1(boardTitle, boardContent, boardDate, boardWriter)
VALUES ("10번게시글", "10번 게시글입니다.", "2023-01-10", 2);
INSERT INTO Board1(boardTitle, boardContent, boardDate, boardWriter)
VALUES ("안녕히가세요.", "안녕하세요. 반갑습니다. 안녕히가세요.", "2023-01-11", 3);



# 전체 게시물 보기
SELECT * FROM Board1;

# 작성일 순으로 보기
SELECT * FROM Board1 ORDER BY boardDate DESC;

# 오래된 글 순으로 보기
SELECT * FROM Board1 ORDER BY boardDate ASC;

# 10일 이내에 작성된 글 보기
SELECT * FROM Board1 WHERE boardDate >= "2023-01-08";

#10일 이내에 작성된 글 최신순으로 보기
SELECT * FROM Board1 WHERE boardDate >= "2023-01-08" ORDER BY boardDate DESC;

# 작성자가 1이면서 10일 이내에 작성된 글 최신순으로 보기
SELECT * FROM Board1 WHERE boardWriter = 1 AND boardDate >= "2023-01-08" ORDER BY boardDate DESC;

# 게시물 제목에 "안녕하세요"가 포함된 게시글 보기
SELECT * FROM Board1 WHERE boardTitle LIKE "%안녕하세요%";

# 게시물 내용에 "반갑습니다"가 포함된 게시글 보기
SELECT * FROM Board1 WHERE boardTitle LIKE "%반갑습니다%";

# 게시물 제목 + 내용에 "안녕히가세요"가 포함된 게시글 보기
SELECT * FROM Board1 WHERE boardTitle LIKE "%안녕히가세요%" OR boardContent LIKE "%안녕히가세요%";


SELECT * FROM Board1 WHERE boardTitle LIKE "%%";


# Board 테이블에서 boardWriter가 1이거나 2인 레코드에서 모든 컬럼 선택
SELECT * FROM Board1 WHERE boardWriter = 1 OR boardWriter = 2;
SELECT * FROM Board1 WHERE boardWriter IN (1,2);

# Board 테이블에서 boardDate가 2023-01-03부터 2023-01-10까지 레코드에서 모든 컬럼 선택
SELECT * FROM Board1 WHERE boardDate BETWEEN "2023-01-03" AND "2023-01-10";

# Board 테이블에서 boardDate가 1월달인 레코드에서 모든 컬럼 선택
SELECT * FROM Board1 WHERE boardDate BETWEEN "2023-01-01" AND "2023-01-31";
SELECT * FROM Board1 WHERE boardDate LIKE "____-01-__";
SELECT * FROM Board1 WHERE boardDate LIKE "%-01-%";




CREATE TABLE BOARD(
	id INT AUTO_INCREMENT PRIMARY KEY,
    boardTitle VARCHAR(200) NOT NULL,
    boardContent TEXT NOT NULL,
    boardDateTime DATETIME NOT NULL,
    boardLike INT DEFAULT 0,
    boardWriter INT NOT NULL,
    
	CONSTRAINT Board_FK FOREIGN KEY (boardWriter)
    REFERENCES User (id)
	ON UPDATE CASCADE
    ON DELETE CASCADE
    
);


SELECT * FROM Board;
SELECT * FROM User;

INSERT INTO User(password, name, telNumber) VALUES("P!ssw0rd", "John dae", "010-1111-4444");
INSERT INTO User(password, name, telNumber) VALUES("qwer1234!!!!", "Alies", "010-2222-8888");
INSERT INTO User(password, name, telNumber) VALUES("qlalfqjsgh12#$", "Brown", "010-3333-6666");


DELETE FROM User WHERE name = "고길동";


INSERT INTO Board (boardTitle, boardContent, boardDateTime, boardWriter)
VALUES ("HelloWorld!", "Hello MySQL", now(), 1);
INSERT INTO Board (boardTitle, boardContent, boardDateTime, boardWriter)
VALUES ("HelloWorld!@", "Hello MySQL@", now(), 2);
INSERT INTO Board (boardTitle, boardContent, boardDateTime, boardWriter)
VALUES ("Good Bye World!", "Good Bye MySQL", now(), 3);

# 게시물을 작성한 경험이 있는 유저의 이름과 전화번호, 작성한 게시물 제목을 출력
SELECT U.name, U.telNumber, B.boardTitle
FROM User AS U, Board AS B 
WHERE U.id = B.boardWriter;

# OR

SELECT U.name, U.telNumber, B.boardTitle
FROM User AS U RIGHT JOIN Board AS B # 게시물이 기준이기 때문에 RIGHT JOIN 사용
ON U.id = B.boardWriter;


# 게시물을 작성한 경험이 있는 유저의 이름과 전화번호를 출력
SELECT DISTINCT U.name, U.telNumber
FROM User AS U, Board AS B 
WHERE U.id = B.boardWriter;

# OR

 SELECT name, telNumber
 FROM User
 WHERE id IN (
	SELECT Distinct boardWriter
    FROM Board
 );