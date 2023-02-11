# 첫번째 SQL 주석 (한 줄 주석)
-- 두번째 SQL 주석 (한 줄 주석) -- 주석은 '-'뒤에 반드시 띄어쓰기가 포함되어야 함
/* 
세번째
SQL
주석 (여러 줄 주석) 
*/

## DDL ##

# 데이터베이스 생성 쿼리
# CREATE DATABASE 데이터베이스명;

CREATE DATABASE HOTEL;

# 생성된 데이터베이스 목록 보기
# SHOW DATABASES;
SHOW DATABASES;

# 데이터베이스 선택
# USE 데이터베이스명;
USE HOTEL;

# 테이블 생성
# CREATE TABLE 테이블명 (
#   필드명 필드타입 제약조건,
#   ...
# );

CREATE TABLE Reservation(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  reservationDate DATE NOT NULL,
  roomNumber INT
);

# 선택된 데이터베이스의 테이블을 조회

SHOW TABLES;

# 테이블 수정
# - 컬럼 추가
# ALTER TABLE 테이블명 ADD 필드명 필드타입 [제약조건];

ALTER TABLE Reservation ADD telNumber VARCHAR(20);

# - 컬럼 삭제
# ALTER TABLE 테이블명 DROP 필드명;

ALTER TABLE Reservation DROP roomNumber;

# - 컬럼 수정
# ALTER TABLE 테이블명 MODIFY COLUMN 필드명 필드타입 [제약조건];

ALTER TABLE Reservation MODIFY COLUMN reservationDate VARCHAR(20) NOT NULL;

# 테이블 삭제
# - DROP
# DROP TABLE 테이블명;
# 테이블의 존재 자체를 삭제

DROP TABLE Reservation;

# - TRUNCATE
# TRUNCATE TABLE 테이블명;
# 해당 테이블을 생성 직후의 상태로 되돌림 (DDL)

INSERT INTO Reservation(name, reservationDate) VALUES ('홍길동', now());
SELECT * FROM Reservation;

TRUNCATE TABLE Reservation;

# - DELETE FROM
# DELETE FROM 테이블명;
# 레코드만 삭제 (DML)

DELETE FROM Reservation;

### DML ###

# INSERT
# - 데이터 삽입
# INSERT INTO 테이블명(컬럼명1, 컬럼명2, ...) VALUES (값1, 값2, ...);
# INSERT INTO 테이블명 VALUES (값1, 값2, ...);
# 각 컬럼에 매칭되는 값을 순서에 맞게 작성하여야 함

INSERT INTO Reservation (name, reservationDate, roomNumber) VALUES ('김철수', '2023-01-17', 3134);
INSERT INTO Reservation VALUES (4, '이영희', '2022-10-11', 908);
# NOT NULL 조건으로 걸린 name 컬럼 값을 지정 하지 않았기 때문에 삽입 에러가 발생
INSERT INTO Reservation (reservationDate, roomNumber) VALUES ('1999-02-10', 1004);

# UPDATE
# - 데이터 수정
# UPDATE 테이블명 SET 컬럼1 = 값1, ... [WHERE 컬럼 = 값]
# WHERE : 조건을 지정해주는 키워드, 조건에 해당하는 대한 레코드에만 명령을 실행

# IS NULL : WHERE 조건에서 해당 컬럼이 NULL 인 레코드를 고를 때 사용
UPDATE Reservation SET roomNumber = 502 WHERE roomNumber IS NULL;
UPDATE Reservation SET reservationDate = '2023-01-30' WHERE name = '김철수';
UPDATE Reservation SET roomNumber = 1001;

# 데이터 삭제
# - DELETE
# DELETE FROM 테이블명 [WHERE 컬럼=값]

DELETE FROM Reservation WHERE id = 7;


INSERT INTO Reservation (name, reservationDate, roomNumber) VALUES ("고수", "2023-03-02", 904);
INSERT INTO Reservation (name, reservationDate) VALUES ("홍길동", "2023-09-07");
INSERT INTO Reservation VALUES (20, "고길동", "2023-03-02", 3414);

# 데이터 검색
# - SELECT
# 지정한 테이블에서 선택한 컬럼을 검색할 때 사용
# SELECT 컬럼명1 [, 컬럼명2, ...] FROM 테이블명 [WHERE 조건]
SELECT name FROM Reservation;
SELECT name, roomNumber FROM Reservation;
SELECT name, roomNumber FROM Reservation WHERE reservationDate = "2023-03-02"; # Reservation테이블 중 reservationDate가 "2023-03-02"인 name과 Reservation 가져오기

# - SELECT
# 모든 컬럼을 선택할 수 있다.
SELECT * FROM Reservation;
SELECT * FROM Reservation WHERE name = "홍길동";

# WHERE문 뒤에 비교연산자 및 논리연산자로 조건을 주가하여 검색할 수 있다.
SELECT * FROM Reservation WHERE name = "홍길동" AND ReservationDate < "2023-04-01";
SELECT * FROM Reservation WHERE name = "홍길동" OR ReservationDate < "2023-04-01";
SELECT * FROM Reservation WHERE roomNumber IS NOT NULL; # roomNumber가 NULL이 아닌 경우만 검색

# 특정 컬럼의 중복 제거
# DISTINCT
SELECT DISTINCT name FROM Reservation;
SELECT DISTINCT name, roomNumber FROM Reservation;

# 특정 컬럼을 기준으로 정렬
# ORDER BY
# 옵션 : ASC(오름차순) / DESC(내림차순)
SELECT * FROM Reservation ORDER BY ReservationDate ASC; # ReservationDate기준으로 오름차순
SELECT * FROM Reservation ORDER BY ReservationDate DESC, roomNumber DESC; # ReservationDate 기준으로 내림차순 후 같은 값이 있을 시 roomNumber 기준으로 내림차순
SELECT * FROM Reservation ORDER BY roomNumber DESC, ReservationDate DESC; 


# 별칭 사용 AS
SELECT name AS eman, roomNumber FROM Reservation;
SELECT name, roomNumber FROM Reservation AS R;



# MySQL 데이터타입

# - 문자열타입 CHAR
# 고정길이 문자열 / 길이로 지정할 수 있는 값의 범위 0~255
ALTER TABLE Reservation ADD note CHAR(4);

# DESCRIBE 테이블명; : 테이블의 정보 확인 가능
DESCRIBE Reservation;

SELECT char_length(note) FROM Reservation WHERE name = "노트";

INSERT INTO Reservation(name, reservationDate, note) VALUES ("노트", NOW(), "");



SELECT * FROM Reservation;


# 비교연산자
# 동등 비교연산자 =
# 좌항과 우항이 같으면 1을 반환 / 아니라면 0을 반환한다.
SELECT 1 = 2; # 0 반환
SELECT 1 = 1; # 1 반환

# Reservation  테이블에서 roomNumber가 1001인 레코드의 모든 컬럼 선택
SELECT * FROM Reservation WHERE roomNumber = 1001;

# ------

# NOT 연산 !=, <>
# 좌항이 우항과 다르면 1을 반환 / 아니라면 0을 반환단다.
SELECT 1 != 1, 1 <> 2; # 0 반환
SELECT 1 != 2; # 1 반환

# Reservation  테이블에서 roomNumber가 1001이 아닌 레코드의 모든 컬럼 선택
SELECT * FROM Reservation WHERE roomNumber != 1001;

# ------

# Great than, Great than Equal 연산 > >=
# 좌항이 우항보다 크면 1을 반환 / 아니라면 0을 반환한다.
# 좌항이 우항보다 크거나 같으면 1을 반환 / 아니라면 0을 반환한다.
SELECT 1 > 1, 1>=1;

# Reservation  테이블에서 reservationDate가 2023-01-01 보다 크거나 같은 모든 컬럼을 선택
SELECT * FROM Reservation WHERE reservationDate >= "2023-01-01";

# ------

# Less than, Less than Equal 연산 < <=
# 좌항이 우항보다 작으면 1을 반환 / 아니라면 0을 반환한다.
# 좌항이 우항보다 작거나 같으면 1을 반환 / 아니라면 0을 반환한다.
SELECT 1 < 1, 1<=1;

# Reservation  테이블에서 reservationDate가 2023-02-28 보다 작거나 같은 모든 컬럼을 선택
SELECT * FROM Reservation WHERE reservationDate <= "2023-02-28";

# ------

# null 확인 <=>
# 좌항과 우항이 모둔 null이면 1을 반환 / 아니라면 0을 반환한다.
SELECT null <=> null;
SELECT null <=> 1;

# Reservation 테이블에서 roomNumber와 note가 모둔 null인 레코드의 모든 컬럼을 선택
SELECT * FROM Reservation WHERE roomNumber <=> note;

# ------

# Equal 연산 IS
# 좌항과 우항이 같으면 1을 반환 / 아니라면 0을 반환한다.
# 우상이 TRUE, FALSE, UNKNOWN 일 때 사용
SELECT FALSE IS TRUE; 
SELECT TRUE IS TRUE;

# ------

# Not Equal 연산 IS NOT
# 좌항과 우항이 다르면 1을 반환 / 아니라면 0을 반환한다.
# 우상이 TRUE, FALSE, UNKNOWN 일 때 사용
SELECT FALSE IS NOT TRUE;
SELECT TRUE IS NOT TRUE;

# ------

# NULL 비교 연산 IS NULL
# 좌항이 NULL이면 1을 반환 / 아니라면 0을 반환한다.
SELECT NULL IS NULL;

# Reservation 테이블에서 note 컬럼에 값이 없는(NULL) 레코드의 모든 값을 선택
SELECT * FROM Reservation WHERE note IS NULL;

# ------

# NOT NULL 비교 연산 IS NOT NULL
# 좌항이 NULL이 아니면 1을 반환 / 아니라면 0을 반환한다.
SELECT NULL IS NOT NULL;

# Reservation 테이블에서 roomNumber 컬럼에 값이 존재하는(NOT NULL) 레코드의 모든 값을 선택
SELECT * FROM Reservation WHERE roomNumber IS NOT NULL;

# ------

# 사이값 비교 연산 BETWEEN a AND b, NOT BETWEEN a AND b
# 좌항이 a보다 크거나 같으면서 b보다 작거나 같으면 1을 반환 / 아니라면 0을 반환한다.
# 좌항이 a보다 작거나 b보다 크면 1을 반환 / 아니라면 0을 반환한다.
SELECT 10 BETWEEN 5 AND 10, 10 NOT BETWEEN 3 AND 8;

# Reservation 테이블에서 reservationDate가 2023-01-01부터 2023-02-28까지인 레코드의 모든 값을 선택
SELECT * FROM Reservation WHERE reservationDate BETWEEN "2023-01-01" AND "2023-02-28";

# ------

# IN 연산 IN, NOT IN
# 좌항이 우항에 해당하는 배열값 중 하나라도 같은 값이 있다면 1을 반환 / 아니라면 0을 반환한다.
# 좌항이 우항에 해당하는 배열값이 포함되어 있지 않다면 1을 반환 / 아니라면 0을 반환한다.
SELECT 1 IN (1,2,3,4,5);
SELECT 1 NOT IN (1,2,3,4,5,6);

# Reservation 테이블에서 name이 "홍길동", "고길동" 증 하나라도 해당되는 레코드의 값 모두 선택
SELECT * FROM Reservation WHERE name IN ("홍길동", "고길동");


# ---------------------------


# 논리 연산

# AND 연산 AND, &&
# 좌항과 우항이 모두 1이면 1/ 아니라면 0을 반환
# 여기서 비교되는 1과 0은 비교연산의 결과
SELECT 1 AND 0;

# Reservation 테이블에서 name이 "고길동" 이면서 note 칼럼에 값이 지정되어 있지 않은 모든 컬럼 선택
SELECT * FROM Reservation WHERE name = "고길동" AND note IS NULL;

# Reservation 테이블에서 note 칼럼에 값이 지정되어 있지 않고
# ReservationDate가 2023-01-01부터 2023-02-28까지인 레코드의 모든 칼럼 선택
SELECT * FROM Reservation WHERE note IS NULL && (ReservationDate BETWEEN "2023-01-01" AND "2023-02-28"); # AND가 두번 들어가 컴퓨터에서 오류가 날 수 있으니 괄호를 활용하여 구분

# ------

# OR 연산 OR, ||
# 좌항과 우항 중 하나라도 1이면 1 / 아니라면 0을 반환
SELECT 1 || 0;

# Reservation 테이블에서 name이 "고수" 이거나 note 값이 존재하면 레코드의 모든 칼럼을 선택
SELECT * FROM Reservation WHERE name = "고수" || note IS NOT NULL;

# ------

# XOR 연산 XOR
# 좌항과 우항이 다르면 1을 반환하고 같으면 0을 반환한다.
SELECT 1 XOR 0;

# ------

# AND 연산과 OR 연산에서 주의할 점
# 실제로 구하고자 하는 값을 전확히 파악해야만 한다.

# name이 고길동이면서 note값이 존재하지 않거나 roomNumber가 1000 이상인 레코드의 모든 칼럼을 선택
SELECT * FROM Reservation WHERE name = "고길동" && (note IS NULL || roomNumber >= 1000);


# ---------------------------


# IFNULL (검사할 인수, null일 때의 값)
# 검사할 일수가 null이면 null일 때의 값을 반환

SELECT IFNULL (NULL, "값이 지정되지 않았습니다.");

# Reservation 테이블에서 name과 roomNumber를 선택했을 때 roomNumber가 null이면 "아직 방이 배정되지 않았습니다."를 출력
SELECT name, IFNULL(roomNumber, "아직 방이 배정되지 않았습니다.") FROM Reservation;


# 패턴매칭 (%, _)
# 데이터의 특정 패턴에 해당하는 데이터를 조건으로 사용하기 위한 용도
# LIKE 연산자 사용

# Reservation 테이블에서 name값 중 성이 '고'인 레코드에서 모든 컬럼 선택
SELECT * FROM Reservation WHERE name LIKE "고%";
SELECT * FROM Reservation WHERE name LIKE "고_";
# % : 0개 이상의 문자를 대체  / _ : 1개의 문자의 대체

SELECT * FROM Reservation WHERE name LIKE "%";




# Foreign Key
# 해당 테이블이 외부 테이블을 참조할 때 특정 컬럼을 외부 테이블의 컬럼 값으로 지정하는 키
# 참조의 기준

# CONSTRAINT 제약조건명 FOREIGN KEY(해당 필드에서 참조키로 지정할 컬럼)
# REFERENCES 첨조할 테이블명 (참조할 테이블의 기본 키)

# 주의사항
# 1. 참조할 테이블이 존재해야 한다.
# 2. 참조할 컬럼이 참조할 테이블의 기본키거나 후보키여야 한다.

# ONSTRAINT 제약조건명은 생략 가능하다.


CREATE TABLE Room(
	roomNumber INT PRIMARY KEY,
    roomSize INT NOT NULL,
    roomName VARCHAR(20) NOT NULL
);

CREATE TABLE Reservation2(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	reservationDate DATE NOT NULL,
    note TEXT,
	roomNumber INT,
    
    
	CONSTRAINT Reservation_RoomNumber_FK FOREIGN KEY(roomNumber)
    REFERENCES Room (roomNumber)
);

DROP TABLE Reservation2;

# 참조 제약 조건을 설정하려면 참조하는 테이블에 해당 컬럼의 값이 존재해야 참조할 수 있다.

INSERT INTO Reservation2 (name, reservationDate, roomNumber) VALUES ("김철수", "2023-01-24", 2902);
INSERT INTO Reservation2 (name, reservationDate, roomNumber) VALUES ("김철수", "2023-01-24", 2901);

INSERT INTO Room VALUES (2901, 28, "VIP");

SELECT* FROM Reservation2;


# ON DELETE, ON UPDATE
# 참조키로 지정된 필드에서 참조하는 데이터가 변경 · 삭제 되었을 때 대처를 설정할 수 있다.

CREATE TABLE Reservation3(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    reservationDate DATE NOT NULL,
    note TEXT,
    roomNumber INT DEFAULT 2904,
    
    CONSTRAINT Reservation3_FK FOREIGN KEY (roomNumber)
    REFERENCES Room(roomNumber)
    
    # CASCADE 옵션 : 참조하는 데이터가 수정되거나 삭제되면 참조테이블에서도 수정과 삭제가 이루어진다.
	# ON UPDATE CASCADE
    # ON DELETE CASCADE
    
    # SET NULL 옵션 : 참조하는 데이터가 변경되거나 삭제되면 참조키가 설정된 필드의 값이 null로 변경된다.
    # ON UPDATE SET NULL
	# ON DELETE SET NULL
    
    # NO ACTION 옵션 : 참조하는 데이터가 변경되거나 삭제되어도 아무런 변화가 일어나지 않는다.
    # MySQL에서는 RESTRICT와 동일하다.
    # ON UPDATE NO ACTION
    # ON DELETE NO ACTION
    
    # SET DEFAULT 옵션 : 참조하는 데이터가 변경되거나 삭제되면 기본값으로 지정한 데이터로 변경된다.
    # InnoDB Engin에서는 불가능
    # ON UPDATE SET DEFAULT
    # ON DELETE SET DEFAULT
    
    # RESTRICT 옵션 : 참조하는 데이터가 변경되거나 삭제가 불가능하다.
    # 기본값으로 설정되어있다.
    ON UPDATE RESTRICT
    ON DELETE RESTRICT
    
);

DROP TABLE Reservation3;


INSERT INTO Room VALUES (2901, 28, "VIP");
INSERT INTO Room VALUES (2902, 28, "VIP");

INSERT INTO Reservation3 (name, reservationDate, roomNumber) VALUES ("이영희", "2023-01-24", null);


UPDATE Reservation3 SET roomNumber = 2903 WHERE name = "김철수";

INSERT INTO Reservation3 (name, reservationDate, roomNumber) VALUES ("김철수", "2023-01-24", 2902);

SELECT * FROM Reservation3; 
SELECT * FROM Room; 

UPDATE Room SET roomNumber = 2903 WHERE roomNumber = 2902;

DELETE FROM Room WHERE roomNumber = 2902;




# ============================

# JOIN
# 여러 테이블을 조합하여 하나의 테이블로 표현하는 방법
# 일반적으로 SELECT 구문에 사용된다.

#INNER JOIN
# ON 절의 조건을 만족하는 데이터만 가져온다.
# SELECT 컬럼명 FROM 테이블1명 INNER JOIN 테이블2명 ON JOIN조건

SELECT * FROM Reservation3 INNER JOIN Room;
SELECT * FROM Reservation3 INNER JOIN Room ON Reservation3.roomNumber = Room.roomNumber;

# MySQL에서는 INNER JOIN 구문을 ,로 대체하고 ON을 WHERE로 대체하여 사용 가능하다.
SELECT * FROM Reservation3, Room WHERE Reservation3.roomNumber = Room.roomNumber;

# FROM 절에 두 개 이상의 테이블을 사용할 때 Alias를 사용하여 별칭을 부여할 수 있다.
SELECT * FROM Reservation3 AS RV, Room AS RM WHERE RV.roomNumber = RM.roomNumber;

# 동일한 컬럼명이 각 테이블에 존재하면(ex.roomNumber) 쿼리는 어떤 테이블의 컬럼인지 구분하지 못하기 때문에
# 두 테이블 이상을 FROM 절에서 사용할 때는 선택한 컬럼 명 앞에 어떤 테이블의 컬럼인지 직접 지정해 주는 것이 좋다.
SELECT RV.id, RV.name, RV.reservationDate, RV.note, RV.roomNumber, RM.roomSize, RM.roomName
FROM Reservation3 AS RV, Room AS RM 
WHERE RV.roomNumber = RM.roomNumber;

# --------------

# LEFT JOIN
# 왼쪽 테이블에 참조키를 기준으로 조인 결과를 나열한다.
# ON 절의 조건을 만족하지 않는 경우에는 첫 번째 테이블의 필드 값은 그대로 가져온다.
# 일반적으로 사용

# SELECT 컬럼명 FROM 테이블1명 LEFT JOIN 테이블2명 ON JOIN조건 [WHERE 조건]
SELECT * FROM Reservation3 AS RV LEFT JOIN Room AS RM ON RV.roomNumber = RM.roomNumber;

# --------------

# RIGHT JOIN
# 오른쪽 테이블에 참조키를 기준으로 조인 결과를 나열한다.
# ON 절의 조건을 만족하지 않는 경우에는 두 번째 테이블의 필드 값은 그대로 가져온다.

# SELECT 컬럼명 FROM 테이블1명 RIGHT JOIN 테이블2명 ON JOIN조건 [WHERE 조건]
SELECT * FROM Reservation3 AS RV RIGHT JOIN Room AS RM ON RV.roomNumber = RM.roomNumber;





#==================





# 서브쿼리 (Sub Query)
# 테이블의 검색 결과를 조건으로 사용하거나 FROM절에서 새로운 테이블로 사용할 수 있도록 한 것

# WHERE절에서 사용하는 방법
# SELECT 컬럼명 FROM 테이블A명
# WHERE 컬럼명 = (SELECT 컬럼명 FROM 테이블B명 WHERE 조건)
# 또는
# WHERE 컬럼면 IN (SELECT 컬럼명 FROM 테이블B명 WHERE 조건)

SELECT * FROM Reservation3
WHERE roomNumber = (
	SELECT roomNumber
    From Room
    WHERE roomNumber = 2902
);

SELECT * FROM Reservation3
WHERE roomNumber IN (
	SELECT roomNumber
	FROM Room 
);


# FROM절에서 사용하는 방법
# SELECT 컬럼명 
# FROM (
#	SELECT 컬럼명 FROM 테이블 WHERE 조건	
# )
# WHERE 조건;





# ================

# VIEW
# 미리 선언된 쿼리를 사용하여 가상의 테이블을 만들어 보여준다.
# CREATE VIEW 뷰이름 AS SELECT 쿼리
CREATE VIEW ReservationInfo AS
SELECT RV.id, RV.name, RV.reservationDate, RV.note, RV.roomNumber, RM.roomSize, RM.roomName
FROM Reservation3 AS RV, Room AS RM 
WHERE RV.roomNumber = RM.roomNumber;


SELECT * FROM ReservationInfo 
WHERE name = "김철수";


SELECT * FROM (
	SELECT RV.id, RV.name, RV.reservationDate, RV.note, RV.roomNumber, RM.roomSize, RM.roomName
	FROM Reservation3 AS RV, Room AS RM 
	WHERE RV.roomNumber = RM.roomNumber
) AS T

WHERE name = "김철수";
