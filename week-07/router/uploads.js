// express에서 Router를 import한다. {Router}는 라우터를 모듈화 하여 관리.
import { Router } from "express";

// 새로운 Router 객체를 생성.
const router = Router();

/**
 * POST /users/:userId/profile-image
 * 특정 사용자의 프로필 사진을 업로드.
 * @param {string} userId - URL 경로에서 전달된 사용자 ID
 * @response {string} 사용자 ID를 포함한 프로필 사진 업로드 메시지를 응답.
 */
router.post("/users/:userId/profile-image", (req, res) => {
  // URL 경로에서 userId를 추출.
  const { userId } = req.params;

  // 프로필 사진 업로드 메시지를 응답.
  res.send(`프로필 사진 업로드: ${userId}`);
});

/**
 * POST /posts/:postId/image
 * 특정 게시물의 이미지를 업로드.
 * @param {string} postId - URL 경로에서 전달된 게시물 ID
 * @response {string} 게시물 ID를 포함한 이미지 업로드 메시지를 응답.
 */
router.post("/posts/:postId/image", (req, res) => {
  // URL 경로에서 postId를 추출.
  const { postId } = req.params;

  // 게시물 이미지 업로드 메시지를 응답.
  res.send(`게시물 이미지 업로드: ${postId}`);
});

// Router 객체를 모듈로 export.
export default router;
