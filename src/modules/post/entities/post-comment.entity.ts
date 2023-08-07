import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Post } from './post.entity';
import { User } from 'src/modules/user/models/user.model';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Field, ObjectType } from '@nestjs/graphql';

export type PostCommentDocument = PostComment & Document;

@Schema({ timestamps: true })
@ObjectType()
export class PostComment extends AbstractDocument {
  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Type(() => User)
  user: User;

  @Field(() => Post)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  @Type(() => Post)
  post: Post;

  @Prop()
  @Field(() => String)
  content: string;
}
