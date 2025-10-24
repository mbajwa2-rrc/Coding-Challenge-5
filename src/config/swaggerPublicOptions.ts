export const publicSwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Content Moderation API - Public Documentation",
      version: "1.0.0",
      description: "Public endpoints for retrieving posts and user profiles. Internal moderation routes are excluded."
    },
    servers: [{ url: "http://localhost:3000/api/v1" }]
  },
  apis: ["./src/api/v1/routes/*.ts"]
};
