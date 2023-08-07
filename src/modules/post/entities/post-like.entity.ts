import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Post } from './post.entity';
import { User } from 'src/modules/user/models/user.model';
import { Type } from 'class-transformer';
import { AbstractDocument } from 'src/libs/database/mongo';
import { Field, ObjectType } from '@nestjs/graphql';

export type PostLikeDocument = PostLike & Document;

@ObjectType()
@Schema({ timestamps: true })
export class PostLike extends AbstractDocument {
  @Field(() => User)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Type(() => User)
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  @Field(() => Post)
  @Type(() => Post)
  post: Post;
}
