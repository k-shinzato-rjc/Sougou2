"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { globalState } from "@/app/components/state"
import { Menu } from "@/app/components/menubar"
import { springURL } from "@/app/components/types"
import { FormTable } from "@/app/components/table"

export default function UpdateComfirmView() {

    // 更新画面から転送されたメンバーIDを取得
    const param = useSearchParams()
    const memberId = param.get("memberId")

    // 遷移用
    const router = useRouter()

    // グローバル状態管理フックから入力データを取得
    const userFormData = globalState((state : any) => state.userFormData)

    const Update = async () => {
        try{
            const response = await fetch(springURL + "/api/save" , {
                method : "POST",
                credentials : "include",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(userFormData)
            })

            if(!response.ok){
                const message = "更新内容に不備があります"
                router.push(`/error?message=${message}`)
                return
            }

            router.push("/update/complete")
        }catch(error){
            alert("通信エラーが発生しました")
            return
        }
    }

    return(
        <div>
            <Menu/>
            <div>更新確認画面</div>
            <div>以下のデータに更新を行います よろしいですか</div>
            <table>
                <tbody>
                    <tr>
                        <th>　　　　　　　</th><td>更新後</td>
                    </tr>
                </tbody>
            </table>
            <FormTable/>
            <button onClick={() => Update()}>更新</button>{" "}<button onClick={() => router.push(`/update?memberId=${memberId}`)}>戻る</button>
        </div>
    )
}