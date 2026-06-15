package com.example.sougou2_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import com.example.sougou2_backend.dto.PositionDto;

import lombok.Data;

/**
 * 役職データ格納用Entity(役職名のみ使用・読み取り専用）
 * @author koki_shinzato
 */
@Data
@Entity
@Table(name="mst_position")
public class PositionEntity {
	
	// 役職ID
	@Id
	@Column(name="position_id")
	private String positionId;
	
	// 役職名
	@Column(name="position_name")
	private String positionName;
	
	/**
	 * Entity → Dto　変換
	 * @return Dto
	 */
	public PositionDto toDto() {
		PositionDto positionDto = new PositionDto();
		positionDto.setPositionName(positionName);
		
		return positionDto;
	}
}
