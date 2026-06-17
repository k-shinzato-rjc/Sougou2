package com.example.sougou2_backend.form;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.example.sougou2_backend.dto.MemberDto;

import lombok.Data;

/**
 * メンバー登録内容Form
 * @author koki_shinzato
 */
@Data
public class MemberForm {
	/** ID */
	@NotNull
	private String memberId;
	
	/** 名前 */
	@NotNull
	@Length(max=100, min=1)
	private String name;
	
	/** 年齢 */
	@NotNull
	@Min(0)
	@Max(200)
	private Integer age;
	
	/** 住所 */
	private String address;
	
	/** 性別 */
	@Min(0)
	@Max(1)
	private Integer sex;
	
	/** mail */
	private String mail;
	
	/** 電話番号 */
	@Pattern(regexp="^\\d{1,4}-?\\d{1,4}-?\\d{4}$")
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
	 * Form → Dto 変換
	 * @return Dto
	 */
	public MemberDto toDto() {
		MemberDto memberDto = new MemberDto();
		memberDto.setMemberId(memberId);
		memberDto.setName(name);
		memberDto.setAge(String.valueOf(age));
		memberDto.setAddress(address);
		memberDto.setSex(String.valueOf(sex));
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
