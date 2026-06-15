package com.example.sougou2_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sougou2_backend.dto.MemberDto;
import com.example.sougou2_backend.entity.MemberEntity;
import com.example.sougou2_backend.form.MemberForm;
import com.example.sougou2_backend.repository.MemberRepository;

/**
 * メンバーデータ処理用
 * @author koki_shinzato
 */
@Service
public class MemberService {
	
	@Autowired
	private MemberRepository memberRepository;
	
	/**
	 * 全メンバー情報を取得、Dtoに変換して返す
	 * @return Dtoリスト
	 */
	public List<MemberDto> findAll(){
		return convertFromEntityToDto(memberRepository.findAll());
	}
	
	/**
	 * メンバーIDに該当したメンバーデータを取得
	 * @param memberId
	 * @return メンバーデータ（Dto）
	 */
	public MemberDto findById(String memberId) {
		return memberRepository.findById(memberId).map(opEntity -> opEntity.toDto()).orElse(null);
	}
	
	/**
	 * メンバーデータをDBへ登録
	 * @param memberDto
	 * @return 登録データ(Dto)
	 */
	public MemberDto save(MemberDto memberDto) {
		
		MemberEntity memberEntity = memberRepository.save(memberDto.toEntity());
		return memberEntity.toDto();
	}
	
	/**
	 * ID指定でメンバーデータ削除
	 * @param memberId
	 */
	public void deleteById(String memberId) {
			memberRepository.deleteById(memberId);
	}
	
	/**
	 * Entityリスト → Dtoリスト 一括変換
	 * @param entityList
	 * @return dtoList
	 */
	public List<MemberDto> convertFromEntityToDto(List<MemberEntity> entityList){
		List<MemberDto> dtoList = new ArrayList<MemberDto>();
		entityList.stream().forEach(e -> dtoList.add(e.toDto()));
		
		return dtoList;
	}
	
	/**
	 * Dtoリスト → Formリスト 一括変換
	 * @param dtoList
	 * @return formList
	 */
	public List<MemberForm> convertFromDtoToForm(List<MemberDto> dtoList){
		List<MemberForm> formList = new ArrayList<MemberForm>();
		dtoList.stream().forEach(d -> formList.add(d.toForm()));
		
		return formList;
	}
}
