// 役職データ型
export type Position = {
    positionName : string
}

// 事業所データ型
export type Place = {
    placeName : string
}

// メンバーデータ受け取り用
export type Member = {
    memberId : string
    name : string
    age : string
    address : string
    sex : string
    mail : string
    tel : string
    positionId : string
    positionName : string
    placeId : string
    placeName : string
    regist : string
}

export const springURL = "http://localhost:8080"

export type UserFormData = {
    memberId : string
    name : string
    age : string
    sex : string
    address : string
    tel : string
    mail : string
    positionName : string
    placeName : string
}