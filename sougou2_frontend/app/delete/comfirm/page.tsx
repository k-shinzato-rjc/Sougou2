"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { globalState } from "@/app/components/state"
import { Menu } from "@/app/components/menubar"
import { FormTable } from "@/app/components/table"
import { springURL } from "@/app/components/types"
import { useEffect } from "react"

export default function DeleteComfirm() {
    // グローバルステートメントの格納処理・削除処理
    const setUserFormData = globalState((state:any) => state.setUserFormData)
    const clearUserFormData = globalState((state:any) => state.clearUserFormData)
    // 画面遷移用
    const router = useRouter()
    // 一覧画面からのメンバーIDを取得
    const param = useSearchParams()
    const memberId = param.get("memberId")

    // 一覧画面からのIDに該当したメンバーデータを取得  → グローバルステートメントに格納
    useEffect(() => {
        const FetchData = async () => {
           try{
                const response = await fetch(springURL + `/api/member?memberId=${memberId}`,{method : "post", credentials : "include"})

                if(!response.ok){
                    alert("データが取得できませんでした")
                    return
                }

                const json = await response.json()
                setUserFormData(json)

            }catch(error){
                alert("通信エラーが発生しました")
            }
        }

        FetchData()
    },[])

    // 削除ボタン押下 → SpringBootへ削除リクエスト
    // 削除できなかった場合、メッセージを付与してエラー画面
    // 成功した場合は完了画面へ遷移
    const deleteMember = async () => {
        try{
            const response = await fetch(springURL + `/api/delete?memberId=${memberId}`, {method : "post", credentials : "include"})

            if(!response.ok){
                const message = "データの削除に失敗しました"
                router.push(`/error?message=${message}`)
                return
            }

            router.push("/delete/complete")

        }catch(error){
            alert("通信エラーが発生しました")
            return
        }
    }

    // 戻るボタン押下 → グローバルステートメントの値を削除して一覧画面へ
    const backList = () => {
        clearUserFormData(null)
        router.push("/list")
    }

    return(
        <div>
            <Menu/>
            <div>削除確認画面</div>
            <div>以下のデータを削除します よろしいですか</div>
            <FormTable/>
            <button onClick={() => deleteMember()}>削除</button>{" "}
            <button onClick={() => backList()}>戻る</button>
        </div>
    )
}