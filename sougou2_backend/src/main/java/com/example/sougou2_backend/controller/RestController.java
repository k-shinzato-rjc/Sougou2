package com.example.sougou2_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	 * 全メンバーリストをViewへ渡し、一覧画面へ遷移
	 * @param model
	 * @return メンバー一覧画面
	 */
	@ResponseBody
	@GetMapping("/api/list")
	public List<MemberDto> list() {
		return memberService.findAll();
	}
}
