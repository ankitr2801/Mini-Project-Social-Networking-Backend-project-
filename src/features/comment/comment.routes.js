import express from "express";
import { createComment , getAllComments,getOneComments , update , Delete } from "./comment.controller.js"


const commentRouter = express.Router();

commentRouter.get("/" , getAllComments);
commentRouter.post("/" , createComment);
commentRouter.get("/:id" , getOneComments);
commentRouter.put("/:id", update);
commentRouter.delete("/:id", Delete);


export default commentRouter;
