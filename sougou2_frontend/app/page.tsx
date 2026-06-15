"use client"

import { useRouter } from "next/navigation"

export default function MenuView() {
  const router = useRouter();

  return(
    <div>
      <button onClick={() => router.push("/add")}>新規登録</button>
      <button onClick={() => router.push("/list")}>メンバー一覧</button>
    </div>
  )
}