import { Router } from "express";
const router: Router = Router();

router.get("/post/:id", (_req, res) => res.status(200).json({ message: "Post retrieved" }));
router.get("/user/:id/profile", (_req, res) => res.status(200).json({ message: "Profile retrieved" }));

export default router;
