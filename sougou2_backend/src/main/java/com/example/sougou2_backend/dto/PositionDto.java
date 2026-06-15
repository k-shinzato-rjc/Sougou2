package com.example.sougou2_backend.dto;

import lombok.Data;

/**
 * 役職データ格納用Dto（役職名のみ使用・読み取り専用）
 * @author koki_shinzato
 */
@Data
public class PositionDto {
	
	// 事業所名
	private String positionName;
}
