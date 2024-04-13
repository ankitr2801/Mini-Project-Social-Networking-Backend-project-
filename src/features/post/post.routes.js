import express from "express";
import { createPost, getAllPosts , getOnePosts, update,Delete} from "./post.controller.js";
import upload from "../../middleware/fileUpload.middleware.js";

const postRouter = express.Router();

postRouter.get("/" , getAllPosts);
postRouter.post("/" , upload.single("imageUrl"), createPost);
postRouter.get("/:id" , getOnePosts);
postRouter.put("/:id",upload.single("imageUrl") , update);
postRouter.delete("/:id", Delete);


export default postRouter;
