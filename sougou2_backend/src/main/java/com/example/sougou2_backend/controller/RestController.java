package com.example.sougou2_backend.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.sougou2_backend.dto.MemberDto;
import com.example.sougou2_backend.dto.PlaceDto;
import com.example.sougou2_backend.dto.PositionDto;
import com.example.sougou2_backend.form.MemberForm;
import com.example.sougou2_backend.service.MemberService;
import com.example.sougou2_backend.service.PlaceService;
import com.example.sougou2_backend.service.PositionService;

@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	private MemberService memberService;
	
	@Autowired
	private PlaceService placeService;
	
	@Autowired
	private PositionService	positionService;
	
	/**
	 * 全メンバーリストをJson形式で返す
	 * @param model
	 * @return 全メンバーリスト（Dto)
	 */
	@ResponseBody
	@GetMapping("/api/list")
	public List<MemberDto> list() {
		return memberService.findAll();
	}
	
	/**
	 * ID指定でメンバーデータを取得、Json形式で返す
	 * @param memberId
	 * @return ID指定のメンバー情報
	 */
	@ResponseBody
	@PostMapping("/api/member")
	public MemberDto detail(@RequestParam("id") String memberId) {
		return memberService.findById(memberId);
	}
	
	/**
	 * 全役職データを取得、Json形式で返す
	 * @return 役職名リスト
	 */
	@ResponseBody
	@GetMapping("/api/positions")
	public List<PositionDto> positionAll() {
		return positionService.findAll();
	}
	
	/**
	 * 全事業所データを取得、Json形式で返す
	 * @return 事業所名リスト
	 */
	@ResponseBody
	@GetMapping("/api/places")
	public List<PlaceDto> placeAll() {
		return placeService.findAll();
	}
	
	/**
	 * 入力フォームのエラーチェック → DB登録して登録データを返す
	 * @param form
	 * @param result
	 * @return 登録メンバーデータ
	 */
	@ResponseBody
	@PostMapping("/api/add")
	public ResponseEntity<?> add(@Valid @RequestBody MemberForm form, BindingResult result) {
		if(result.hasErrors()) {
			return ResponseEntity.badRequest().body("バリデーションエラーです");
		}
		
		return ResponseEntity.ok(memberService.save(form.toDto()));
	}
}
