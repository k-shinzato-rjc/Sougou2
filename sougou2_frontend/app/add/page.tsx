"use client"

import {useEffect,useState} from "react"
import { set, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

// types.tsから型
import { Position, Place, UserFormData, springURL } from "../types"
//グローバル状態管理のフックを呼び出し
import { globalState } from "../state"
// テーブルを読み込み
import { FormTable } from "../table"

export default function AddView() {
    const[positions, setPositions] = useState<Position[]>()
    const[places,setPlaces] = useState<Place[]>()
    const{register,handleSubmit,reset} = useForm<UserFormData>()
    const router = useRouter()

    // グローバル状態管理のセッターを呼び出す
    const setUserFormData = globalState((state : any) => state.setUserFormData)

    const userFormData = globalState((state : any) => state.userFormData)

    // 読み込み時、全役職名と全事業所名を取得してステートメントへ格納
    useEffect(() => {
        const FetchData = async () => {
            try{
                const positionRes = await fetch(springURL + "/api/positions", {credentials : "include"})
                const placeRes = await fetch(springURL + "/api/places", {credentials : "include"})

                if(!(positionRes.ok && placeRes.ok)){
                    console.log(positionRes.text())
                    console.log(placeRes.text())
                    alert("データが取得できませんでした")
                    return
                }

                const positionJson = await positionRes.json()
                const placeJson = await placeRes.json()
                setPositions(positionJson)
                setPlaces(placeJson)

                // フォーム内に初期値を設定（グローバル状態に保存されているデータを入れる）
                reset(userFormData)

            }catch(error){
                console.log(error)
                alert("通信に失敗しました")
                return;
            }
        }

        FetchData()
    },[])

    const submit = (data : UserFormData) => {
        // 入力内容をグローバル状態管理のフックに格納
        setUserFormData(data)
        // 登録確認画面へ遷移
        router.push("/add/comfirm")
    }

    return(
        <div>
            <button onClick={() => router.push("/")}>メニュー</button><br/>
            <div>新規登録画面</div>
            <form onSubmit={handleSubmit(submit)}>
                <table>
                    <tbody>
                        <tr>
                            <th>社員ID</th>
                            <td><input type="text"{...register("memberId")}></input></td>
                        </tr>
                        <tr>
                            <th>氏名</th>
                            <td><input type="text"{...register("name")}></input></td>
                        </tr>
                        <tr>
                            <th>年齢</th>
                            <td><input type="number"{...register("age")}></input></td>
                        </tr>
                        <tr>
                            <th>性別</th>
                            <td>
                                <select {...register("sex", {required : true})}>
                                    <option value="">未選択</option>
                                    <option value="0">男</option>
                                    <option value="1">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td><input type="text"{...register("address")}></input></td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td><input type="text"{...register("tel")}></input></td>
                        </tr>
                        <tr>
                            <th>メールアドレス</th>
                            <td><input type="text"{...register("mail")}></input></td>
                        </tr>
                        <tr>
                            <th>役職</th>
                            <td>
                                <select {...register("positionName", {required : true})}>
                                    <option value="">未選択</option>
                                    {positions?.map((p,index) => (
                                        <option key={index} value={p.positionName}>{p.positionName}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>事業所</th>
                            <td>
                                <select {...register("placeName", {required : true})}>
                                    <option value="">未選択</option>
                                    {places?.map((p,index) => (
                                        <option key={index} value={p.placeName}>{p.placeName}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">登録</button>
            </form>
        </div>
    )
}