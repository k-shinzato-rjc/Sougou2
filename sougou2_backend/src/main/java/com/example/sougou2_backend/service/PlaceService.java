package com.example.sougou2_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sougou2_backend.dto.PlaceDto;
import com.example.sougou2_backend.entity.PlaceEntity;
import com.example.sougou2_backend.repository.PlaceRepository;

/**
 * 事業所データ処理用
 * @author koki_shinzato
 */
@Service
public class PlaceService {
	
	@Autowired
	private PlaceRepository	placeRepository;
	
	/**
	 * DBから全事業所データを取得
	 * @return 事業所リスト(Dto)
	 */
	public List<PlaceDto> findAll(){
		return convertFromEntityToDto(placeRepository.findAll());
	}
	
	/**
	 * Entityリスト → Dtoリスト 一括変換
	 * @param entityList
	 * @return dtoList
	 */
	public List<PlaceDto> convertFromEntityToDto(List<PlaceEntity> entityList){
		List<PlaceDto> dtoList = new ArrayList<PlaceDto>();
		entityList.stream().forEach(e -> dtoList.add(e.toDo()));
		
		return dtoList;
	}
}
