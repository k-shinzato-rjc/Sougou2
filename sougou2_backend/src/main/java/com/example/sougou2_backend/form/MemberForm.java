package com.example.sougou2_backend.form;

import com.example.sougou2_backend.dto.MemberDto;

import lombok.Data;

/**
 * メンバー登録内容Form
 * @author koki_shinzato
 */
@Data
public class MemberForm {
	/** ID */
	private String memberId;
	/** 名前 */
	private String name;
	/** 年齢 */
	private String age;
	/** 住所 */
	private String address;
	/** 性別 */
	private String sex;
	/** mail */
	private String mail;
	/** 電話番号 */
	private String tel;
	/** 役職id */
	private String positionId;
	/** 役職名 */
	private String positionName;
	/** 事業所id */
	private String placeId;
	/** 事業所名 */
	private String placeName;
	/** 登録日 */
	private String regist;
	/** 遷移元 判別用 */
	private String submitView;
	
	/**
	 * Form → Dto 変換
	 * @return Dto
	 */
	public MemberDto toDto() {
		MemberDto memberDto = new MemberDto();
		memberDto.setMemberId(memberId);
		memberDto.setName(name);
		memberDto.setAge(age);
		memberDto.setAddress(address);
		memberDto.setSex(sex);
		memberDto.setMail(mail);
		memberDto.setTel(tel);
		memberDto.setPositionId(positionId);
		memberDto.setPositionName(positionName);
		memberDto.setPlaceId(placeId);
		memberDto.setPlaceName(placeName);
		memberDto.setRegist(regist);
		
		return memberDto;
	}
}
