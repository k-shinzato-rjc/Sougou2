"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function ErrorView(){
    // 遷移用
    const router = useRouter()
    // 確認画面からエラーメッセージ受け取り
    const param = useSearchParams()
    const message = param.get("message")

    return(
        <div>
            <div>エラー画面</div>
            <div>エラー内容：{message}</div>
            <button onClick={() => router.push("/")}>ホームに戻る</button>
        </div>
    )
}