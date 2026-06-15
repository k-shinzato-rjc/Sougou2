package com.example.sougou2_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.sougou2_backend.dto.MemberDto;
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
	
	@ResponseBody
	@PostMapping("/api/member")
	public MemberDto detail(@RequestParam("id") String memberId) {
		return memberService.findById(memberId);
	}
}
