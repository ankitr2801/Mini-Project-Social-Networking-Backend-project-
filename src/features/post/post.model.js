const posts = [];

let id = 0;

class postModel {
  constructor(userId, caption, imageUrl, rating) {
    this.id = ++id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}

export const getAll = () => {
  return posts;
};

export const createNewPost = (post) => {
  const newPost = new postModel(
    post.userId,
    post.caption,
    post.imageUrl,
    post.rating
  );
  //   console.log(newPost);
  posts.push(newPost);
  return newPost;
};

export const getOnePost = (postid) => {
  const post = posts.find((p) => p.id == postid);
  //   console.log(post, "post model");
  return post;
};

export const updatePost = (postid,userId ,updatedData) => {
  // console.log(postid , "postId found in model ");
  const post_to_Update = posts.find((p) => p.id == postid && p.userId == userId);
  if (!post_to_Update) {
    return "Post not found";
  } else {

  (post_to_Update.caption = updatedData.caption || post_to_Update.caption),
    (post_to_Update.imageUrl = updatedData.imageUrl || post_to_Update.imageUrl),
    (post_to_Update.rating = updatedData.rating || post_to_Update.rating);

  return post_to_Update;
  }
};

export const DeletePost = (postid, userId) => {
  const index = posts.findIndex((p) => p.id == postid && p.userId == userId);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1)[0];
    // console.log(posts, "updated posts array after deletion");
    return deletedPost;
  } else {
    return null; // Post not found
  }
};

