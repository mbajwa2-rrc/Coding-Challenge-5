import { Router } from "express";
const router: Router = Router();

/**
 * @openapi
 * /moderation/post/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     tags: [Public]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 */
router.get("/post/:id", (_req, res) => res.status(200).json({ message: "Post retrieved" }));

/**
 * @openapi
 * /moderation/user/{id}/profile:
 *   get:
 *     summary: Retrieve a user profile by ID
 *     tags: [Public]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 */
router.get("/user/:id/profile", (_req, res) => res.status(200).json({ message: "Profile retrieved" }));

export default router;
