package com.example.sougou2_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.example.sougou2_backend.dto.MemberDto;

import lombok.Data;

/**
 * メンバー情報Entity
 * @author koki_shinzato
 */
@Data
@Entity
@Table(name="tbl_user")
public class MemberEntity {
	/** ID */
	@Id
	@Column(name="user_id")
	private String memberId;
	
	/** 名前 */
	@Column(name="user_name")
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
	@Column(name="position_id")
	private String positionId;
	
	/** 役職名 */
	@Column(name="position_name")
	private String positionName;
	
	/** 事業所id */
	@Column(name="place_id")
	private String placeId;
	
	/** 事業所名 */
	@Column(name="place_name")
	private String placeName;
	
	/** 登録日 */
	@CreationTimestamp
	@Column(name = "regist", updatable = false)
	private String regist;
	
	/**
	 * Entity → Dto 変換
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
