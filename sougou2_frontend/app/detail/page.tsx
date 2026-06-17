"use client"

import { useState, useEffect } from "react"
import { useRouter,useSearchParams, useServerInsertedHTML } from "next/navigation";

// types.tsから型を呼び出し
import { Member, springURL } from "../types"

export default function DetailView() {
    const[member , setMember] = useState<Member>()
    const router = useRouter()

    // 一覧画面からのパラメーターを受け取る
    const param = useSearchParams();
    const memberId = param.get("memberId")

    useEffect(() => {
        const FechData = async () => {
            try{
                const response = await fetch(springURL + `/api/member?id=${memberId}`, {method : "post", credentials : "include"})
                if(!response.ok){
                    console.log(response.text())
                    alert("データを取得できませんでした")
                    return;
                }

                const json = await response.json()
                setMember(json)

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
                <tbody>
                    <tr>
                     <th>社員ID</th><td>{member?.memberId}</td>
                   </tr>
                    <tr>
                       <th>氏名</th><td>{member?.name}</td>
                    </tr>
                     <tr>
                        <th>年齢</th><td>{member?.age}</td>
                    </tr>
                    <tr>
                        <th>性別</th><td>{member?.sex == "0" ? "男" : "女"}</td>
                    </tr>
                    <tr>
                        <th>住所</th><td>{member?.address}</td>
                    </tr>
                    <tr>
                        <th>電話番号</th><td>{member?.tel}</td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th><td>{member?.mail}</td>
                    </tr>
                    <tr>
                        <th>役職</th><td>{member?.positionName}</td>
                    </tr>
                    <tr>
                        <th>事業所</th><td>{member?.placeName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}