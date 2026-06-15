package com.example.sougou2_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sougou2_backend.dto.PositionDto;
import com.example.sougou2_backend.entity.PositionEntity;
import com.example.sougou2_backend.repository.PositionRepository;

/**
 * 役職データ処理用
 * @author koki_shinzato
 */
@Service
public class PositionService {
	
	@Autowired
	private PositionRepository positionRepository;
	
	/**
	 * DBから全役職データを取得
	 * @return 役職リスト(Dto)
	 */
	public List<PositionDto> findAll(){
		return convertFromEntityToDto(positionRepository.findAll());
	}
	
	/**
	 * Entityリスト → Dtoリスト 一括変換
	 * @param entityList
	 * @return dtoList
	 */
	public List<PositionDto> convertFromEntityToDto(List<PositionEntity> entityList){
		List<PositionDto> dtoList = new ArrayList<PositionDto>();
		entityList.stream().forEach(e -> dtoList.add(e.toDto()));
		
		return dtoList;
	}
}
