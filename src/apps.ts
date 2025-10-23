import express from "express";
import moderationRoutes from "./api/v1/routes/moderationRoutes";

const app = express();
app.use(express.json());
app.use("/api/v1/moderation", moderationRoutes);

export default app;
