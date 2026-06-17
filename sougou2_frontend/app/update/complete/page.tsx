"use client"

import { useRouter } from "next/navigation"
import { globalState } from "@/app/components/state"
import { Menu } from "@/app/components/menubar"
import { FormTable } from "@/app/components/table"

export default function UpdateCompleteView() {
    const router = useRouter()
    const userFormData = globalState((state:any) => state.userFormData)

    return(
        <div>
            <Menu/>
            <div>更新完了画面</div>
            <div>以下のデータに更新されました</div>
            <table>
                <tbody>
                    <tr>
                        <th>　　　　　　　</th><td>更新後</td>
                    </tr>
                </tbody>
            </table>
            <FormTable/>
        </div>
    )
}