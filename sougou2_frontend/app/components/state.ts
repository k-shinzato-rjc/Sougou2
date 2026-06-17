import { create } from "zustand"
import { persist } from "zustand/middleware"
import { UserFormData } from "./types"

// グローバル状態管理のフック 複数の画面で入力データを保持
export const globalState = create(persist((set) => ({

    // 格納データ
    userFormData: {
        memberId: "",
        name: "",
        age: "",
        address: "",
        sex: "",
        mail: "",
        tel: "",
        positionName: "",
        placeName: ""
    },

    // 格納用 処理
    setUserFormData : (data : UserFormData) => set({ userFormData : data }),
    clearUserFormData : () => set({ userFormData : null })

}), {name: "use-storage"}))