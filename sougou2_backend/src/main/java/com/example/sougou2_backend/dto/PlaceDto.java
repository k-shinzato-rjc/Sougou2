package com.example.sougou2_backend.dto;

import lombok.Data;

/**
 * 事業所データ格納Dto（事業所名のみ使用・読み取り専用）
 * @author koki_shinzato
 */
@Data
public class PlaceDto {
	
	// 事業所名
	private String placeName;
}
