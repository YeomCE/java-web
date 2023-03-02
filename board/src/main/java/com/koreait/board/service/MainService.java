package com.koreait.board.service;

import org.springframework.stereotype.Service;

import com.koreait.board.dto.GetTestResponseDto;
import com.koreait.board.dto.PostTestRequestDto;

//% Service
//? 실제 비즈니스 로직을 담당하는 레이어
//? 일반적인 연산작업
//? Controller로 사용자의 입력을 받아오면 해당 기능을 진행하기 위해
//? Repository에서 데이터를 가져와 작업을 진행한다.
@Service
public class MainService {

    public String getMain(){
        return "Hello World";
    }

    public String getVariable(String data){
        return "You input data is '" + data + "'";
    }

    public String postMain(){
        return "POST main Response!";
    }

    public String postRequestBody(String data){
        return "Post body data is '" + data + "'";
    }

    public String patchMain(){
        return "Patch 메서드는 수정 작업을 지정한 메서드이다. 클라이언트로부터 데이터를 받을 때는 request body로 받는다.";
    }
    
    public String deleteMain(){
        return "Delete 메서드는 삭제 작업을 지정한 메서드이다. 클라이언트로부터 데이터를 받을 때는 path variable로 받는다.";
    }
    
    public String postTest(PostTestRequestDto dto){
        return dto.toString();
    }
    
    public GetTestResponseDto getTest(){
        return new GetTestResponseDto(10, "Comment");
    }


}
