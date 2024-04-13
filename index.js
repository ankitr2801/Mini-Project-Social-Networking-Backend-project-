// server.mjs
import express from 'express';
import userRouter from './src/features/user/user.routes.js';
import postRouter from './src/features/post/post.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import commentRouter from './src/features/comment/comment.routes.js';
import jwtAuth from './src/middleware/jwtAuth.middleware.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';
import cors from "cors";
import errorHandler from './src/middleware/error.handler.middleware.js';


const app = express();
app.use(express.json());

app.use(loggerMiddleware)
app.use(errorHandler)
app.use(cors())

// routes
app.use("/api/user", userRouter)
app.use("/api/post", jwtAuth , postRouter)
app.use("/api/like",jwtAuth , likeRouter)
app.use("/api/comment",jwtAuth,commentRouter)

app.use((req, res) => {
  return res.status(404).send("API not found");
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running at 3000`);
});

export default app;
