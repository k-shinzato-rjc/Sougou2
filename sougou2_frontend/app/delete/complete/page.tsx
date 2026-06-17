"use client"

import { useRouter } from "next/navigation"
import { globalState } from "@/app/components/state"
import { Menu } from "@/app/components/menubar"
import { FormTable } from "@/app/components/table"

export default function DeleteComplete() {
    // 画面遷移用
    const router = useRouter()

    // グローバルステートメントのデータが反映されたテーブルを表示
    return(
        <div>
            <Menu/>
            <div>削除完了画面</div>
            <div>以下のデータを削除しました</div>
            <FormTable/>
        </div>
    )
}