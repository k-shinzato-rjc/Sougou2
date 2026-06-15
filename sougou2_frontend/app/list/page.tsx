"use client"

import React from "react"
import {useState, useEffect} from "react"
import {useRouter} from "next/navigation"

// メンバーデータ受け取り用
type Member = {
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

const springURL = "http://localhost:8080"

export default function ListView(){
    // メンバーデータ格納用ステートメント
    const[members, setMembers] = useState<Member[]>();
    // 遷移用フック
    const router = useRouter();
    // ページアクセス・読み込み時にAPIからデータを取得 → ステートメントに格納
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(springURL + "/api/list", {credentials : "include"})
                if(!response.ok){
                    console.log(response.text())
                    alert("データの取得に失敗しました")
                    return
                }

                const json = await response.json()
                setMembers(json)

            }catch(error){
                console.log(error)
                alert("通信に失敗しました")
            }
        }
        fetchData();
    },[])

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button>
            <div>メニュー一覧画面</div>
            <table>
                <thead>
                    <tr>
                        <th>社員</th>
                        <th>氏名</th>
                        <th>年齢</th>
                        <th>性別</th>
                        <th>住所</th>
                        <th>電話番号</th>
                        <th>メールアドレス</th>
                        <th>役職</th>
                        <th>事業所</th>
                        <th>詳細</th>
                        <th>更新</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {members?.map((member,index) => (
                        <tr key={index}>
                            <td>{member?.memberId}</td>
                            <td>{member?.name}</td>
                            <td>{member?.age}</td>
                            <td>{member?.sex == "0" ? "男" : "女"}</td>
                            <td>{member?.address}</td>
                            <td>{member?.tel}</td>
                            <td>{member?.mail}</td>
                            <td>{member?.positionName}</td>
                            <td>{member?.placeName}</td>
                            <td>
                                <button onClick={() => router.push("/detail")}>詳細</button>
                            </td>
                            <td>
                                <button onClick={() => router.push("/update")}>更新</button>
                            </td>
                            <td>
                                <button onClick={() => router.push("/delete")}>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}