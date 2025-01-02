// express에서 Router를 import한다. {Router}는 라우터를 모듈화 하여 관리.
import { Router } from "express";

// 새로운 Router 객체를 생성.
const router = Router();

/*
 * GET /:userId
 * 특정 사용자의 프로필을 조회.
 * @param {string} userId - URL 경로에서 전달된 사용자 ID
 * @response {string} 사용자 ID를 포함한 메시지를 응답으로 보냅니다.
 */
router.get("/:userId", (req, res) => {
  // URL 경로에서 userId를 추출.
  const { userId } = req.params;

  // 사용자 프로필 조회 메시지를 응답한다.
  res.send(`프로필 조회: ${userId}`);
});

/**
 * PATCH /:userId
 * 특정 사용자의 프로필을 수정.
 * @param {string} userId - URL 경로에서 전달된 사용자 ID
 * @response {string} 사용자 ID를 포함한 수정 메시지를 응답한다.
 */
router.patch("/:userId", (req, res) => {
  // URL 경로에서 userId를 추출합니다.
  const { userId } = req.params;

  // 사용자 프로필 수정 메시지를 응답으로 보냅니다.
  res.send(`프로필 수정: ${userId}`);
});

/**
 * POST /:userId
 * 특정 사용자를 회원 탈퇴 처리.
 * @param {string} userId - URL 경로에서 전달된 사용자 ID
 * @response {string} 사용자 ID를 포함한 탈퇴 메시지를 응답.
 */
router.post("/:userId", (req, res) => {
  // URL 경로에서 userId를 추출한다.
  const { userId } = req.params;

  // 사용자 회원 탈퇴 메시지를 응답한다.
  res.send(`회원 탈퇴: ${userId}`);
});

// Router 객체를 모듈로 export 한다.
// 다른 파일에서 이 라우터를 불러와 사용할 수 있다.
export default router;
