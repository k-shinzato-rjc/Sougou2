package com.example.sougou2_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sougou2_backend.entity.MemberEntity;

/**
 * ユーザーテーブル用レポジトリ
 * @author koki_shinzato
 */
@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String>{

}
