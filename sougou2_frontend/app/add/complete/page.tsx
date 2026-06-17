"use client"

import { useRouter } from "next/navigation"
import { FormTable } from "@/app/components/table"
import { globalState } from "@/app/components/state"
import { useEffect } from "react"

export default function AddCompleteView(){
    const router = useRouter()
    const clearUserFormData = globalState((state : any) => state.clearUserFormData)

    // メニューに戻ると、グローバル状態のFormデータが削除される    
    const deleteState = () => {
        clearUserFormData(null)
        router.push("/")
    }

    return(
        <div>
            <button onClick={() => deleteState()}>メニュー</button>
            <div>新規登録 完了画面</div>
            <div>以下のデータが登録されました</div>
            <FormTable/>
        </div>
    )
}