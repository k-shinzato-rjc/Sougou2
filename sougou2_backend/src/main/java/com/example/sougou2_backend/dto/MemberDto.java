package com.example.sougou2_backend.dto;

import com.example.sougou2_backend.entity.MemberEntity;
import com.example.sougou2_backend.form.MemberForm;

import lombok.Data;

/**
 * メンバー情報用Dto
 * @author koki_shinzato
 */
@Data
public class MemberDto {
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
	
	/**
	 * Dto → Form 変換
	 * @return Form
	 */
	public MemberForm toForm() {
		MemberForm memberForm = new MemberForm();
		memberForm.setMemberId(memberId);
		memberForm.setName(name);
		memberForm.setAge(age);
		memberForm.setAddress(address);
		memberForm.setSex(sex);
		memberForm.setMail(mail);
		memberForm.setTel(tel);
		memberForm.setPositionId(positionId);
		memberForm.setPositionName(positionName);
		memberForm.setPlaceId(placeId);
		memberForm.setPlaceName(placeName);
		memberForm.setRegist(regist);
		
		return memberForm;
	}

	/**
	 * Dto → Entity 変換
	 * @return Entity
	 */
	public MemberEntity toEntity() {
		MemberEntity memberEntity = new MemberEntity();
		memberEntity.setMemberId(memberId);
		memberEntity.setName(name);
		memberEntity.setAge(age);
		memberEntity.setAddress(address);
		memberEntity.setSex(sex);
		memberEntity.setMail(mail);
		memberEntity.setTel(tel);
		memberEntity.setPositionId(positionId);
		memberEntity.setPositionName(positionName);
		memberEntity.setPlaceId(placeId);
		memberEntity.setPlaceName(placeName);
		memberEntity.setRegist(regist);
		
		return memberEntity;
	}
}
