import { Post } from 'src/modules/post/entities/post.entity';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostLike } from '../entities/post-like.entity';
import { PostComment } from '../entities/post-comment.entity';

export type PostDocument = Document & Post;
export type PostLikeDocument = Document & PostLike;
export type PostCommentDocument = Document & PostComment;

export const PostSchema = SchemaFactory.createForClass(Post);
export const PostLikeSchema = SchemaFactory.createForClass(PostLike);
export const PostCommentSchema = SchemaFactory.createForClass(PostComment);
