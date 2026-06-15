package com.example.sougou2_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import com.example.sougou2_backend.dto.PlaceDto;

import lombok.Data;

/**
 * 事業所データ格納用Entity（事業所名のみ使用・読み取り専用）
 * @author koki_shinzato
 */
@Data
@Entity
@Table(name="mst_place")
public class PlaceEntity {
	
	// 事業所ID
	@Id
	@Column(name="place_id")
	private String placeId;
	
	// 事業所名
	@Column(name="place_name")
	private String placeName;
	
	/**
	 * Entity → Dto 変換
	 * @return Dto
	 */
	public PlaceDto toDo() {
		PlaceDto placeDto = new PlaceDto();
		placeDto.setPlaceName(placeName);
		
		return placeDto;
	}
}
