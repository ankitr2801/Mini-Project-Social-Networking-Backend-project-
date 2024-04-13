import { createNewComment , getAll ,DeletePost,updateComment , getOneComment , } from "./commen.model.js";

export const createComment= async (req, res, next) => {
  try {
    const commentId = req.params.id
    const { content } = req.body;
    // console.log(req.body, "reqBody console");

    if (!content) {
      return res.status(400).json({
        status: "failure",
        message: "Content are required.",
      });
    }

    const data = {
        commentId,
      content,
    };

    const postResult = await createNewComment(data);

    return res.status(201).json({ status: "success", post: postResult });
  } catch (error) {
    console.error("Error creating post:", error);
    return res
      .status(500)
      .json({ status: "failure", message: "Internal Server Error" });
  }
};

export const getAllComments= (req, res, next) => {
  const comment = getAll();
  res.status(200).send(comment);
};

export const getOneComments= (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const data = getOneComment(id);
  // console.log(data);
  if (!data) {
    res.status(400).send("post not found");
  } else {
    res.status(201).send({ status: "success", data });
  }
};

export const update = (req,res)=>{
  const postIdToUpdate = req.params.id;
    const updatedData = req.body;
    const updatedPost = updateComment(postIdToUpdate, updatedData);
    console.log(updatedPost , "updatedPost in controller");

    if (updatedPost) {
        res.status(200).json({ status: "success", post: updatedPost });
    } else {
        res.status(404).json({ status: "failure", message: "Post not found." });
    }

}

export const Delete = (req,res)=>{
  const CommentId = req.params.id;
  console.log(CommentId , "postId in conroller");

  const isDeleted = DeletePost(CommentId);
  console.log(isDeleted , "isDeleted in controller");

  if(isDeleted){
    res.status(201).json({ status: "success", deletedComment : isDeleted })
  } else {
    res.status(400).json({ status: "failure", message: "comment not found." })
  }
}