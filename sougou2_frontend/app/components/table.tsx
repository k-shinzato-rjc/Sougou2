"use client"

import { globalState } from "./state";

export const FormTable = () => {
// 入力フォームを呼び出す
const userFormData = globalState((state: any) => state.userFormData)

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>社員ID</th><td>{userFormData?.memberId}</td>
                    </tr>
                    <tr>
                        <th>氏名</th><td>{userFormData?.name}</td>
                    </tr>
                    <tr>
                        <th>年齢</th><td>{userFormData?.age}</td>
                    </tr>
                    <tr>
                        <th>性別</th><td>{userFormData?.sex == "0" ? "男" : "女"}</td>
                    </tr>
                    <tr>
                        <th>住所</th><td>{userFormData?.address}</td>
                    </tr>
                    <tr>
                        <th>電話番号</th><td>{userFormData?.tel}</td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th><td>{userFormData?.mail}</td>
                    </tr>
                    <tr>
                        <th>役職</th><td>{userFormData?.positionName}</td>
                    </tr>
                    <tr>
                        <th>事業所</th><td>{userFormData?.placeName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}