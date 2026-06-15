package com.example.sougou2_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sougou2_backend.entity.PlaceEntity;

/**
 * 事業所テーブル用レポジトリ
 * @author koki_shinzato
 */
@Repository
public interface PlaceRepository extends JpaRepository<PlaceEntity, String>{

}
