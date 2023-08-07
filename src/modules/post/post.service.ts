import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// import { LikePostInput } from './dto/create-post-like.input';

// import {
//   PostComment,
//   PostCommentDocument,
// } from './entities/post-comment.entity';
import { Post } from './entities/post.entity';
// import { PostLike, PostLikeDocument } from './entities/post-like.entity';

import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
// import { UpdatePostCommentInput } from './dto/update-post-comment.input';
import { PostDocument } from './models/post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post')
    private readonly postModel: Model<PostDocument>, // @InjectModel(PostLike.name) // private readonly postLikeModel: Model<PostLikeDocument>, // @InjectModel(PostComment.name) // private readonly postCommentModel: Model<PostCommentDocument>,
  ) {}

  async createPost(createPostInput: CreatePostInput): Promise<Post> {
    const post = await this.postModel.create(createPostInput);
    return post.save();
  }

  async findAllPosts(): Promise<Post[]> {
    return this.postModel.find();
  }

  async findPostById(id: number): Promise<Post> {
    return await this.postModel.findOne({ id });
  }

  async updatePost(
    id: number,
    updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    await this.postModel.updateOne({ id }, updatePostInput);
    return this.postModel.findOne({ id });
  }

  async deletePost(id: number): Promise<Post> {
    const post = await this.postModel.findOne({ id });
    await this.postModel.deleteOne({ id });
    return post.save();
  }

  // async likePost(likePostInput: LikePostInput): Promise<Post> {
  // const { postId } = likePostInput;

  // const { post } = await this.postLikeModel.findOne({ id: postId });

  // await this.postModel.updateOne({ likes: Number(post.likes) + 1 }, post);

  // return post;
  // }

  // async commentPost(commentPostInput: CreatePostInput): Promise<Post> {
  // const { postId, content } = commentPostInput;
  // const post = await this.postModel.findOne({ id: postId });
  // const postComment = new PostComment();
  // postComment.post = post;
  // postComment.content = content;
  // await this.postCommentModel.updateOne({
  //   id: postComment._id,
  //   ...postComment,
  // });
  // post.comments.push(postComment);
  // return post.save();
  // }

  // async updatePostComment(
  //   updatePostCommentInput: UpdatePostCommentInput,
  // ): Promise<PostComment> {
  //   const { id, content } = updatePostCommentInput;
  //   await this.postCommentModel.updateOne({ id }, { content });
  //   return this.postCommentModel.findOne({ id });
  // }

  // async deletePostComment(id: number): Promise<PostComment> {
  //   const comment = await this.postCommentModel.findOne({ id });
  //   await this.postCommentModel.deleteOne({ id });
  //   return comment.save();
  // }
}
