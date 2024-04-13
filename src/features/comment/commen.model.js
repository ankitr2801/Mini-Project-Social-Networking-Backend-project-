

const comments = [];

let id = 0;

class CommentModel {
  constructor(userId,content) {
    this.id = ++id;
    this.userId = userId;
    this.content = content;
  }
}

export const getAll = () => {
  return comments;
};

export const createNewComment= (comment) => {
  const newComment = new CommentModel(
    comment.userId,
    comment.content
  );
  //   console.log(newPost);
  comments.push(newComment);
  return newComment;
};

export const getOneComment= (commentId) => {
  const comment = comments.find((c) => c.id == commentId);
  //   console.log(post, "post model");
  return comment;
};

export const updateComment = (CommentId, updatedData ,userId) => {
  // console.log(postid , "postId found in model ");
  const commentUpdate= comments.find((c) => c.id == CommentId && c.userId==userId);
  if (!commentUpdate) {
    return "comment not found";
  } else {

  (commentUpdate.content = updatedData.content || commentUpdate.caption)

  return commentUpdate;
  }
};

export const DeletePost = (CommentId,userId) => {
  const index = comments.findIndex((p) => p.id == CommentId && p.userId==userId);
  if (index !== -1) {
    const deletedPost = comments.splice(index, 1)[0];
    // console.log(posts, "updated posts array after deletion");
    return deletedPost;
  } else {
    return null; // Post not found
  }
};

