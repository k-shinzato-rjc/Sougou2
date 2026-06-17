"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { globalState } from "../components/state"
import { Position, Place, UserFormData } from "../components/types"
import { springURL } from "../components/types"
import { Menu } from "../components/menubar"

export default function UpdateView() {
    // 遷移用
    const router = useRouter()

    // グローバル状態のセッターと内容を呼び出す
    const userFormData = globalState((state: any) => state.userFormData)
    const setUserFormData = globalState((state: any) => state.setUserFormData)
    const clearUserFormData = globalState((state: any) => state.clearUserFormData)

    // セレクトボックス表示用 役職・事業所リスト ステートメント
    const [positions, setPosition] = useState<Position[]>()
    const [places, setPlaces] = useState<Place[]>()

    // 入力Form用
    const { register, handleSubmit, reset } = useForm<UserFormData>()

    // 一覧画面 or 更新確認画面から転送されたメンバーIDを受け取る
    const param = useSearchParams()
    const memberId = param.get("memberId")

    // 一覧画面から受け取ったメンバーIDに該当したデータをSpringBootから受け取る
    // グローバル状態へ格納
    useEffect(() => {
        const FetchData = async () => {
            try {
                const resMember = await fetch(springURL + `/api/member?memberId=${memberId}`, { method: "post", credentials: "include" })
                const resPositions = await fetch(springURL + "/api/positions", { credentials: "include" })
                const resPlaces = await fetch(springURL + "/api/places", { credentials: "include" })

                if (!(resMember.ok && resPositions.ok && resPlaces.ok)) {
                    alert("データの取得に失敗しました")
                    return
                }

                // 取得したメンバーデータをグローバル状態に反映させる
                const jsonMember = await resMember.json()
                setUserFormData(jsonMember)

                // jsonデータをFormの初期値にも設定
                reset(jsonMember)

                // 役職・事業所リストデータをステートメントに格納
                const jsonPositions = await resPositions.json()
                const jsonPlaces = await resPlaces.json()
                setPosition(jsonPositions)
                setPlaces(jsonPlaces)

            } catch (error) {
                alert("通信エラーが発生しました")
                return
            }
        }

        FetchData()

    }, [])

    // Form内容をグローバル状態に格納し、更新確認画面へ遷移
    const toComfirm = (data: UserFormData) => {
        setUserFormData(data)

        // 更新確認画面にもメンバーIDを渡す（戻った際のメンバーデータ取得用）
        router.push(`/update/comfirm?memberId=${memberId}`)
    }

    // グローバル状態のデータを削除し、メンバー一覧へ戻る
    const backList = () => {
        clearUserFormData(null)
        router.push("/list")
    }

    return (
        <div>
            <Menu />
            <form onSubmit={handleSubmit(toComfirm)}>
                <div>更新画面</div>
                <div>以下のデータの更新を行います</div>
                <table>
                    <tbody>
                        <tr>
                            <td /><td />
                        </tr>
                        <tr>
                            <th>社員ID</th>
                            <td>{userFormData?.memberId}</td>
                        </tr>
                        <tr>
                            <th>氏名</th>
                            <td>
                                <input type="text" {...register("name")}></input>
                            </td>
                        </tr>
                        <tr>
                            <th>年齢</th>
                            <td>
                                <input type="number" {...register("age")}></input>
                            </td>
                        </tr>
                        <tr>
                            <th>性別</th>
                            <td>
                                <select {...register("sex")}>
                                    <option value="0">男</option>
                                    <option value="1">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>
                                <input type="text" {...register("address")}></input>
                            </td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>
                                <input type="text" {...register("tel")}></input>
                            </td>
                        </tr>
                        <tr>
                            <th>メールアドレス</th>
                            <td>
                                <input type="text" {...register("mail")}></input>
                            </td>
                        </tr>
                        <tr>
                            <th>役職</th>
                            <td>
                                <select {...register("positionName")}>
                                    {positions?.map((position, index) => (
                                        <option key={index}>{position.positionName}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>事業所</th>
                            <td>
                                <select {...register("placeName")}>
                                    {places?.map((place, index) => (
                                        <option key={index}>{place.placeName}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">更新</button>{" "}<button onClick={() => backList()}>戻る</button>
            </form>
        </div>
    )
}