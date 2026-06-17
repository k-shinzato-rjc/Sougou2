"use client"

import { useRouter } from "next/navigation"
import { FormTable } from "@/app/table"

export default function AddCompleteView(){
    const router = useRouter()

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button>
            <div>新規登録 完了画面</div>
            <div>以下のデータが登録されました</div>
            <FormTable/>
        </div>
    )
}