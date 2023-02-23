//? 인터페이스 관리

export interface IPreviewItem {
    img : string | null;
    writerProfile : string;
    writerNickname : string;
    writeDate : string;
    boardTitle : string;
    boardContent : string;
    likeCount : number;
    commentCount : number;
    viewCount : number;

    boardNumber : number;
}

export interface IUser{
    email : string;
    password : string;
    nickName : string;
    telNumber : string;
    address : string;
    addressDetail : string;
    profile ?: string; //# ? => 사용해도 되도 안해도 된다.
}

export interface ILikeUser{
    likeUserProfile : string;
    likeUserNickName : string;
}

export interface ICommentItem{
    commentUserProfile : string;
    commentUserNickname : string;
    commentUserContent : string;
    commentDatetime : string;
}