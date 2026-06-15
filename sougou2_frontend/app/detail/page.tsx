"use client"

import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// メンバーデータ型
type Member = {
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

const springURL = "http://localhost:8080"

export default function DetailView() {
    const[member , setMember] = useState<Member>()
    const router = useRouter()

    useEffect(() => {
        const FechData = async () => {
            try{
                const response = await fetch(springURL + "/api/member")
                if(!response.ok){
                    console.log(response.text())
                    alert("データを取得できませんでした")
                    return;
                }

            }catch(error){
                console.log(error)
                alert("通信エラーが発生しました")
                return;
            }
        }

        FechData();

    },[])

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button><br/>
            <button onClick={() => router.push("/list")}>メンバー一覧</button><br/>
            <div>詳細画面</div>
            <table>
                <tr>
                <th>社員ID</th><td>{member?.memberId}</td>
                <th>氏名</th><td>{member?.name}</td>
                <th>年齢</th><td>{member?.age}</td>
                <th>性別</th><td>{member?.sex == "0" ? "男" : "女"}</td>
                <th>住所</th><td>{member?.address}</td>
                <th>電話番号</th><td>{member?.tel}</td>
                <th>メールアドレス</th><td>{member?.mail}</td>
                <th>役職</th><td>{member?.positionName}</td>
                <th>事業所</th><td>{member?.placeName}</td>
                </tr>
            </table>
        </div>
    )
}