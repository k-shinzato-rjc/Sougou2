"use client"

import { useRouter } from "next/navigation"
import { globalState } from "@/app/state"
import { springURL } from "@/app/types"
import { FormTable } from "@/app/table"

// グローバル状態管理フックに保存されているデータを表示 →　登録ボタン押下でSpringBootへ転送してDB登録
export default function AddComfirmView() {
    // 画面遷移用
    const router = useRouter()
    // 入力フォームの引継ぎ
    const userFormData = globalState((state : any) => state.userFormData)

    // 転送したデータのバリデーションに問題が無ければ、完了画面へ遷移
    const Submit = async () => {
        try{
            const response = await fetch(springURL + "/api/add", {
                method : "post",
                credentials : "include",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(userFormData)
            })

            // バリデーションエラー（レスポンスが無い場合）
            // メッセージを付与してエラー画面へ遷移
            if(!response.ok){
                const message = "入力内容にエラーがあります"
                router.push(`/error?message=${message}`)
                return
            }

            router.push("/add/complete")

        }catch(error){
            alert("通信エラーが発生しました")
            return
        }
    }

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button>
            <div>新規登録 確認画面</div>
            <div>以下のデータを登録します よろしいですか</div>
            
            {/** フォーム内容を入れたテーブルを呼び出し */}
            <FormTable/>
            <button onClick={() => Submit()}>登録</button>{" "}<button onClick={() => router.push("/add")}>戻る</button>
        </div>
    )
}