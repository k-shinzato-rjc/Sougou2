"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// types.tsから型を呼び出し
import { Member, springURL } from "../components/types"

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
                return
            }
        }
        fetchData();
    },[])

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button>
            <div>メンバー覧画面</div>
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
                                <button onClick={() => router.push(`/detail?memberId=${member.memberId}`)}>詳細</button>
                            </td>
                            <td>
                                <button onClick={() => router.push(`/update?memberId=${member.memberId}`)}>更新</button>
                            </td>
                            <td>
                                <button onClick={() => router.push(`/delete?memberId=${member.memberId}`)}>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}