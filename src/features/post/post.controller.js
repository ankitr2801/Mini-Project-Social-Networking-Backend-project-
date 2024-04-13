import { createNewPost, getAll, getOnePost , updatePost  , DeletePost} from "./post.model.js";

export const createPost = async (req, res, next) => {
  try {
    const { caption, imageUrl, rating } = req.body;
    // console.log(req.body, "reqBody console");

    if (!caption || !imageUrl || !rating) {
      return res.status(400).json({
        status: "failure",
        message: "Caption and rating are required.",
      });
    }

    const data = {
      caption,
      imageUrl: req.file ? req.file.filename : null, // Assuming req.file contains information about the uploaded file
      rating,
    };

    const postResult = await createNewPost(data);

    return res.status(201).json({ status: "success", post: postResult });
  } catch (error) {
    console.error("Error creating post:", error);
    return res
      .status(500)
      .json({ status: "failure", message: "Internal Server Error" });
  }
};

export const getAllPosts = (req, res, next) => {
  const post = getAll();
  res.status(200).send(post);
};

export const getOnePosts = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const data = getOnePost(id);
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
    const updatedPost = updatePost(postIdToUpdate, updatedData);
    console.log(updatedPost , "updatedPost in controller");

    if (updatedPost) {
        res.status(200).json({ status: "success", post: updatedPost });
    } else {
        res.status(404).json({ status: "failure", message: "Post not found." });
    }

}

export const Delete = (req,res)=>{
  const postId = req.params.id;
  console.log(postId , "postId in conroller");

  const isDeleted = DeletePost(postId);
  console.log(isDeleted , "isDeleted in controller");

  if(isDeleted){
    res.status(201).json({ status: "success", deletedPost : isDeleted })
  } else {
    res.status(400).json({ status: "failure", message: "Post not found." })
  }
}