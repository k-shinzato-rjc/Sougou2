"use client"

import { useRouter } from "next/navigation"

export const Menu = () => {
    const router = useRouter()

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button>
            <button onClick={() => router.push("/list")}>メンバー一覧</button>
        </div>
    )
}